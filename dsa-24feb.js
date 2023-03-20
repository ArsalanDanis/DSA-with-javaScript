// / Program to Display the Multiplication Table!!

function multiplicationTable(num) {
    console.log(`Table of ${num} is given below.`);
    for (let i = 1; i < 11; i++) {
        let table = num * i;
        // console.log(num,"*",i,"=",table);
        // console.log(num+"*"+i+"="+table);
        console.log(`${num} * ${i} = ${table}`);
    };
};
multiplicationTable(19);

// Table of 19 is given below.

// 19 * 1 = 19
// 19 * 2 = 38
// 19 * 3 = 57
// 19 * 4 = 76
// 19 * 5 = 95
// 19 * 6 = 114
// 19 * 7 = 133
// 19 * 8 = 152
// 19 * 9 = 171
// 19 * 10 = 190

