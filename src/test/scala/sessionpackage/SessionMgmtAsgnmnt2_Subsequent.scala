package sessionpackage

import io.gatling.core.Predef._
import io.gatling.http.Predef._

class SessionMgmtAsgnmnt2_Subsequent extends Simulation{

  //curl -v  -X GET "http://developer.goibibo.com/api/voyager/get_hotels_by_cityid/?app_id=3dd76d27&app_key=caf798c62e91dd6d1062b4e833b995ea&city_id=6771549831164675055"

  val httpConf = http.baseUrl("http://developer.goibibo.com")

  val appId="3dd76d27"
  val appKey="caf798c62e91dd6d1062b4e833b995ea"

  val cityFeeder=csv("data/city_list.csv").circular

  val scn = scenario("GetHotelDetails")
    .feed(cityFeeder)
    .exec(http("gethotelrequest").get("/api/voyager/get_hotels_by_cityid/?app_id="+appId+"&app_key="+appKey+"&city_id=${City ID}")
    .check(jsonPath("$.data..hotel_geo_node._id").find.saveAs("hotelId")))
      .exec(session =>
      {
        val hotelIdSession = session("hotelId").as[String]
        println(hotelIdSession)
        session
      })
      .exec(http("hoteldetailsRequest").get("/api/voyager/?app_id="+appId+"&app_key="+appKey+"&method=hotels.get_hotels_data&id_list=${hotelId}&id_type=_id")
      .check(bodyString.saveAs("hotelDetailsResponse")))
      .exec( session=>
        {
          println(session("hotelDetailsResponse").as[String])
          session
        }

      )
  setUp(scn.inject(atOnceUsers(1)).protocols(httpConf))
}
