
// The main differences between above examples is:
// filter() returns an array containing the element that satisfies the condition, but find() returns the element itself that satisfies the condition.
// In filter(), whole array is iterated despite the fact that the element being searched for is present at the beginning. But in find(), as soon as the element that satisfies the condition is found, it gets returned
// added find
// find searches not the whole list but it stops on certain point 
// if i want to find 102 than it searches and when it finds it doesnot go further if there is still 102 present 

const emp = [
    {
        name: "Ram",
        empID: 101
    },
    {
        name: "Sham",
        empID: 102
    },
    {
        name: "Mohan",
        empID: 103
    }
];

const res = emp.find(el => el.empID === 102);
console.log("res is: ", res);
// added filter
// filter searches  the whole list but it doesnot stops on certain point 
// if i want to find 102 than it searches in whole list and when it finds it doesnot stops and goes further 

const empfilter = [
    {
        name: "Ram",
        empID: 101
    },
    {
        name: "Sham",
        empID: 102
    },
    {
        name: "Mohan",
        empID: 102
    }
];

const resfilter = empfilter.filter(el => el.empID === 102);

console.log("res is: ", resfilter);
// While both map() and forEach() perform similar actions, there are some key differences in their performance.

// One significant difference is that map() returns a new array, whereas forEach() does not. This means that if you need to create a new array based on the values of an existing array, map() is the better choice. On the other hand, if you only need to perform an action on each element of an array and do not need to create a new array, forEach() may be a better choice.

// Another difference is that map() creates a new array with the same length as the original array, whereas forEach() does not modify the length of the original array. This means that map() can be slower in cases where the resulting array is not needed, as it requires additional memory allocation and copying.

// In terms of speed, it is generally accepted that forEach() is faster than map() for simple iterations, as forEach() does not need to create a new array. However, this can vary depending on the specific use case and the amount of data being processed.
const numbers = [1, 2, 3, 4, 5];

// Using map()
console.time('map');
const doubledNumbersMap = numbers.map((num) => num * 2);
console.timeEnd('map');

// Using forEach()
console.time('forEach');
const doubledNumbersForEach = [];
numbers.forEach((num)=>
{
doubledNumbersForEach.push(num * 2);
});
console.timeEnd('forEach');

console.log(doubledNumbersMap); // Output: [2, 4, 6, 8, 10]
console.log(doubledNumbersForEach); // Output: [2, 4, 6, 8, 
const originalArray = [1,2,3];
const newarray=[]
originalArray.forEach((item) => newarray.push(item*2))
console.log(newarray)
// this for reverting commit git reset shacode
//  this is for stashing 
// this is for cherrypick



const input1 = [1, -4, 12, 0, -3, 29, -150];
const positiveNo1 = input1.filter(e=>e>0)
console.log(positiveNo1)
const sum = positiveNo1.reduce((accumulator, curValue) => accumulator + curValue, 0)
console.log(sum)
// The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.
const input2 = [
    {
      name: "John",
      age: 13,
    },
    {
      name: "Mark",
      age: 56,
    },
    {
      name: "Rachel",
      age: 45,
    },
    {
      name: "Nate",
      age: 67,
    },
    {
      name: "Jennifer",
      age: 65,
    },
  ];
  const newArray=[]
  const age=input2.map(e=>e.age)
  const maxAge=Math.max(...age)
  const minAge=Math.min(...age)
  const diffAge=maxAge-minAge
  newArray.push(maxAge,minAge,diffAge)
  console.log('maxAge',maxAge,'minAge',minAge,'diffAge',diffAge,newArray)


const input = "George Raymond Richard Martin";
const positiveNo = input.split(' ')
const firstLetter=positiveNo.map(e=>e[0])

console.log(firstLetter.reduce((a,c)=>a+c))


const products = [
    { name: "Product 1", price: 20, category: "Electronics" },
    { name: "Product 2", price: 30, category: "Clothes" },
    { name: "Product 3", price: 40, category: "Electronics" },
    { name: "Product 4", price: 50, category: "Clothes" },
    { name: "Product 5", price: 60, category: "Clothes" },
    { name: "Product 6", price: 70, category: "Electronics" },
    { name: "Product 7", price: 80, category: "Clothes" },
    { name: "Product 8", price: 90, category: "Electronics" },
  ];
  const productsFilterElectronics = products.filter((e)=>e.category==='Electronics')
  const productsFilterClothes = products.filter((e)=>e.category==='Clothes')
  const electronicsAverage = productsFilterElectronics.map((e)=>e.price)
  const averageElectronics = electronicsAverage.reduce((a,c)=>a+c)/electronicsAverage.length
  console.log('productsFilterElectronics',productsFilterElectronics,'productsFilterClothes',productsFilterClothes,'electronicsAverage',electronicsAverage,'averageElectronics',averageElectronics)


