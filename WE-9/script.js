const obj = {
    a: 'a',
    b: 'b',
    c: {
        d: 'd'
    }
}
const deep = JSON.parse(JSON.stringify(obj))
const shallow = { ...obj }
// shallow.c.d = 'e'
// shallow.b = '2'
deep.b = '2'
deep.c.d = '12'
console.log(deep)
// console.log(shallow)
console.log(obj)


// Deep copy: The changes will be done to the new copy and it will not affect the original Object
// Shallow copy: The nested level is copied

//currying

// Currying is used in JavaScript to break down complex function
// calls into smaller, more manageable steps.It transforms a 
// function with multiple arguments into a series of functions
// , each taking a single argument.

// function abc(a,b,c){
//     return a+b+c
// }

// console.log(abc(1,2));

// function abc(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }

// console.log(abc(1)(2));

// console.log(1);
// console.log(2);
// setTimeout(()=>console.log(7),0)
// console.log(3);
// setTimeout(()=>console.log(4),1000)
// console.log(5);
// setTimeout(()=>console.log(6),0) //1273564 1235764


//callback hell simple example

// const bakeBread = (statement, cb) => {
//     setTimeout(() => {
//         console.log(statement),
//             cb()
//     },
//         3000
//     )
// }
// const stuffing = (statement, cb) => {
//     setTimeout(() => {
//         console.log(statement),
//             cb()
//     },
//         3000
//     )
// }

// const grilled = (statement, cb) => {
//     setTimeout(() => {
//         console.log(statement),
//             cb()
//     },
//         3000
//     )
// }

// bakeBread('bread is being baking', () => {
//     stuffing('stuffing being added', () => {
//         grilled('sandwich being grilled', () => {
//             console.log('ready to eat!!!');
//         })
//     })
// })


//promises


// const promise = new Promise((resolve, reject) => {
//     const x = 4
//     if (x === 3)
//         resolve('resolved')
//     else reject('reject')
// })

// promise
// .then((response) => console.log(response))
// .catch((err) => console.log(err))


//problem handling with promise

const bakeBread = (statement) => {
    return new Promise((resolve, reject) => {


        if (statement) {

            setTimeout(() => {
                console.log(statement),
                    resolve()
            },
                3000
            )
        }
        else reject('not working properly')
    })
}
const stuffing = (statement) => {
    return new Promise((resolve, reject) => {

        if (statement) {

            setTimeout(() => {
                console.log(statement),
                    resolve()
            },
                3000
            )
        }
        else reject('not working properly')
    })
}

const grilled = (statement) => {
    return new Promise((resolve, reject) => {


        if (statement) {

            setTimeout(() => {
                console.log(statement),
                    resolve()
            },
                3000
            )
        }
        else reject('not working properly')
    })
}

// console.log(bakeBread());

bakeBread('bread is being baked')
    .then(() => stuffing('stuffing is done'))
    .then(() => grilled())
    .catch(() => console.log('something went wrong'))