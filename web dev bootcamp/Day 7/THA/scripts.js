//******************************************************************************************************************************************

//Problem 1
var student ={
	name:"David Rayy",
	sclass: "VI",
	rollno : 12
};

console.log("Properties of student are :\n");
console.log(Object. keys(student));

//or custom_printing keys by using for loop
for(let item in student){
	console.log(item);
	// console.log(student[item]);
}

//******************************************************************************************************************************************

//Problem 2
var student2 ={
	name:"Honey Paji",
	sclass: "XXX",
	rollno : 99
};
function custom_print(stu){
	for(let item in stu){
	console.log(item,":",stu[item]);
	}
	console.log("\n\n");
}
console.log("Before deleting the roll no. property :-");
custom_print(student2);

delete student2.rollno;
// delete student2[rollno];
console.log("After deleting the roll no. property :-");
custom_print(student2);


//******************************************************************************************************************************************

//Problem 3
console.log(Object. keys(student).length);



//******************************************************************************************************************************************
//Problem 4
var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, 
{ author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, 
{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];
// console.log(library);
library.forEach(custom_print);



//******************************************************************************************************************************************
//Problem 5
var cylinder ={
	height:10,
	radius:10
}
let pie = 3.1415;
let res = (pie*cylinder.height*cylinder.radius*cylinder.radius).toFixed(4);
console.log("Volume of Cylinder is: ",res);


//******************************************************************************************************************************************
//Problem 6
var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, 
{ title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, 
{ title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }];

console.log("Before");
library.forEach(custom_print);



library.sort((a,b) =>a.libraryID>b.libraryID? -1:1)
console.log("After");
library.forEach(custom_print);
// console.log(library);

//******************************************************************************************************************************************