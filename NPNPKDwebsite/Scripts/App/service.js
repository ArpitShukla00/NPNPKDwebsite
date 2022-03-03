'use strict';
(function (ng, main) {
    main.factory('service', function ($http, $rootScope) {


        var baseURL = "http://localhost:60447/Service/Nagar_Nigam_Ebilling/Master/Master.svc";

        var baseTransactionalURL = "http://localhost:60447/Service/Nagar_Nigam_Ebilling/Transaction/Transaction.svc"

        var service = {};

        //service.InsertEvent = function (Event) {
        //    var jsonParam = JSON.stringify({ obj: Event });
        //    return $http({
        //        url: baseURL + "/insertevent",
        //        data: jsonParam,
        //        method: "POST",

        //        headers: { "Content-Type": "application/json" }
        //    });
        //};

        //service.GetEvent = function () {
        //    return $http({
        //        url: baseURL + "/getevent",
        //        method: "POST",
        //        headers: { "Content-Type": "application/json" }
        //    });
        //};
        return service;
    });

})(angular, mainApp);