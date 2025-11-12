import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    const users = JSON.parse(localStorage.getItem('users') || '[]')
    const user = users.find((u) => u.email === email && u.password === password)
    if (!user) {
      setError('Invalid credentials.')
      return
    }

    // set current user (simple demo)
    localStorage.setItem('currentUser', JSON.stringify({ name: user.name, email: user.email }))
    navigate('/dashboard')
  }

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group" style={{ marginBottom: 8 }}>
          <label htmlFor="email">Email</label>
          <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" />
        </div>

        <div className="form-group" style={{ marginBottom: 8 }}>
          <label htmlFor="password">Password</label>
          <input id="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" />
        </div>

        {error && <div style={{ color: 'red', marginBottom: 8 }}>{error}</div>}

        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login