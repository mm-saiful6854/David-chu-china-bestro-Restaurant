(function (global){
    var ajaxUtil = {};


    function createHttpRequest(){
        return (new global.XMLHttpRequest);
    }


    ajaxUtil.sendGetRequest = function (requestURL, responseHandler){
        var request = createHttpRequest();
        request.onreadystatechange = function (){
            responseHandle(request,responseHandler);
        }
        request.open('GET',requestURL,true);
        request.send(null);
    }

    function responseHandle(request,responseHandler){
        if(request.readyState === 4 && request.status===200){
            responseHandler(request);
        }
    }

    global.ajaxUtil = ajaxUtil;



})(window);
