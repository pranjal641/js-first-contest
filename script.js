/** @format */
let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map(function (value) {
    if (value.marks > 50) {
      console.log(value);
    }
  });
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(function (value) {
    if (value.marks > 50) {
      console.log(value);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  arr.push({ id:4,name:"susan",age:"20",marks:45 });
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  let filterArr = arr.filter((arr) => arr.marks < 50);
  console.log(filterArr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArr = [{ id: 10, name: "piyush", age: "24", age:"21",marks:90 }];
  let concatArr = arr.concat(newArr);
  console.log(concatArr);
}