function staircase(n) {
    // Write your code here
    let filledArray = new Array(n).fill(' ');
    while (filledArray.indexOf(' ') !== -1) {
        filledArray.shift();
        filledArray.push('#');
        console.log(filledArray.join(""));
        n--;
    }
}