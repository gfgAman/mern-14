import React from 'react'
import { useNavigate } from 'react-router-dom'

const Clothings = ({ setClothData }) => {
    const clothes = [{
        id: 1,
        name: 'Jeans',
        price: 250
    },
    {
        id: 2,
        name: 'Shoes',
        price: 2500
    },
    {
        id: 3,
        name: 'Tshirts',
        price: 25
    },
    {
        id: 4,
        name: 'Hankyyy',
        price: 2
    },
    ]
    const navigate = useNavigate()

    const onClickHandler = (id) => {
        console.log(id, 'id');
        setClothData(clothes[id - 1])
        navigate(`/cloth/${clothes[id-1].name}`)
    }
    return (
        <div>
            {
                clothes.map(({ id, name, price }) => (
                    <div key={id} onClick={() => onClickHandler(id)}>
                        <h2>{name}</h2>
                    </div>
                ))
            }
        </div>
    )
}

export default Clothings