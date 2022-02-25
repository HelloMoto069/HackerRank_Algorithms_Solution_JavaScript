function diagonalDifference(arr) {
    // Write your code here
    var a = 0;
    var b = 0;
    var d = 0;
    for (let i=0; i<arr.length; i++){
            a = arr[i][i] + a;
    }
    for (let i=0; i<arr.length; i++){
            b = arr[i][arr.length-1-i] + b;
    }
    d = a-b;
    d = Math.abs(d)
    return d

}