const nums = [2,2,1,1,1,2,2]
const newnums=[]
var seen = {};
for(var i=0; i<nums.length;i++){
    if (!(nums[i] in seen)){
        newnums.push(nums[i])
        const nolength=nums.filter((e)=>e===nums[i]).length
        seen[nums[i]] = nolength;
    }
}
// console.log(newnums)
// console.log(seen)
// const seen = { '2': 4, '3': 1, '4': 1, '8': 1 };
let highestValue = 0;
let highestKey = null;

for (let [key, value] of Object.entries(seen)) {
    if (value > highestValue) {
        highestValue = value;
        highestKey = key;
    }
}

console.log('Highest value:', highestValue);
console.log('Key of highest value:', highestKey);

