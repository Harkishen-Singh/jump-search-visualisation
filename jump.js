
var ch=1;
class JumpSearch {
    constructor(arr,l,x){
        this.array = arr;
        this.len = l;
        this.search = x;
        this.position = 0;
        this.width = 50;//rect width
        this.height = 50;//rect height
        this.id_arrayNumbers = 0;this.present=0;this.idss='aa';
        //this.processes();
        console.log('search is '+this.search);
        this.singleLoopcheck=false;
    }
    
    processes(){
         this.shifts =Math.floor(Math.pow(this.len,0.5));var cc;
         this.checksEfficiency = this.len / this.shifts ;
         var check = this.isSorted(this.array);
         if (check == false) {
            console.log('Not sorted! sorting now...');
            this.sorter(this.array);
            cc=this.jumps();
         }
         console.log(this.array);
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
            return this.position;
        }
        //index++;
        //this.present++;
        //index = this.present;
        
        //console.log('aa is '+aa);

        this.present += this.shifts;console.log('this.present is '+this.present);
        if((this.present)<=this.len){
            console.log('this.present is : ********** '+this.present +' and array ' + this.array[this.present-1] + ' search '+this.search);
            if (this.array[this.present-1]>this.search) {
                this.loopSingleStep(index,-1);
                console.log('present exceeded search');
            }
            else{
            this.clearSVGLines();
            var aa = this.linesShow(this.width*index,this.height,this.width*index + this.shifts*this.width);
            if(ch < this.checksEfficiency){
                setTimeout(this.loopRun.bind(this),2000, this.present, this.shifts);ch++;console.log('works!')
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
                this.loopSingleStep(index,1);
        }
    }
    loopSingleStep(index,step){
        if (this.array[index-1]==this.step) {
            this.position = index-1;
            this.singleLoopcheck = true;
        }
        this.linesSingleShow(this.width*index,this.height,this.width*index + step*this.width);
        index = index + step;
        if(this.singleLoopcheck==false)
            setTimeout(this.loopSingleStep.bind(this),2000,index,step);
    }
}

/*
var values = [23,1,65,34,98,6,243,23,45,56,456,12,123];
var obj = new JumpSearch(values,values.length,123);
*/