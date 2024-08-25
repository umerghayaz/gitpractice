// Loop Practice
// factorial
// let i=1
// let fact=1
// for (let i=1; i<=5;i++){
//     fact=fact*i
// }
// console.log('fact',fact)
// even odd
// let i=1
// for (let i=1;i<=10;i++){
//     if (i%2 === 0)
//     {
//     console.log('even',i)       
//     }
//     else{
//     console.log('odd',i)
//     }
// }
// prime numbers 
// let i =0
// for( let i=1;i<=10;i++){
//     let flag=1
//     for (let j=2; j<i;j++){
//         if (i%j==0){
//             flag=0
//             break
//         }}
//         if (i > 1 && flag == 1) {
//             console.log(i);
//         }
// }
// anagram 
// let number = 153
// let convertInteger = number.toString()
// let sum = 0
// for (let i=0; i<convertInteger.length; i++){
//     sum = (convertInteger[i]**convertInteger.length) + sum
// }
// if (number === sum){
//     console.log('true')
// }
// else{
//     console.log('false')
// }
// PREFIX STATEMENT
// let i = 0;
// ++i
// POSTFIX STATEMENT
// let i = 0;
// i++
// console.log(i)
// let o = '123';
// let result = o.split("");
// console.log(result);

// Iterate (loop) over the properties of an object:
// const person = {fname:"John", lname:"Doe", age:25};
// let text = "";
// for (let x in person) {
//   text += person[x] + " ";
//   console.log('key',x)
//   console.log('value',person[x])
// }
// console.log('text',text)

// Iterate (loop) over the values of an array
// const person = [1,2,3,4]
// let text = "";
// for (let x of person) {
//   text += x + " ";
// }

// Iterate (loop) over the values of an array
// let text = "";
// const cars = [1,2,3,4]
// for (let x in cars) {
//   text += cars[x] + " ";
// }
// console.log('text',text)
// while loop
// let number = 153
// let convertInteger = number.toString()
// let i = 0;
// var sum = 0
// while (i < convertInteger.length){
//     sum = (convertInteger[i]**convertInteger.length) + sum
//     i++    
// }
// if (number === sum){
//     console.log('true')
// }
// else{
//     console.log('false')
// } 
let number = 153
let convertInteger = number.toString()
let i = 0;
var sum = 0
do{
    sum = (convertInteger[i]**convertInteger.length) + sum
    i++    
}
while (i < convertInteger.length)
if (number === sum){
    console.log('true')
}
else{
    console.log('false')
} 

