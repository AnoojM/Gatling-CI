package sessionpackage

import io.gatling.core.Predef._
import io.gatling.http.Predef._

import scala.util.Random

class StringBody_ELFileBody_Dynamic_Post_RandomString_CustomFeeder extends Simulation {

  def randomString = Random.alphanumeric.take(4).mkString
  var title = " "
  var slashtag = " "
  var destination =" "
  var randString = Iterator.continually(Map("slashtag"->s"myslashtag_$randomString","title"->s"mytitle_$randomString"))

  val httpConf = http.baseUrl("https://api.rebrandly.com").header("apikey", "4ef31ee571b14a10af9a54eb87acafa6")

  val linkShorten = csv("data/linkShortenUpdated.csv").circular

  val scn = scenario("CreateLink").repeat(2) {
    feed(linkShorten)
      .exec(session => {

         println(session("destination").as[String])
         println(session("slashtag").as[String])
        println(session("title").as[String])
        session
      }
      )
      .exec(http("CreateLink").post("/v1/links").body(StringBody(session => s"""{"destination":"$destination","slashtag":"$slashtag","title":"$title"}""")).asJson)
  }
  setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)

}
