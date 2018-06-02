class jump_c_visualisation extends JumpSearch {
    constructor(arr,l,s){
        console.log('search2 is '+s);
        super(arr,l,s);
        this.state = 'initial';
        this.svg = d3.select('body').append('svg').attr('height','100%')
            .attr('width','100%');
        this.count = 0;
        this.counter = 0;this.counter2= 0;this.idssa='add';
        this.group = this.svg.append('g').attr('transform','translate(20,0)');
    }
    idGenerator(){
        return Math.floor(Math.random()*100000);
    }
    arrayCreator(){
        for (var i = 0; i <this.len ; i++) {
            console.log(this.width+'  '+this.height);
            this.arrayVisCreation(this.width*i,this.height,this.array[i].toString());
            if (i==this.len -1) {
                this.group.append('text').text('(Sorted)').attr('x',this.width*(i+2)).attr('y',this.height*1.5)
                .attr('fill','red');
            }
        }
        if(this.count==0){
            this.count++;
            setTimeout(this.clearSVG.bind(this),2900);
            setTimeout(this.processes.bind(this),3000);
                    }
    }
    clearSVG(){
        for(var o=0;o<this.len;o++)
            d3.select('#'+this.id_arrayNumbers.toString()).remove();
    }
    clearSVGLines(){
        for(var o=0;o<5;o++){
            console.log('id was #'+this.idss.toString());
            d3.select('#'+this.idss.toString()).remove();
        }
    }
    arrayVisCreation(x,y,t){
        if(this.counter == 0){
            this.id_arrayNumbers ='ids'+ this.idGenerator();this.counter++;
        }
        console.log('Id : '+this.id_arrayNumbers);
        this.group.append('rect').attr('width',this.width).attr('height',this.height)
            .attr('x',x).attr('y',y).attr('fill','none').attr('stroke','red').attr('stroke-width','2');
        this.group.append('text').attr('x',x + 15).attr('y',1.6*y).text(t).attr('fill','black').attr('id',this.id_arrayNumbers);
    }
    linesShow(x1,y1,x2){
        var line_length1 = 30;
        x1-=(this.width/2);
        x2-=(this.width/2);
        y1 += this.height;
        // arrow making
        var x0=x2,y0=y1+20,y00=y1+5,x00=x2+10,x000=x2-10;
        if(this.counter2==0){
            this.idss ='id'+ this.idGenerator().toString();
            this.counter2++;
            console.log('Reached at id for linesShow')
        }

        console.log('reached lines ' + x1 +' ' + y1+ ' ' + x2)
        this.group.append('line').attr('x1',x1).attr('y1',y1+20).attr('x2',x1)
            .attr('y2',y1+line_length1+20).style('stroke','black').attr('stroke-width','2').attr('id',this.idss);  // line1
        this.group.append('line').attr('x1',x1).attr('y1',y1+line_length1+20).attr('x2',x2).attr('y2',y1+line_length1+20)
            .style('stroke','black').attr('stroke-width','2').attr('id',this.idss); // line2
        this.group.append('line').attr('x1',x2).attr('y1',y1+20+line_length1).attr('x2',x2).attr('y2',y1+20)
            .style('stroke','black').attr('stroke-width','2').attr('id',this.idss);// line3
        this.group.append('line').attr('x1',x0).attr('y1',y0).attr('y2',y0+10).attr('x2',x00).attr('stroke-width','2')
        .style('stroke','black').attr('id',this.idss);
        this.group.append('line').attr('x1',x0).attr('y1',y0).attr('y2',y0+10).attr('x2',x000).attr('stroke-width','2')
        .style('stroke','black').attr('id',this.idss);
        return true;
    }
    linesSingleShow(x1,y1,x2){
        var line_length1 = 30;
        x1-=(this.width/2);
        x2-=(this.width/2);
        this.group.append('line').attr('x1',x1).attr('y1',y1+15-this.height).attr('x2',x1)
            .attr('y2',y1+line_length1+15-this.height).style('stroke','black').attr('stroke-width','2').attr('id',this.idssa);
        this.group.append('line').attr('x1',x1).attr('y1',y1+15-(this.height)).attr('x2',x2).attr('y2',y1+15-(this.height))
            .style('stroke','black').attr('stroke-width','2').attr('id',this.idss);
        this.group.append('line').attr('x1',x2).attr('y1',y1+15+line_length1-this.height).attr('x2',x2).attr('y2',y1+15-this.height)
            .style('stroke','black').attr('stroke-width','2').attr('id',this.idss);

        this.group.append('line').attr('x2',x2+10).attr('y1',y1-5).attr('y2',y1-15)
            .attr('x1',x2)
            .attr('stroke-width','2')
            .style('stroke','black').attr('id',this.idss);
        this.group.append('line').attr('x2',x2-10).attr('y1',y1-5).attr('y2',y1-15)
            .attr('x1',x2)
            .attr('stroke-width','2')
            .style('stroke','black').attr('id',this.idss);
    }
}

$(document).ready(
    function(){
        $('#searchShow').hide();
        $('#searchclick').click(function() {
            $('#searchShow').show(1000);
        });
    }
    );




var value;
/*function kickStart(){
    var value = document.forms['askingArray']['inputElements'].value;
    console.log(value)
    var b = value.split(',');
    var arr = [];
    for(var i=0;i<b.length;i++){
        arr.push(parseInt(b[i]));
    }
    console.log('The entered values are : '+ arr);
    var toBeSearch = 6;
var o = new jump_c_visualisation(arr,arr.length,toBeSearch);
o.arrayCreator();
}*/
function kickStart(){
    var value = document.forms['askingArray']['inputElements'].value;
    console.log(value)
    var b = value.split(',');
    var arr = [];
    for(var i=0;i<b.length;i++){
        arr.push(parseInt(b[i]));
    }
    console.log('The entered values are : '+ arr);
    var toBeSearch = parseInt(document.forms['askingArray']['searchElement'].value);
var o = new jump_c_visualisation(arr,arr.length,toBeSearch);
o.arrayCreator();
}





//values = [23,1,65,34,98,6,243,23,45,56,456,12,123];
