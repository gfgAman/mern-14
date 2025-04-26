// var a = 10
// console.log(typeof a);
// a = 'helllo'
// console.log(typeof a);
// a=true
// console.log(typeof a);


// var arr = [1,2,3,4]
// console.log(typeof arr);

// var obj = {
//     name:'Aman',
//     age:200,
//     isStudent:true
// }
// console.log(obj);

//var
//reclaration

// var a = 10
// console.log(a);
// var a = 'hello'
// console.log(a);

//initialization
// var a = 11
// console.log(a);
// a = 'hello'
// console.log(a);


//let
//reclaration
// let a = 10
// console.log(a);
// let a = 'hello'
// console.log(a);

//initialization
// let a = 11
// console.log(a);
// a = 'hello'
// console.log(a);

//const
//reclaration
// const a = 10
// console.log(a);
// const a = 'hello'
// console.log(a);

//initialization
// const a = 11
// console.log(a);
// a = 'hello'
// console.log(a)

//scope
//blocked scope
// let a = 10
// {
//     let a = 11 
// }
// console.log(a);

//functional scope

// var a = 10
// function abc(){
//     var a =11
//     console.log(a,'inner a');
// }
// abc()
// console.log(a,'outer a');


//hoisting: it is a phenomenon in which a variable or a function can be ctalled before their initializaion

// console.log(a);
// var a

// console.log(a);
// let a

// console.log(a);
// const a = 19

//operators:

// console.log(33+33);  //=>66
// console.log(33-33)  //=>0
// console.log(33%33)  //=>0
// console.log(33*33)  //=>1089
// console.log(33/33); //=>1

// console.log(33+'33');  //=>3333 66 error
// console.log("33"+'33'); //=>3333
// console.log('33'+33); //=>3333

// console.log(33-"33"); //error NaN
// console.log("33"-33); //error NaN
// console.log("33"-"33"); //error NaN

// console.log(typeof typeof isNaN());

// typeof "boolean"


// console.log(10>11);


//==,===

// console.log(33===33);
// console.log('33'===33);
// console.log('33'==='33');
// console.log(33==='33');


//increment and decrement operators



// let a = 10
// // a = a+1
// // a+=1
// // a++
// console.log(a);
// // a=++a+a++
// b=++a+a++
// // console.log(a);
// // ++a

// console.log(b);
// console.log(a);
// const a = 10
// const b = "10"

// console.log(a!=b); 


//logical operators

// OR

// a   b      OR(||)
// 0   0       0
// 0   1       1
// 1   0       1
// 1   1       1

// const a = 10
// const b = 100
// console.log(a||b);


// AND

// a   b   AND(&&)
// 0   0   0
// 0   1   0
// 1   0   0
// 1   1   1

// const a = 0
// const b =10
// console.log(a&&b); =>10

// const a = 10
// const b = 100
// console.log(a&&b); =>100