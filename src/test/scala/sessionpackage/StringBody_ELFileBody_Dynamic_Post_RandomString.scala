package sessionpackage

import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.util.Random

class StringBody_ELFileBody_Dynamic_Post_RandomString extends Simulation {

  def randomString = Random.alphanumeric.take(4).mkString
  var title = "gatling-demo1"
  var slashtag ="testtag1"
  var destination =" "

  val httpConf = http.baseUrl("https://api.rebrandly.com").header("apikey", "4ef31ee571b14a10af9a54eb87acafa6")

  val linkShorten = csv("data/linkShortenUpdated.csv").circular

  val scn = scenario("CreateLink").repeat(2) {
    feed(linkShorten)
      .exec(session => {

        destination = session("destination").as[String]
        slashtag=slashtag+s"${randomString}"
        title=title+s"${randomString}"
        println(s"""{"destination":"$destination","slashtag":"$slashtag","title":"$title"}""")
        session
      }
      )
      .exec(http("CreateLink").post("/v1/links").body(StringBody(session => s"""{"destination":"$destination","slashtag":"$slashtag","title":"$title"}""")).asJson)
  }
  setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)

}
