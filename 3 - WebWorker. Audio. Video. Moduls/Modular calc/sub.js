onmessage=function(e){
    // let backgroundRes= `Результат: ${e.data[0] - e.data[1]}`;
    let backgroundSubRes='result: ' + (e.data[0] - e.data[1]);
    postMessage(backgroundSubRes);
}