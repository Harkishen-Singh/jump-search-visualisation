
class JumpSearch {
    constructor(arr,l,x){
        this.array = arr;
        this.len = l;
        this.search = x;
        this.position = 0;
        this.processes();
        console.log('Got inside root class');
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
                    this.array[j] += this.array[j+1];
                    this.array[j+1] = this.array[j] - this.array[j+1];
                    this.array[j] = this.array[j] - this.array[j+1]; 
                }
            }
        }
    }
    jumps(){
        let found=false;
        for(var i=0;i<this.len;i+=this.shifts){
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
        }
        return this.position;
    }
}

/*
var values = [23,1,65,34,98,6,243,23,45,56,456,12,123];
var obj = new JumpSearch(values,values.length,123);
*/