import React from 'react'
import { BrowserRouter, Route, Routes, NavLink, Navigate } from 'react-router-dom'
import logo from '../logo.svg'
import { navRoutes } from './routes'

const Navigation = () => {

    return (
        <>
            <BrowserRouter>
                <div className='main-layout'>
                    <nav>
                        <img src={logo} alt="React Logo" />
                        <ul>
                            {
                                navRoutes.filter((r) => r.name !== 'General').map((r) => (
                                    <li key={r.name}>
                                        <NavLink to={r.to} className={({ isActive }) => isActive ? 'nav-active' : ''} >{r.name}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                    <Routes>
                        {
                            navRoutes.map((r) => (
                                <Route key={r.name} path={r.to} element={r.element} />
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