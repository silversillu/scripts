geolocation = {};
geolocation.requestGeo = function(c) {
    geolocation.cdn3Requested = +new Date;
    var b = document.head || document.getElementsByTagName("head")[0] || document.documentElement,
        a = document.createElement("script");
    a.type = "text/javascript";
    a.async = !0;
    a.src = c;
    b.insertBefore(a, b.firstChild)
};

geolocation.requestGeo("//cdn3.optimizely.com/js/geo.js");

optimizelyGeo; // wait till ready!
