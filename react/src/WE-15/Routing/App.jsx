//Defining all routes

//Home,Contact,Careers,Login

import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Careers from './Careers'
import Contact from './Contact'
import Login from './Login'
import Clothings from './Clothings'
import Cloth from './Cloth'

const App = () => {
    const [clothData, setClothData] = useState({})
    // console.log(clothData, 'clothsss');
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/careers' element={<Careers />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/clothings' element={<Clothings setClothData={setClothData} />} />
                <Route path='/cloth/:name' element={<Cloth clothData={clothData} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App