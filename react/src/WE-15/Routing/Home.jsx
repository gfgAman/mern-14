import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    return (
        <div>
            <ul>
                <li onClick={() => navigate('/')}>Home</li>
                <li onClick={() => navigate('/contact')}>Contact</li>
                <li onClick={() => navigate('/careers')}>Careers</li>
                <li onClick={() => navigate('/login')}>Login</li>
                <li onClick={() => navigate('/clothings')}>Clothings</li>
            </ul>
        </div>
    )
}

export default Home