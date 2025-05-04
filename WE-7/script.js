// functions

// 1.named functions(function statement)

// function abc(){
//     console.log('hello');
// } ===> function definition
// abc() ==>function call

// 2. function expression

// var xyz = function abc(){
//     console.log('hiii');
// }
// console.log(abc);
// console.log(xyz);
// xyz()

// 3. anonymous function

// var xyz = function(){
//     console.log('this is anonymous function');
// }

// xyz()

// 4. Arrow function=>ES6

// var xyz = (a,b) => a+b

// console.log(xyz(1,2));

//template literals

// const firstName = 'Aman'
// const lastName = 'kch b'

// console.log('My name is '+firstName+' and my last name is'+lastName);
// console.log(`My name is ${firstName} and my last name is ${lastName}`);
// console.log('My name is ${firstName} and my last name is ${lastName}');


//Hoisting=> This is a phenomenon in which a function or a variable can be called before initialization

// console.log(a);
// var a =10

// console.log(a);
// let a = 10

// temporal deadzone=> it is a time period between variable declaration and value initialization

// var a = 10
// let b = 'hello'
// const c = true

// console.log(abc(1,2));
 //==>arguments
// function abc(a,b) {  //=>parameters
//     return a+b
// }
// console.log(a);
// console.log(b);
// console.log(c);

// console.log(10<20<10)



// clousures=> this is a phenomenon in which inner function can have access to its laxical environment.
//  Inner function can have access to the variables of outer functions

// function outerFunc(){
//     const a = 10
//     function innerFunc(){
//         // var a = 100
        
//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }
//     const c = 'bikes'
    
//     innerFunc()
//     var b = 'kitchen set'

// }
// outerFunc()


// let a = 10
// {
//     let a = 100
// }
// console.log(a);