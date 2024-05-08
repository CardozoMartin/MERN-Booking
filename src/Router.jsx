import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeViews from './Views/HomeViews'
import ListViews from './Views/ListViews'
import HotelsViews from './Views/HotelsViews'
import Navbar from './Componentes/Common/Navbar'
import Header from './Componentes/Header/Header'


export const Router = () => {
    return (
        <BrowserRouter>
        <Navbar></Navbar>
        <Header></Header>
            <Routes>
                <Route path='/' element={<HomeViews></HomeViews>}></Route>
                <Route path='/hotels' element={<ListViews></ListViews>}></Route>
                <Route path='/hotels/:id' element={<HotelsViews></HotelsViews>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
