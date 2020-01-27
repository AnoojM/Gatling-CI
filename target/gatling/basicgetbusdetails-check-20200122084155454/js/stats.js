var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "3",
        "ok": "1",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "1439",
        "ok": "3122",
        "ko": "1439"
    },
    "maxResponseTime": {
        "total": "11190",
        "ok": "3122",
        "ko": "11190"
    },
    "meanResponseTime": {
        "total": "5250",
        "ok": "3122",
        "ko": "6315"
    },
    "standardDeviation": {
        "total": "4256",
        "ok": "0",
        "ko": "4876"
    },
    "percentiles1": {
        "total": "3122",
        "ok": "3122",
        "ko": "6315"
    },
    "percentiles2": {
        "total": "7156",
        "ok": "3122",
        "ko": "8752"
    },
    "percentiles3": {
        "total": "10383",
        "ok": "3122",
        "ko": "10702"
    },
    "percentiles4": {
        "total": "11029",
        "ok": "3122",
        "ko": "11092"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1,
        "percentage": 33
    },
    "group4": {
        "name": "failed",
        "count": 2,
        "percentage": 67
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.25",
        "ok": "0.083",
        "ko": "0.167"
    }
},
contents: {
"req_getbusrequest-0cd4b": {
        type: "REQUEST",
        name: "getbusrequest",
path: "getbusrequest",
pathFormatted: "req_getbusrequest-0cd4b",
stats: {
    "name": "getbusrequest",
    "numberOfRequests": {
        "total": "3",
        "ok": "1",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "1439",
        "ok": "3122",
        "ko": "1439"
    },
    "maxResponseTime": {
        "total": "11190",
        "ok": "3122",
        "ko": "11190"
    },
    "meanResponseTime": {
        "total": "5250",
        "ok": "3122",
        "ko": "6315"
    },
    "standardDeviation": {
        "total": "4256",
        "ok": "0",
        "ko": "4876"
    },
    "percentiles1": {
        "total": "3122",
        "ok": "3122",
        "ko": "6315"
    },
    "percentiles2": {
        "total": "7156",
        "ok": "3122",
        "ko": "8752"
    },
    "percentiles3": {
        "total": "10383",
        "ok": "3122",
        "ko": "10702"
    },
    "percentiles4": {
        "total": "11029",
        "ok": "3122",
        "ko": "11092"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1,
        "percentage": 33
    },
    "group4": {
        "name": "failed",
        "count": 2,
        "percentage": 67
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.25",
        "ok": "0.083",
        "ko": "0.167"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
