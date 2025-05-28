import React from 'react'

const ChildComponent = ({ name, college }) => {
    // const {name,desc} = props
    // console.log(props, 'this is my props');
    return (
        <div>

            <h3>{name}</h3>
            <h4>{college}</h4>
        </div>
    )
}

export default ChildComponent