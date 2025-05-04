//conditional statements

// const num = 50

// if (num % 2 === 0)
//     console.log('even');
// else console.log('odd');


//loops
// for-loop

// syntax-> for(initialization ; finalization ; incrementBy/decrementBy)

// for (let i = 1; i <= 500; i++) {
//     console.log(i);
// }

// const num = 100

// const numSqrt = Math.ceil(Math.sqrt(num))

// for(let i=2;i<=numSqrt;i++){
//     if(num%i!==0)
//         {
//             console.log('composite')
//             return
//         }
//     else console.log('prime');
// }

// const num = 5

// for(let i=1;i<=10;i++){
//     if(i===5){
//         console.log('i found 5');
//         break
//     }
//     else{
//         console.log(i);
//     }
// }

// for(let i=1;i<=10;i++){
//         if(i===5){
//             // console.log('i found 5');
//             continue
//         }
//         else{
//             console.log(i);
//         }
//     }

//array methods

// const arr = [2, 3, 1, 5, 8, 7]

// console.log(typeof arr); //datatype
// console.log(arr.length); 
// arr.push(12)
// console.log(arr);
// arr.push(31)
// console.log(arr);
// arr.unshift(87)
// console.log(arr);
// arr.unshift(55)
// console.log(arr);

// arr.pop()
// console.log(arr);
// arr.shift()
// console.log(arr);

// console.log([]===[]);

// const newArr = arr.slice(2,4)
// console.log(newArr);

// arr.splice(2,2,10,1000)
// console.log(arr);

// console.log(arr.indexOf(8));

// const str = 'hello world'

// const newStr = str.split(' ').sort().reverse().join('')
// const joinStr = newStr
// console.log(joinStr);
// console.log(newStr);

// console.log(str[6])
// console.log(str.charAt(7));

// console.log(str[2].toUpperCase());

// function sum(a, b) {
//     return a + b
// }

var a = 10
let b = 'hello'
const c = true

function abc(x,y){
    return x+y
}

console.log(abc(2,3));
console.log(a);
console.log(b);
console.log(c);

