// JavaScript Program to Add Key/Value Pair to an Object.

const Fruits ={
    fruitName:"mango",
    color:'yellow',
    taste:'sweet'
}
// lets add one more property .
// (#)Method-1 by Dot(.) Notation
Fruits.price = 40;
// (#)Method-2 by Square brakets[].
Fruits['category'] ='fruit';

console.log(Fruits);
// output: 
// {
//     fruitName: 'mango',
//     color: 'yellow',
//     taste: 'sweet',
//     price: 40,
//     category: 'fruit'
//   }
