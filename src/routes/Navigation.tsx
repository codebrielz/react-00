import React from 'react'
import { BrowserRouter, Route, Routes, NavLink, Navigate } from 'react-router-dom'
import logo from '../logo.svg'
import { routes } from './routes'

const Navigation = () => {

    return (
        <>
            <BrowserRouter>
                <div className='main-layout'>
                    <nav>
                        <img src={logo} alt="React Logo" />
                        <ul>
                            {
                                routes.map(({ to, name }) => (
                                    <li key={to}>
                                        <NavLink to={to} className={({ isActive }) => isActive ? 'nav-active' : ''} >{name}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                    <Routes>
                        {
                            routes.map(({ to, Component }) => (
                                <Route key={to} path={to} element={<Component />} />
                            ))
                        }
                        <Route path='/*' element={<Navigate to={ routes[0].to } replace />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    )
}

export default Navigation