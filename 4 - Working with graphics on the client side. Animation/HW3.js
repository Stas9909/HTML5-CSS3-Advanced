function BarChart(data, width, height, color){
    this.chart=document.createElementNS("http://www.w3.org/2000/svg", "svg");
    this.data=data;
    this.chart.style.width=width;
    this.chart.style.height=height;
    console.log(this.chart.style.height)  
    this.width=width;
    this.height=height;
    console.log(this.height)
    this.color=color

    let max=Number.NEGATIVE_INFINITY;
    for(let i=0; i<this.data.length; i++){
        const elem = this.data[i];
        if(max < elem){
            max=elem
        }
    }


    let scale = this.height/max
    console.log(max)
    let barWidth = Math.floor(this.width/this.data.length);

    BarChart.prototype.parameters = function(){
        
  
    for(let i=0; i<data.length; i++){
        let bar = document.createElementNS("http://www.w3.org/2000/svg", "rect");

        let barHeight = this.data[i]*scale;
        bar.setAttribute("height", barHeight+"px");
        bar.setAttribute("width", barWidth - 4+"px");

        bar.setAttribute("y", this.height - barHeight);
        bar.setAttribute("x", barWidth * i);
        console.log(bar);

        bar.style.fill=this.color;
        console.log(bar)

        bar.addEventListener("mouseover", over);
        bar.addEventListener("mouseout", out);
        this.chart.append(bar)
        
        // BarChart.prototype.bar
    }
}

    function over(){this.style.fill="green"}
    function out(){this.style.fill="crimson"}
}