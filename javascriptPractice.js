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