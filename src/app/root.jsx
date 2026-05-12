import React from 'react'
import { Outlet } from "react-router";
import Header from "./Componentes/Header";
import Footer from "./Componentes/Footer";
import "../index.css";

export default function Root() {
    return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
    )
}
