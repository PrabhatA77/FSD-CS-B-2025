import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null')

  const handleLogout = () => {
    localStorage.removeItem('currentUser')
    navigate('/login')
  }

  if (!currentUser) {
    return (
      <div>
        <h3>Not logged in</h3>
        <button onClick={() => navigate('/login')}>Go to Login</button>
      </div>
    )
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {currentUser.name} ({currentUser.email})</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard