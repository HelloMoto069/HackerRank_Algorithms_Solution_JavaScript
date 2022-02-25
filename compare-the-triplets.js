function compareTriplets(a, b) {
    // Write your code here
    var counta = 0;
    var countb = 0;
    var arr = [];
    for (let i=0; i<a.length; i++){
        if (a[i] > b[i]) {
            counta++;
        }
        if (a[i] < b[i]){
            countb++;
        }
    }
    arr.push(counta);
    arr.push(countb);
    return(arr);
}