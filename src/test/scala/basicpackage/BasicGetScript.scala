package basicpackage

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class BasicGetScript extends Simulation {

  val httpConf = http.baseUrl("https://api.openbrewerydb.org")

  val scn = scenario("basicgetscenario").exec(http("basicgetrequest").get("/breweries"))

  setUp(scn.inject(atOnceUsers(1), rampUsers(5), during(5),nothingFor(30)).protocols(httpConf).maxDgit


}
