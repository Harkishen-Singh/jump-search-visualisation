class jump_c_visualisation extends JumpSearch {
    constructor(arr,l,s){
        super(arr,l,s);
        this.state = 'initial';
        this.svg = d3.select('body').append('svg').attr('height','100%')
            .attr('width','100%');
            this.width = 50;//rect width
            this.height = 50;//rect height
        this.group = this.svg.append('g').attr('transform','translate(20,0)');
    }
    arrayCreator(){
        for (var i = 0; i <this.len ; i++) {
            console.log(this.width+'  '+this.height);
            this.arrayVisCreation(this.width*i,this.height,this.array[i].toString());
        }
    }

    arrayVisCreation(x,y,t){
        this.group.append('rect').attr('width',this.width).attr('height',this.height)
            .attr('x',x).attr('y',y).attr('fill','none').attr('stroke','red').attr('stroke-width','2');
        this.group.append('text').attr('x',x + 15).attr('y',1.6*y).text(t).attr('fill','black');
    }
}
function kickStart(){
    var value = document.forms['askingArray']['inputElements'].value;
    console.log('The entered values are : '+ value);
}





values = [23,1,65,34,98,6,243,23,45,56,456,12,123];
var toBeSearch = 6;
//var o = new jump_c_visualisation(values,values.length,toBeSearch);
//o.arrayCreator();