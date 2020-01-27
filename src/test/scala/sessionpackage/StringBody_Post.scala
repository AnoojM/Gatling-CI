package sessionpackage

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class StringBody_Post extends Simulation {

  val httpConf = http.baseUrl("https://api.rebrandly.com").header("apikey", "4ef31ee571b14a10af9a54eb87acafa6")

  val scn = scenario("CreateLink")
    .exec(http("CreateLink").post("/v1/links").body(StringBody("""{"destination":"https://www.qamilestone.com/post/gatling-post-request-body-using-elfilebody-method","slashtag":"posttag","domain":{"id":"","fullName":""},"title":"gatling-demo"}""")).asJson)
  setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)


}
