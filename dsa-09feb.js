// # Program two Swap two vriables !!

function swapTwoVariables(p, q) {
    var var1 = p;
    var var2 = q;
    console.log("Variables before swap :", var1, var2)

    var var2 = q;
    var var1 = p;
    console.log("Variables after swap :", var2, var1)
}
swapTwoVariables(25, 87);

// Variables before swap : 25 87
// Variables after swap : 87 25


// # Program to Swap Two Numbers !!

function swapTwoNumbers(a,b){
     const arr=[a,b];
     console.log("Numbers before swap :",arr)
     const newarr=[b,a]
     console.log("Numbers after swap :",newarr);
}
swapTwoNumbers(150,36);

// Numbers before swap : [ 150, 36 ]
// Numbers after swap : [ 36, 150 ]