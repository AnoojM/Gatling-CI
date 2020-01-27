package sessionpackage

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class StringBody_ELString_Post extends Simulation {

  var title = "gatling-demo"

  val httpConf = http.baseUrl("https://api.rebrandly.com").header("apikey", "4ef31ee571b14a10af9a54eb87acafa6")

  val bodyFeederValues = csv("data/bodyFeeder.csv")

  val scn = scenario("CreateLink")
    .exec( session=>
  {
    session.set("title",title)
  })
    .feed(bodyFeederValues)
    .exec(http("CreateLink").post("/v1/links").body(StringBody("""{"destination":"${destination}","slashtag":"${slashtag}","domain":${domain},"title":"${title}"}""")).asJson)
  setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)


}
