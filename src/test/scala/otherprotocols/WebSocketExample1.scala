package otherprotocols

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class WebSocketExample1 extends Simulation{

//http://demos.kaazing.com/echo/
  //ws://demos.kaazing.com/echo?.kl=Y
   val httpProtocol = http.baseUrl("http://demos.kaazing.com").wsBaseUrl("ws://demos.kaazing.com")

  val scn = scenario("testwebsocketscenario")
            .exec(http("firsthttprequest").get("/"))
  .exec(
        ws("opensocket").connect("/echo?.kl=Y")
       .onConnected(exec(ws("sendmessage").sendText("hello"))
       .exec(ws("secondmessage").sendText("I am a qa"))))
.exec(ws("closeconnection").close)

setUp(scn.inject(atOnceUsers(1))).protocols(httpProtocol)

}