// const nums = [2,2,1,1,1,2,2]
// const newnums=[]
// var seen = {};
// for(var i=0; i<nums.length;i++){
//     if (!(nums[i] in seen)){
//         newnums.push(nums[i])
//         const nolength=nums.filter((e)=>e===nums[i]).length
//         seen[nums[i]] = nolength;
//     }
// }

// let highestValue = 0;
// let highestKey = null;

// for (let [key, value] of Object.entries(seen)) {
//     if (value > highestValue) {
//         highestValue = value;
//         highestKey = key;
//     }
// }

// console.log('Highest value:', highestValue);
// console.log('Key of highest value:', highestKey);
// The Object.assign() method is used to copy the values and properties
//  from one or more source objects to a target object.
//   It invokes getters and setters since
//    it uses both [[Get]] on the source and [[Set]] on the target.
// const person1 = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
//   };
//   // Create Source Object
//   const person2 = {firstName: "Anne",lastName: "Smith"};
//   // Assign Source to Target
//   const person3=Object.assign(person1, person2);
//   console.log('person3',person3)

// Creating 3 object constructors and assigning values to it
// let obj1 = { a: 10, b: 10, c: 10 };
// let obj2 = { b: 20, c: 20 };
// let obj3 = { c: 30 };

// // Creating a target object and copying values and 
// // properties to it using object.assign() method
// let new_obj = Object.assign({}, obj1, obj2, obj3);

// // Displaying the target object
// console.log(new_obj);

// const obj1 = { a: 1 };

// // creating a target object and copying values and 
// // properties to it using object.assign() method
// // Here, obj1 is the source object
// const new_obj = Object.assign({}, obj1);

// // Displaying the target object 
// console.log(new_obj);
// Object.assign() is used for cloning an object, 
// to merge objects with the same properties.

// Object.entries() returns an array of the key/value pairs in an object:
const person = {
    firstName : "John",
    lastName : "Doe",
    age : 50,
    eyeColor : "blue"
  };
  //   let text = Object.entries(person);
  //   console.log(text)
//   for (let [key, values] of Object.entries(person)){
//             console.log(`${key} => ${values}`)
//   }

//  Object.values() is similar to Object.entries(),
//  but returns a single dimension array of the object values: 
//   let values = Object.values(person);

//   The Object.keys() method returns an array with the keys of an object.
// const keys = Object.keys(person);
