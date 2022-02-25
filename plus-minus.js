function plusMinus(arr) {
    // Write your code here
    var positive = 0;
    var negative = 0;
    var zero = 0;
    
    var n = arr.length;
    
    for(let i =0; i<n; i++){
        if(arr[i] > 0){
            positive = positive+1;
        }
        
        if(arr[i] < 0){
            negative = negative+1;
        }
        
        if(arr[i] == 0){
            zero = zero+1;
        }
    }
    console.log(positive/n);
    console.log(negative/n);
    console.log(zero/n);
}