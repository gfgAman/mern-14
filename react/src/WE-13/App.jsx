import React from 'react'
import ChildComponent from './ChildComponent'
import './styles.css'
import Button from './Button'
import UseState from './UseState'

// const App1 = () => {
//     return (
//         <div>App1</div>
//     )
// }
// const App2 = () => {
//     return (
//         <div>App2</div>
//     )
// }
// const App3 = () => {
//     return (
//         <div>App3</div>
//     )
// }
// const App4 = () => {
//     return (
//         <div>App4</div>
//     )
// }
// const App5 = () => {
//     return (
//         <div>App5</div>
//     )
// }

const App = () => {
    const name = 'Aman'
    const desc = 'I am mern mentor'

    const internalStyling = {
        color: 'blue',
        backgroundColor: 'green',

    }
    const btnArray = [
        {
            context: 'login',
            backgroundColor: 'red'
        },
        {
            context: 'subscribe',
            backgroundColor: 'yellow'
        },
        {
            context: 'add to cart',
            backgroundColor: 'green'
        },
        {
            context: 'learn more',
            backgroundColor: 'blue'
        },
        {
            context: 'apply',
            backgroundColor: 'pink'
        },
    ]

    // const arr = [{ name: 'Pranav', college: "Amity" }, { name: 'Rudra', college: "IPU" }, { name: 'tiwariji', college: "Amity2" }, { name: 'Sanjay', college: "NIIT" }, { name: 'Bharti', college: "DU" }, { name: 'Mehek', college: "IPU" },]
    return (
        <>
            {/* <h1 style={{ color: 'red', backgroundColor: 'pink' }}>Hello! {name} and {desc}</h1>
            <h3 style={{ color: internalStyling.color }}>This is internal styling</h3>
            <p id='external_id'>This is external styling!!</p> */}
            {/* <ChildComponent name={name} desc={desc} /> */}
            {/* {
                arr.map(({ name, college }) => (
                    <ChildComponent name={name} college={college} />
                ))
            } */}

            {/* <h1>this is parent component</h1>
            {

                [1, 2, 3, 4, 5, 6, 7].map(() => {
                    return (

                        <ChildComponent />
                    )
                }
                )} */}
            {/* {
                btnArray.map(({ context, backgroundColor }) => (
                    <Button context={context} backgroundColor={backgroundColor} />
                ))
            } */}
            <UseState/>
        </>
    )
}
// export {App1,App2,App3}
export default App