var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "957",
        "ok": "957",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "47",
        "ok": "47",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "602",
        "ok": "602",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "263",
        "ok": "263",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "125",
        "ok": "125",
        "ko": "-"
    },
    "percentiles1": {
        "total": "306",
        "ok": "306",
        "ko": "-"
    },
    "percentiles2": {
        "total": "346",
        "ok": "346",
        "ko": "-"
    },
    "percentiles3": {
        "total": "424",
        "ok": "424",
        "ko": "-"
    },
    "percentiles4": {
        "total": "551",
        "ok": "551",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 957,
    "percentage": 100
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "15.689",
        "ok": "15.689",
        "ko": "-"
    }
},
contents: {
"req_get-entries-32a98": {
        type: "REQUEST",
        name: "Get entries",
path: "Get entries",
pathFormatted: "req_get-entries-32a98",
stats: {
    "name": "Get entries",
    "numberOfRequests": {
        "total": "484",
        "ok": "484",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "49",
        "ok": "49",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "602",
        "ok": "602",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "264",
        "ok": "264",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "127",
        "ok": "127",
        "ko": "-"
    },
    "percentiles1": {
        "total": "307",
        "ok": "307",
        "ko": "-"
    },
    "percentiles2": {
        "total": "345",
        "ok": "345",
        "ko": "-"
    },
    "percentiles3": {
        "total": "413",
        "ok": "413",
        "ko": "-"
    },
    "percentiles4": {
        "total": "585",
        "ok": "585",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 484,
    "percentage": 100
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "7.934",
        "ok": "7.934",
        "ko": "-"
    }
}
    },"req_get-an-entry-de61b": {
        type: "REQUEST",
        name: "Get an entry",
path: "Get an entry",
pathFormatted: "req_get-an-entry-de61b",
stats: {
    "name": "Get an entry",
    "numberOfRequests": {
        "total": "473",
        "ok": "473",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "47",
        "ok": "47",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "496",
        "ok": "496",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "262",
        "ok": "262",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "123",
        "ok": "123",
        "ko": "-"
    },
    "percentiles1": {
        "total": "304",
        "ok": "304",
        "ko": "-"
    },
    "percentiles2": {
        "total": "348",
        "ok": "348",
        "ko": "-"
    },
    "percentiles3": {
        "total": "425",
        "ok": "425",
        "ko": "-"
    },
    "percentiles4": {
        "total": "486",
        "ok": "486",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 473,
    "percentage": 100
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "7.754",
        "ok": "7.754",
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
