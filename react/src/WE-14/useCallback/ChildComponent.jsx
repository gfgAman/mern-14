import React from 'react'

const ChildComponent = ({ count }) => {
    console.log('child component called!!!');
    return (
        <div>ChildComponent</div>
    )
}

export default React.memo(ChildComponent)