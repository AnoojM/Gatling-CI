package sessionpackage

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class RawFileBody_Post extends Simulation {

  val httpConf = http.baseUrl("https://api.rebrandly.com").header("apikey", "4ef31ee571b14a10af9a54eb87acafa6")

  val scn = scenario("CreateLink")
    .exec(http("CreateLink").post("/v1/links").body(RawFileBody("bodies/myFile.json")).asJson)
  setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)


}
