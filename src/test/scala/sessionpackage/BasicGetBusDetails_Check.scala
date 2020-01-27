package sessionpackage

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class BasicGetBusDetails_Check extends Simulation{

  //curl -v  -X GET "http://developer.goibibo.com/api/bus/search/?app_id=3dd76d27&app_key=caf798c62e91dd6d1062b4e833b995ea&format=json&source=bangalore&destination=hyderabad&dateofdeparture=20200126"

  val httpConf = http.baseUrl("http://developer.goibibo.com")

  val appId ="3dd76d27"
  val appKey = "caf798c62e91dd6d1062b4e833b995ea"
  val source ="bangalore"
  val destination = "hyderabad"
  val dateOfDeparture = "20200126"

  val sourceAndDestinationFeeder = csv("data/sourceanddestination.csv").circular

  val scn = scenario("GetBusDetails")
    .feed(sourceAndDestinationFeeder)
    .exec(http("getbusrequest").get("/api/bus/search/?app_id="+appId+"&app_key="+appKey+"&format=json&source=${source}&destination=${destination}&dateofdeparture="+dateOfDeparture+"")
     .check(jsonPath("$.data..skey").find.saveAs("searchKey")))

    //.check(jsonPath("$data..skey").find.saveAs("searchKey"))
    .exec(session=>
      {
        println(session("searchKey").as[String])
        session
      })

  setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)

}
