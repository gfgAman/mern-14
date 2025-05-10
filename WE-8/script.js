
//Higher order function

// const sayHi = (name, callBack) => {
//     callBack(name)
// }

// const outerFunc = (a) => {
//     function innerFunc(b){
//         return a+b
//     }
//     return innerFunc
// }
// console.log(outerFunc(1)(2));

//callback function
// const greet = (name) =>console.log(`Hi ${name}`);

// sayHi('Aman',greet);



// for(let i=0;i<arr.length;i++){
//     console.log(arr[i],'forloop');
// }

// let sum = 0
// for(let i=0;i<arr.length;i++){
//     sum +=arr[i]
// }
// console.log(sum);
// const mappedArr = arr.map((i)=>i)
// console.log(mappedArr);
// console.log(arr);

// const filteredArr = arr.filter((i)=>i%3===0)
// console.log(filteredArr);

// const sum = arr.reduce((acc,curr)=>{
//     acc+=curr
//     return acc
// },0)

// console.log(sum);

// const odd = arr2.map((i) => i * 5).filter((i) => i % 2).reduce((acc, curr) => {
//     acc += curr
//     return acc
// })
// console.log(odd)

// arr.forEach((i)=>console.log(i))
// console.log(forNew);


// Rest and Spread Operators=>ES6

//spread operator
// const arr = [2001, 4012, 1999, 6382, 8145, 7210, 3246]

// const arr2 = [1,3,2,6,7]
// // const newArr = arr.concat(arr2)
// const newArr = [...arr,4000,...arr2]
// console.log(newArr);


//rest operator

// const restFunc = (a,b,...c)=>{
//     console.log(a);
//     console.log(b);
//     return c.map(i=>i*2)
// }

// console.log(restFunc(1,3,2,5,7,3))



// obj.name = 'Vikas'
// console.log(obj.name);
// console.log(obj.isStudent);
// obj.gender = 'Male'
// console.log(obj.gender);
// console.log(obj);

// destructuring=>ES6

// const {name,age,isStudent} = obj

// console.log(name);

// Object.keys,Object.values,Object.entries

// console.log(Object.keys(obj),'keys');
// console.log(Object.values(obj),'values');
// console.log(Object.entries(obj),'entries');

// const obj = {
//     name: 'Aman',
//     age: 200,
//     isStudent: true
// }
// const arr = [99, 119, 129, 139, 149, 159, 169, 189, 199, 219]
// loop=>forof,forin

// for(let i of arr){
//     console.log(i);
// }

// for(let i in obj){
//     console.log(obj[i]);
// }

// for(let i in arr){
//     console.log(arr[i]);
// }

// const countOccurance = (str)=>{
//     const obj = {}
//     newStr = str.split(' ').join('').split('')
    
//     for(let i of newStr){
//         if(obj[i]){
//             obj[i]+=1
//         }
//         else obj[i] = 1
//     }
//     let count = 0
//     let char = ""
//     for(let i in obj){
//         if(obj[i]>count){
//             char = i
//             count = obj[i]
//         }
//     }
//     return char
// }

// console.log(countOccurance('hello world'));