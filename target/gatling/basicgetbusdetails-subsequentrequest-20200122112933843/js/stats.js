var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2",
        "ok": "2",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2917",
        "ok": "2917",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4678",
        "ok": "4678",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3798",
        "ok": "3798",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "881",
        "ok": "881",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3798",
        "ok": "3798",
        "ko": "-"
    },
    "percentiles2": {
        "total": "4238",
        "ok": "4238",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4590",
        "ok": "4590",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4660",
        "ok": "4660",
        "ko": "-"
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
        "count": 2,
        "percentage": 100
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.222",
        "ok": "0.222",
        "ko": "-"
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
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2917",
        "ok": "2917",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2917",
        "ok": "2917",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2917",
        "ok": "2917",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2917",
        "ok": "2917",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2917",
        "ok": "2917",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2917",
        "ok": "2917",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2917",
        "ok": "2917",
        "ko": "-"
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
        "percentage": 100
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.111",
        "ok": "0.111",
        "ko": "-"
    }
}
    },"req_getseatlayoutre-a7e69": {
        type: "REQUEST",
        name: "getSeatlayoutrequest",
path: "getSeatlayoutrequest",
pathFormatted: "req_getseatlayoutre-a7e69",
stats: {
    "name": "getSeatlayoutrequest",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "4678",
        "ok": "4678",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4678",
        "ok": "4678",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4678",
        "ok": "4678",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4678",
        "ok": "4678",
        "ko": "-"
    },
    "percentiles2": {
        "total": "4678",
        "ok": "4678",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4678",
        "ok": "4678",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4678",
        "ok": "4678",
        "ko": "-"
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
        "percentage": 100
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.111",
        "ok": "0.111",
        "ko": "-"
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
