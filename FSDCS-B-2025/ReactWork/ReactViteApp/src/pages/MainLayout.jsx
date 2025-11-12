import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
      <header style={{ padding: 12, borderBottom: '1px solid #ddd' }}>
        <nav style={{ display: 'flex', gap: 12 }}>
          <NavLink to="/" end style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
            Home
          </NavLink>
          <NavLink to="/register" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
            Register
          </NavLink>
          <NavLink to="/login" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
            Login
          </NavLink>
          <NavLink to="/dashboard" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
            Dashboard
          </NavLink>
        </nav>
      </header>

      <main style={{ padding: 16 }}>
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout