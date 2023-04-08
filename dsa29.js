// # Program to Display Fibonacci Sequence Using Recursion

function Fibonacci(n){
    if(n==1){
        return 0;
    }
    if(n==2){
        return 1;
    }
        return Fibonacci(n -1)+ Fibonacci(n-2);
}
    const n = 10;
    var fibSeries = new Array(n);
    
    // fibSeries.fill(0);
    
    for(i=1;i<=n;i++){
        fibSeries[i-1]=Fibonacci(i);
    }


console.log("fibSeries(10) :",fibSeries);

// fibSeries(10) : [
//     0, 1,  1,  2,  3,
//     5, 8, 13, 21, 34
//   ]
