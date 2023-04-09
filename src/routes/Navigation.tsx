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
                                navRoutes.map((r) => (
                                    <li key={r.name}>
                                        <NavLink to={r.to} className={({ isActive }) => isActive ? 'nav-active' : ''} >{r.name}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                    <Routes>
                        {
                            navRoutes.map(({name, to, Element}) => (
                                <Route key={name} path={to} element={Element} />
                            ))
                        }
                        <Route path='/*' element={<Navigate to="/shopping" replace />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    )
}

export default Navigation