// // Write a JavaScript function to check whether an `input` is an array or not.
// let numbers = [1, 2, 4, 0]
// let string = 'w3resource'
// // check whether it is array or not
// let array = Array.isArray(numbers)
// console.log(array);

// Write a JavaScript function to clone an array.
// let array =[1, 2, 4, 0]
// let newarray = [...array]
// console.log(newarray)
// let array =[1, 2, 4, 0]
// console.log(array.slice(0,1))
// // ------------------------samefunctionality------------------
// console.log(array[0])
// console.log(array.at(0))
//-------------------------samefunctionality------------------
// -------------------------------entry will give u index and value----------------
// Create an Array
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// // Create an Iterator
// const list = fruits.entries();
// console.log(list);

// // List the Entries
// let text = "";
// for (let[ x ,y]of list) {
//     console.log(x,y);
//   text += x;
// }
// console.log(text);
// -------------------------------
// const fruits = ["Banana", "Orange", "Apple", "Mango","Banana1", "Orange1", "Apple1",];
// fruits.copyWithin(3, 0,2);
// console.log(fruits);
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // fruits.fill("Kiwi");
// fruits.fill("Kiwi", 2, 3);
// Convert an array to a string:
// const fruits = [1, "Orange", "Apple", "Mango"];
// let text = fruits.toString();
// console.log(typeof(text[0]));
// let str = ""
// let myColor = ["Red", "Green", "White", "Black"];
// for (let i = 0; i < myColor.length; i++) {
//     str = str+","+String(myColor[i])
// }
// console.log(str);
// let arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// const arr2 = arr1.sort((a,b)=>a-b)  
// console.log(arr2);
// 8. Most Frequent Array Item

// Write a JavaScript program to find the most frequent item in an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )
// function repeatedNumber(arr) {
//     arr.sort();
//     let element = arr[0]
//     let noOfTimes = 1
//     let maxcount = 1
//     for (let i=1; i < arr.length;i++ ){
//         if (arr[i] === arr[i-1]){
//             noOfTimes++
//         }
//         else{
//             noOfTimes = 1
//         }
//         if (noOfTimes > maxcount){
//             maxcount = noOfTimes
//             element =arr[i]
//         }

//     }
//     console.log(`${element} ( ${maxcount} times )`);

// }
// const arr11 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// // Call the function
// repeatedNumber(arr11);
// 
// Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'
// let str = 'The Quick Brown Fox'
// let words = str.split('')
// console.log(words)
// let str2 = ''
// for (let  i = 0; i < words.length;i++){
//         if (words[i] != words[i].toLowerCase()){
//             str2 = str2 + words[i].toLowerCase()
//     }
//             if (words[i] == words[i].toLowerCase()){
//             str2 = str2 + words[i].toUpperCase()
//     }
   
// }
//  console.log(str2)
// Write a JavaScript program to find the sum of squares of a numerical vector.
// let arr = [1,2,3,4]
// sum = 0
// for (let i =0; i <arr.length; i++ ){
//     sum = sum + arr[i]**2
// }
// console.log(sum)
// Write a JavaScript program to compute the sum and product of an array of integers.
// let arr = [1,2,3,4]
// let sum = 0
// let prod = 1
// for (let i =0; i <arr.length; i++ ){
//     sum = sum + arr[i]
//     prod = prod * arr[i]
// }
// console.log(sum)
// console.log(prod)
// Write a JavaScript program to find the leap years in a given range of years.
for (let i = 2000; i <= 2010;i++){
    if (i%3 == 0){
    console.log(i)
    }
}
// Write a JavaScript program to compute the union of two arrays.
// Sample Data :
// console.log(union([1, 2, 3], [100, 2, 1, 10]));
// [1, 2, 3, 10, 100]
function union(arr1,arr2){
    const result = arr1.concat(arr2.filter(item=>!arr1.includes(item)))
     return result;
}

// Sample Data
// console.log(union([1, 2, 3], [100, 2, 1, 10]));
// Write a JavaScript function to find the difference between two arrays.
// Test Data :
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]
// function union(arr1,arr2){
//     const result = arr1.concat(arr2.filter(item=>!arr1.includes(item)))
    
//     const duplicatevalues = arr1.filter(item=>arr2.includes(item))
//     const uniquevalues = result.filter(item=>!duplicatevalues.includes(item))
//      return uniquevalues;
// }

// // Sample Data
// console.log(union([1, 2, 3], [100, 2, 1, 10]));

// Union of Two Arrays

// Write a JavaScript program to compute the union of two arrays.
// Sample Data :
// console.log(union([1, 2, 3], [100, 2, 1, 10]));
// [1, 2, 3, 10, 100]
// function union(arr1,arr2){
//     const result = arr1.concat(arr2.filter(item=>!arr1.includes(item)))
    
//     const duplicatevalues = arr1.filter(item=>arr2.includes(item))
//     const uniquevalues = result.filter(item=>!duplicatevalues.includes(item))
//      return uniquevalues;
// }

// // Sample Data
// console.log(union([1, 2, 3], [100, 2, 1, 10]));
// Find Pair with Target Sum

// Write a JavaScript program to find a pair of elements (indices of the two numbers) in a given array whose sum equals a specific target number.

// Input: numbers= [10,20,10,40,50,60,70], target=50
// Output: 2, 3
// let numbers = [10, 20, 10, 40, 50, 60, 70];
// let target = 50;
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     for (let j = i; j < numbers.length; j++) {
//         sum = numbers[j]+numbers[i] 
//         // console.log(`Comparing: numbers[${i}] (${numbers[i]}) + numbers[${j}] (${numbers[j]}) = ${sum}`);
        
//         if (sum == target) {
//             console.log('Match Found:');
//             console.log(i,j);
//         }
//     }
// }
// var array1 = [1, 2, 3];
// var array2 = [2, 30, 1];
// let array3 = [...array1,...array2]
// let array4 =[]
//     for (let i = 1; i < array3.length; i++) {
//      if (!array4.includes(array3[i])){
//          array4.push(array3[i])
       
//      }
//     }
//       console.log(array4)
// Write a JavaScript function to remove a specific element from an array.
// Test data :
// console.log(remove_array_element([2, 5, 9, 6], 5));
// [2, 9, 6]
let array = [1,2,3,4,5]
array = array.filter(item=>item!=5)
console.log(array)