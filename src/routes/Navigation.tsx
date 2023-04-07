import React from 'react'
import { BrowserRouter, Route, Routes, NavLink, Navigate } from 'react-router-dom'
import logo from '../logo.svg'
import { navRoutes } from '../helpers/routes'

const Navigation = () => {

    return (
        <>
            <BrowserRouter>
                <div className='main-layout'>
                    <nav>
                        <img src={logo} alt="React Logo" />
                        <ul>
                            {
                                navRoutes.filter((route) => route.name !== 'General').map((route) => (
                                    <li key={route.name}>
                                        <NavLink to={route.to} className={({ isActive }) => isActive ? 'nav-active' : ''} >{route.name}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                    <Routes>
                        {
                            navRoutes.map((route) => (
                                <Route key={route.name} path={route.to} element={route.element} />
                            ))
                        }
                        <Route path='/*' element={<Navigate to="/home" replace />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    )
}

export default Navigation