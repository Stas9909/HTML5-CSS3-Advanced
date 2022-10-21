onmessage=function(e){
    console.log("Сообщение получено из осн потока");
    let backgroundRes = 'result: ' + (Number(e.data[0]) + +(e.data[1]));
    this.postMessage(backgroundRes);
}