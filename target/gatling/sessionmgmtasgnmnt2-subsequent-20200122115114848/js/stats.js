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
        "total": "515",
        "ok": "515",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1946",
        "ok": "1946",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1231",
        "ok": "1231",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "716",
        "ok": "716",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1231",
        "ok": "1231",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1588",
        "ok": "1588",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1874",
        "ok": "1874",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1932",
        "ok": "1932",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1,
        "percentage": 50
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1,
        "percentage": 50
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.667",
        "ok": "0.667",
        "ko": "-"
    }
},
contents: {
"req_gethotelrequest-758d4": {
        type: "REQUEST",
        name: "gethotelrequest",
path: "gethotelrequest",
pathFormatted: "req_gethotelrequest-758d4",
stats: {
    "name": "gethotelrequest",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1946",
        "ok": "1946",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1946",
        "ok": "1946",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1946",
        "ok": "1946",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1946",
        "ok": "1946",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1946",
        "ok": "1946",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1946",
        "ok": "1946",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1946",
        "ok": "1946",
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
        "total": "0.333",
        "ok": "0.333",
        "ko": "-"
    }
}
    },"req_hoteldetailsreq-911a9": {
        type: "REQUEST",
        name: "hoteldetailsRequest",
path: "hoteldetailsRequest",
pathFormatted: "req_hoteldetailsreq-911a9",
stats: {
    "name": "hoteldetailsRequest",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "515",
        "ok": "515",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "515",
        "ok": "515",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "515",
        "ok": "515",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "515",
        "ok": "515",
        "ko": "-"
    },
    "percentiles2": {
        "total": "515",
        "ok": "515",
        "ko": "-"
    },
    "percentiles3": {
        "total": "515",
        "ok": "515",
        "ko": "-"
    },
    "percentiles4": {
        "total": "515",
        "ok": "515",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "0.333",
        "ok": "0.333",
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
