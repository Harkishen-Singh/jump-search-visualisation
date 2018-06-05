
var ch=1;
class JumpSearch {
    constructor(arr,l,x,t){
        this.array = arr;
        this.len = l;
        this.search = x;
        this.position = 0;
        this.width = 50;//rect width
        this.height = 50;//rect height
        this.id_arrayNumbers = 0;this.present=0;this.idss='aa';
        //this.processes();
        this.universalIndex = 0;
        this.singleLoopcheck=false;
        this.time = t;this.state = true;
        this.bigArrIndexLast = 0;
    }
    
    processes(){
         this.shifts =Math.floor(Math.pow(this.len,0.5));var cc;
         this.checksEfficiency = this.len / this.shifts ;
         var check = this.isSorted(this.array);
         if (check == false) {
            this.sorter(this.array);
            cc=this.jumps();
         }
         
         if (this.position>=0) 
            console.log("Element found at index : "+this.position);
         else
            console.log('Element not found !');
        this.arrayCreator();
    }
    isSorted(arr){
        var is = false;
        for(var i=0;i<this.len-1; i++){
            if(this.array[i]<this.array[i+1])
                is = true;
            else{
                is = false;
                break;
            }
        }return is;
    }
    sorter(arr){
        for (var i = 0; i < this.len; i++) {
            for (var j = 0; j < this.len-1 ; j++) {
                if(this.array[j]>this.array[j+1]){
                    /*this.array[j] += this.array[j+1];
                    this.array[j+1] = this.array[j] - this.array[j+1];
                    this.array[j] = this.array[j] - this.array[j+1]; */
                    let temp = this.array[j];
                    this.array[j] = this.array[j+1];
                    this.array[j+1] = temp;
                }
            }
        }
    }
    jumps(){
        let found=false;
        /*
        for(var i=0;i<this.len;i+=this.shifts){
            if((i+this.shifts)<this.len)
                setTimeout(this.linesShow(this.width*i,this.height,this.width*i + this.shifts).bind(this),1000);
            if (this.search <= this.array[i]) {
                if (this.search==this.array[i]) {
                    this.position = i;found = true;break;
                }
                for(var j=i;j>=0; j--){
                    if(this.search == this.array[j]){
                        this.position = j;found = true;
                        break;
                    }
                    else
                        found = false;
                }
            }
        }
        if (found==false) {
            this.position = -1
        }*/
        var i = 0,aa=false,a;
        this.present = 1;
        
        this.loopRun(this.present,this.shifts);
        /*setInterval(function(){
            this.present= this.present + this.shifts;
        },2000);*/
        
        return this.position;

    }
    iiii(a,b){
        console.log('iiiii' + a+b)
    }
    loopRun(index,shift){
        
        if (this.search==this.array[index-1]) {
            this.position = index-1;
            console.log(' FOUND at '+this.position );
            this.stopping(this.position+1)

            return this.position;
        }
        //index++;
        //this.present++;
        //index = this.present;
        
        //console.log('aa is '+aa);

        this.present += this.shifts;console.log('this.present is '+this.present);
        if((this.present)<=this.len){
            console.log('this.present is : ********** '+this.present +' and array ' + this.array[this.present-1] + ' search '+this.search);
            if (this.array[this.present-5]>this.search) {
                this.loopSingleStep(index,-1);
            }
            else{
            this.clearSVGLines();
            var aa = this.linesShow(this.width*index,this.height,this.width*index + this.shifts*this.width);
            if(ch <= this.checksEfficiency){
                setTimeout(this.loopRun.bind(this),this.time, this.present, this.shifts);ch++;console.log('works!')
            }
            else{
                this.group.append('text').text('Reached Last').attr('x',this.width*index)
                .attr('y',this.width*index + this.shifts*this.width).attr('fill','red');
            }
            }
        }
        else{
            //this.loopRun(this.present,this.shifts);

            this.group.append('text').text('Reached Last').attr('x',this.width*index)
                .attr('y',this.height*3).attr('fill','red');
                var rr = this.loopSingleStep(index,1);
                this.universalIndex = index;
                if(rr==false)
                    setTimeout(this.loopSingleStep,1,index,-1);
                /*if(rr!=true){
                    if(index==this.len-1)
                        this.loopSingleStep(index,-1);
                    else
                        this.loopSingleStep(index,-1);
            }*/

        }
    }
    stopping(i){
        if(this.state==true){
            this.group.append('rect').attr('width',this.width+20).attr('height',this.height+20)
                .attr('x',this.width*(i-1)-10).attr('y',this.height-10).attr('fill','none')
                .attr('stroke','orange').attr('stroke-width','4');
            document.getElementById('status').innerHTML = 'Found!'
        }
        exit;
    }
    loopSingleStep2(index,step){
        console.log('Entered loop22')
        if (this.array[index-1]==this.search) {
            this.position = index-1;this.state = true;
            this.singleLoopcheck = true;this.stopping(index);
            return true;
        }
        this.clearSVGSubLines();
        this.linesSingleShow(this.width*index,this.height,this.width*index + step*this.width);
        index = index + step;
        if (index-1 >= this.len) {}
        if(this.singleLoopcheck==false && index-1>this.bigArrIndexLast){
            setTimeout(this.loopSingleStep2.bind(this),this.time,index,step);
        }
        else{
            document.getElementById('status').innerHTML = 'Not Found';
            this.stopping();
        }
    }
    loopSingleStep(index,step){
        let dd = false;
        if (this.array[index-1]==this.search) {
            this.position = index-1;this.state=true;
            this.singleLoopcheck = true;this.stopping(index);
            return true;
        }var dontEnter = false;
        if (index-1 <this.bigArrIndexLast) {
                document.getElementById('status').innerHTML = 'Element Not Found!' ;dd = true;
                this.state = false;
                this.stopping();
            }
        
        if (index == this.len) {this.loopSingleStep2(index,-1);
            dontEnter=true;
        }
        
        if(this.singleLoopcheck==false && dontEnter==false && dd == false){
            
            this.clearSVGSubLines();
            if (dd==false){
                this.linesSingleShow(this.width*index,this.height,this.width*index + step*this.width);index = index + step;
                setTimeout(this.loopSingleStep.bind(this),this.time,index,step);
            }  
        }

    }
}

/*
var values = [23,1,65,34,98,6,243,23,45,56,456,12,123];
var obj = new JumpSearch(values,values.length,123);
*/