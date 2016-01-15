var utils = angular.module("utils", []);

utils.value("defaultTrimLength", 30);
utils.filter("trimText", function(defaultTrimLength){
    return function(data, trimLength){
        trimLength = trimLength || defaultTrimLength;
        return data.length < trimLength ? data : data.substr(0,trimLength) + '...';
    }
});

utils.value('momentApi', window.moment);
utils.filter('elapsedTime', function(momentApi){
    return function(data){
        return momentApi(data).fromNow();
    }
});
