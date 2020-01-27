package basicpackage

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import org.slf4j.LoggerFactory
import ch.qos.logback.classic.{Level,LoggerContext}

class BasicCheckScript_Logback extends Simulation {

  // Log all http requests

  val context:LoggerContext = LoggerFactory.getILoggerFactory.asInstanceOf[LoggerContext]
  context.getLogger("io.gatling.http").setLevel(Level.valueOf("TRACE"))

  val httpConf = http.baseUrl("https://api.openbrewerydb.org")

  val scn = scenario("basicgetscenario")

    .exec(http("basicgetrequest").get("/breweries")
        .check(status.is(200))
        .check(substring("state"))
        .check(regex(".*state.*"))
         )

  setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)


}
