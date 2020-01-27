package basicpackage

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class WebSocketExample2 extends Simulation{

//http://demos.kaazing.com/echo/
  //ws://demos.kaazing.com/echo?.kl=Y
   val httpProtocol = http.baseUrl("http://demos.kaazing.com").wsBaseUrl("ws://demos.kaazing.com")

  val scn = scenario("testwebsocketscenario")
            .exec(http("firsthttprequest").get("/"))
  .exec(
        ws("opensocket").connect("/echo?.kl=Y")
       .onConnected(exec(ws("sendmessage").sendText("hello")).pause(4)
       exec(ws("secondmessage").sendText("I am a qa")
       .await(20)(ws.checkTextMessage("check1").check(regex(".*I am.*").saveAs("myResponse")))
       )))
    .exec( session=> {
      println(session("myResponse").as[String])
      session
    })
.exec(ws("closeconnection").close)

setUp(scn.inject(atOnceUsers(1))).protocols(httpProtocol)

}