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
// for (let i = 2000; i <= 2010;i++){
//     if (i%3 == 0){
//     console.log(i)
//     }
// }
// Write a JavaScript program to compute the union of two arrays.
// Sample Data :
// console.log(union([1, 2, 3], [100, 2, 1, 10]));
// [1, 2, 3, 10, 100]
// function union(arr1,arr2){
//     const result = arr1.concat(arr2.filter(item=>!arr1.includes(item)))
//      return result;
// }

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
// let array = [1,2,3,4,5]
// array = array.filter(item=>item!=5)
// console.log(array)

// let l= [1,2,3,4]
// let sum = 0
// for (let i=0; i<l.length;i++){
//     sum = sum+l[i]
//     console.log(l[i])
// }

// let l= [9,2,3,4,8]
// let max = l[0]
// for (let i=0; i<=l.length;i++){
//     if (l[i]>max)
//     max = l[i]
// }

// let l= [9,2,3,4,8]
// let temp
// n = []
// for (let i=0; i<l.length;i++){
//  for (let j = 0; j < l.length - 1; j++) {
//     if (l[j] > l[j+1]){
//          temp =l[j]
//         l[j] = l[j+1]
//          l[j+1] = temp
//         }
//    }
// }
// console.log(l);

//  let l= [9,9,2,3,4,2,8]
//  let t = []
//  for (let i= 0; i<l.length;i++){
//     if (!t.includes(l[i]))
//         t.push(l[i])
//  }
//  console.log(t);
//   let l= [9,9,2,3,4,2,8]
//  let t = []
//  for (let i= 0; i<l.length;i++){
//     if (!t.includes(l[i]))
//         t.push(l[i])
//  }

//  console.log(t);

// let l= [9,2,3,4,8]
// let temp
// let target
// target = 13
// n = []
// for (let i=0; i<l.length;i++){
//  for (let j = 0; j < l.length ; j++) {
//     if (l[i] + l[j] == target){
//          console.log(l[i] , l[j]);
//         }
//     break
//    }
// }
// let l= [1,0,2,0,4]
// let t= []
// for (let i=0;i<l.length;i++){
//     if (l[i]==0){
//         t.push(l[i])
//         l.splice(i, 1);
//     }
// }
// l= [...l,...t]
// console.log(l)
// let l = [1,[2,3],[4,[5,6]]] 
// for (let i=0;i<l.length;i++){
//     console.log(l[i])
// }
// Question:

// You are given an array containing numbers from 1 to n, but one number is missing.

// Find the missing number.

// Example:
// [1,2,4,5] => 3
// let l = [6,4,1,5] 
// l.sort()
// for (let i=1;i<l.length+1;i++){
//     if (!l.includes(i)){
//         console.log(i);
//     }
// }
// let l = [1,2,3,4,5];
// let k = 2;

// for(let x = 0; x < k; x++) {
//     let last = l[l.length - 1];

//     for(let j = l.length - 1; j > 0; j--) {
//         l[j] = l[j - 1];
//     }
//     console.log('before',l);

//     l[0] = last;
//     console.log('after',l);

// }

// console.log(l);
// Find maximum number
// let l=[1,2,3]
// let first = l[0]
// let temp
// l.sort()
// for(let i = 0;i<l.length;i++){
//      if(first<l[i])
//         first = l[i]
// }
// console.log(first)
// Find minimum number
// for(let i = 0;i<l.length;i++){
//      if(first>l[i])
//         first = l[i]
// }
// console.log(first)

// 4. Count even numbers in array
// let l=[1,2,3]
// let eventcount = 0;
// let oddcount=0;

// for(let i = 0;i<l.length;i++){
//      if(l[i]%2===0){
//          eventcount= eventcount+1
//      }
//      else{
//         oddcount=oddcount+1
//      }
       
// }
// console.log(eventcount,oddcount);
// 6. Reverse an array manually (without reverse())
// let l=[1,2,3]
// for(let i = l.length-1;i>=0;i--){
//      console.log(l[i]);
//      }
// 7. Print all elements using loop
// for(let i = 0;i<l.length;i++){
//      console.log(l[i]);
//      }
// 8. Find average of array
// let l=[1,2,3]
// let sum =0
// for(let i = 0;i<l.length;i++){
//      sum=sum+l[i]
//      }
// console.log(sum);
// 9. Find largest and second largest number
// let l=[1,2,3,4]
// let first = l[0]
// let second = l[0]

// let temp
// l.sort()
// for(let i = 0;i<l.length;i++){
//      if(first<l[i])
//         first = l[i]
// }
// console.log(first)

// for(let i = 0;i<l.length;i++){
   
//         if (first != l[i]){
//         if(second<first){
//            second = l[i]
//         }
// }
// }


