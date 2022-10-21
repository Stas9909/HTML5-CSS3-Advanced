onmessage=function(e){
    let backgroundRes = 'result: ' + (e.data[0] * e.data[1]);
    this.postMessage(backgroundRes);
}