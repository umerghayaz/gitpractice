// //
// let nums1 = [1, 3];
// let nums2 = [2];
// let num3 = [...nums1, ...nums2];
// const sorted = Array.from(num3).sort((a, b) => a - b);
// // Sorts the Array in Ascending Order:

// // The .sort((a, b) => a - b) method is then applied to the copied array. This function sorts the elements in ascending numerical order.
// // (a, b) => a - b is a comparison function that defines the sort order:
// // When a - b is negative, a should come before b (smaller value comes first).
// // When a - b is positive, a should come after b (larger value comes later).
// // When a - b is zero, the elements are considered equal in sorting terms.
// console.log(sorted)
// const middle = Math.floor(sorted.length / 2);

// if (sorted.length % 2 === 0) {
//   return (sorted[middle - 1] + sorted[middle]) / 2;
// }
// function printInChunks(s) {
//   let result = "";
//   let list = [];
//   for (let i = 0; i < s.length; i++) {
//     result += s[i];
//     list.push(s[i]);
//     if ((i + 1) % 3 === 0) {
//       result += "\n";
//     }
//   }
//   console.log(result, list);
// }

// // Example usage
// printInChunks("PAHNAPLSIIGYIR");
// let n = 5;
// for (i = 1; i <= n; i++) {
//   var temp = i;

//   for (j = 1; j <= n; j++) {
//     // console.log(i)
//     temp = temp + " " + j;
//   }
//   console.log(temp);
// }
// function printInChunks(s) {
//   let result = "";
//   let list = [];
//   for (let i = 0; i < s.length; i++) {
//     result += s[i];
    
//     if ((i + 1) % 3 === 0) {
//       result += "\n";
//     }
//     }
//     var st =   result + "\n";
//     // console.log(st);
//     // st.split('\n')
//     console.log(st);
//      for (let i = 0; i < st.length; i++) {
//        result += st[i];

//        if ((i + 1) % 3 === 0) {
//          result += "\n";
//        }
//     }

//     console.log(result);


// }

// // Example usage
// printInChunks("PAYPALISHIRING");
// printing the string

// return sorted[middle];

//////////////////////////////////
let x = 123;
let flag = false
let str = x.toString();
const mi = -(2 ** 31);
const mx = 2 ** 31 - 1;
str = str.split("")
str = str[0]=='-'? str.slice(1):str
let v= ''
for (var i=0;  i < str.length; i++){
    v = str[i] + v
}
x = x < 0 ? '-' + v : v 
x = Number(x)
if (x < ~~(mi / 10) || x > ~~(mx / 10)) {
  x=0
}
console.log(x);