// console.log(second)

// 11. Remove duplicates

// [1,2,2,3,4,4] => [1,2,3,4]
// let l=[1,2,2,3,4,4] 
// let z= []
// for(let i = 0;i<l.length;i++){
//      if(!z.includes(l[i]))
//         z.push(l[i])
// }
// console.log(z)

// 12. Find duplicate elements

// let l=[1,2,2,3,4,4,3] 
// let z= []
// let y =[]
// for(let i = 0;i<l.length;i++){
//      if(!z.includes(l[i]))
//       {z.push(l[i])}
//      else{
// y.push(l[i])
//      }
// }
// console.log(y)
// 13. Count frequency of each element

//  let l=[1,2,2,3,4,4,3] 
// //  let maxcount =0
//  let z =[]
//  y=[]
//  for(let i = 0;i<l.length;i++){
//     if (z.includes(l[i])){
//         continue
//     }
//     let maxcount = 0;
//    for(let j = 0;j<l.length;j++){
//     if(l[i] == l[j]){
//         maxcount = maxcount+1
//     }
//     }
//      z.push(l[i]);
//     y.push(l[i], maxcount, ',');
//      }

// console.log(z,y)

//  let l=[1,2,3,4] 
//  let z= 2
//  for(let i = 0;i<2;i++){
//     let last = l[l.length-1]
//    for(let j = l.length-1;j>0;j--){
//           console.log(l[i],l[j]);
          
//          l[j] = l[j-1]
//     }
//      l[0]=last
//      }
// [1,2,3,4]->[3,4,1,2]
//  let l=[1,2,3,4] 
//  let z= 2
//  for(let i = 0;i<2;i++){
//     let last = l[0]
//    for(let j = 0;j<l.length;j++){
//         //   console.log(l[i],l[j]);
          
//          l[j] = l[j+1]
//     }
//      l[l.length-1]=last
//      }

// console.log(l);
// 17. Find common elements in two arrays
// let a = [1, 2, 3, 4, 5]
// let b = [3, 4, 5, 6, 7]
// let c= []
//  for(let i = 0;i<a.length;i++){
//      if(b.includes(a[i]))
//       c.push(a[i])
//     }
// console.log(c);
// 18. Find missing number from 1 to n
// let l = [4, 2, 1, 6, 5, 7] 
// l.sort()
// for(let j = 1;j<l.length+1;j++){
//     if(!l.includes(j))
//     console.log(j);
// }
// console.log(l)
// let l = [4, 2, 1, 6, 5, 7] 
// l.sort()
// for(let j = 1;j<l.length+1;j++){
//     if(l[j-1]<l[j])
//    {
//     console.log(true)
//     return true

//    }
//     else{
//        console.log(false);
//         return false
//     }
// }
// 20. Move all zeros to end
// [0,1,0,3,12] => [1,3,12,0,0]
// let l=[0,1,0,3,12]
// let z=[]
// let k=[]
// for(let j = 0;j<l.length;j++){
//     if(l[j]==0){
//       z.push(l[j])
//      }
//     else{
//         k.push(l[j])
//     }
// }
// l = [...k,...z]
// console.log(l);
// 21. Find pair whose sum = target
//  let l=[2,7,11,15] 
//  let sum =0
//  let z =9
//  y=[]
//  for(let i = 0;i<l.length;i++){

//    for(let j = 0;j<l.length;j++){
//          sum = l[i]+l[j]
//          if( sum ==z){
//          console.log(l[i],l[j])
            
//          }
//     }

//      }
// 22. Find all pairs with sum target
// let l=[2,7,11,15] 
//  let sum =0
//  let z =9
//  y=[]
//  for(let i = 0;i<l.length;i++){

//    for(let j = 0;j<l.length;j++){
//          sum = l[i]+l[j]
//           y.push(l[i],l[j],sum,',')
//     }

//      }
// console.log(y);

//  let l=[2,7,11,15] 
//  let sum =0
//  let z =17
//  y=[]
//  for(let i = 0;i<l.length;i++){

//    for(let j = 0;j<l.length;j++){
//          sum = l[i]+l[j]
//          if( sum ==z){
//          console.log(i,j,sum)
            
//          }
//     }

//      }
// 22. Find all pairs with sum target
// let l=[2, 3, 5, -2, 7, -4] 
//  let sum =0
//  let z =9
//  y=[]
//  for(let i = 0;i<l.length;i++){
//           sum = sum+l[i]
//           y.push(sum)
//      }
// y.sort()
// console.log(y);

// let first = y[0]
// let max = 0
//  for(let i = 0;i<y.length;i++){
//       if(y[i]<first){
//         first = y[i]
//     }
// }
// console.log(first);

