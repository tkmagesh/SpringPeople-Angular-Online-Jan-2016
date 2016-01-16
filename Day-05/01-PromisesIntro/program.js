/* Sync */
function addSync(x,y){
    console.log("[Provider] processing ", x , " and ", y);
    var result = x + y;
    console.log("[Provider] returning result");
    return result;
}

function addSyncClient(x,y){
    console.log("[Consumer] triggering add");
    var result = addSync(x,y);
    console.log("[Consumer] result = ", result);
}

/* Async */
function addAsync(x,y, onResult){
    console.log("[Provider] processing ", x , " and ", y);
    setTimeout(function(){
        var result = x + y;
        console.log("[Provider] returning result");
        if (typeof onResult === 'function'){
            onResult(result);
        }
    },3000);
}

function addAsyncClient(x,y){
    console.log("[Consumer] triggering add");
    addAsync(x,y, function(result){
        console.log("[Consumer] result = ", result);
    });
}


/* Using Promise*/

function addPromise(x,y){
    var promise = new Promise(function(resolve, reject){
        console.log("[Provider] processing ", x , " and ", y);
        setTimeout(function(){
            var result = x + y;
            console.log("[Provider] returning result");
            resolve(result);
        },3000);
    });
    return promise;
}




