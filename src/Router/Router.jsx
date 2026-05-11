import DetallesCrypto from '@/Componentes/DetallesCrypto'
import Layout from '@/Componentes/Layout/Layout'
import Main from '@/Componentes/Main'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function Router() {
    return (
        <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
                <Route index element={<Main/>}/>
                <Route path= 'detalles/:id' element={<DetallesCrypto/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
    )
}