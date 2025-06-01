// import React, { useRef, useState } from 'react'

// const UseRef = () => {
//     const [count, setCount] = useState(0)
//     const countRef = useRef(0)
//     const countHandler = () => {
//         setCount(prev => prev + 1)
//     }
//     console.log('Ui rerendered!!!');
//     return (
//         <div>
//             <h2>stateCount:{count}</h2>
//             <button onClick={countHandler}>statecount</button>
//             <h2>{countRef.current}</h2>
//             <button onClick={() => countRef.current += 1}>ref count</button>
//         </div>
//     )
// }

// export default UseRef

import React, { useRef } from 'react'

const UseRef = () => {
    const ref = useRef()
    return (
        <div>
            {/* <h1 ref={ref}>Hi there!!! this is usr ref</h1>
            <button onClick={() => ref.current.style.backgroundColor = 'red'}>change background color</button> */}
            <div style={{ padding: '1rem', backgroundColor: 'pink' }} onClick={() => ref.current.click()}>Upload image</div>
            <input type="file" ref={ref} />
        </div>
    )
}

export default UseRef