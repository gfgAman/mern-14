import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Index = () => {
    // const [count, setCount] = useState(0)
    // const [numb, setNumb] = useState(0)
    const [data, setData] = useState([])


    const fetchData = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        // console.log(response?.data, 'resp');
        setData(response?.data)
    }

    useEffect(() => { fetchData() }, [])

    console.log(data, 'data');
    // useEffect(() => console.log('page rerenders!!!'),[count])
    return (
        <div>
            {/* <h2>{count}</h2>
            <button onClick={() => setCount(prev => prev + 1)}>count</button>
            <h2>{numb}</h2>
            <button onClick={() => setNumb(prev => prev + 1)}>numb</button> */}
            {
                data?.map(element => (
                    <h2>{element.username}</h2>
                ))
            }
        </div>
    )
}

export default Index