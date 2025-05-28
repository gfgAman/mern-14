import React from 'react'

const Button = ({ context, backgroundColor }) => {
    return (
        <button style={{ backgroundColor: backgroundColor }}>
            {context}</button>
    )
}

export default Button