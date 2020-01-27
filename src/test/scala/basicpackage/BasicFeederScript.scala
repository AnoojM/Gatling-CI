package basicpackage

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class BasicFeederScript extends Simulation {

  val httpConf = http.baseUrl("https://api.openbrewerydb.org")

  val states = csv("data/state.csv").circular

  val scn = scenario("basicfeederscenario")
    .feed(states)
    .exec(http("basicfeederrequest").get("/breweries?by_name=${state}"))

  setUp(scn.inject(atOnceUsers(4))).protocols(httpConf)


}
