import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Registration = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!form.name.trim() || !form.email.trim() || !form.password) {
      setError('All fields are required.')
      return
    }

    // Basic email pattern
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError('Please enter a valid email.')
      return
    }

    // Save user to localStorage (simple demo)
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    if (users.find((u) => u.email === form.email)) {
      setError('A user with this email already exists.')
      return
    }

    users.push({ name: form.name, email: form.email, password: form.password })
    localStorage.setItem('users', JSON.stringify(users))

    alert('Registration successful!')

    // redirect to login
    navigate('/login')
  }

  return (
    <div>
      <h2>Registration form</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group" style={{ marginBottom: 8 }}>
          <label htmlFor="name">Name</label>
          <input name="name" id="name" value={form.name} onChange={handleChange} type="text" className="form-control" />
        </div>

        <div className="form-group" style={{ marginBottom: 8 }}>
          <label htmlFor="email">Email</label>
          <input name="email" id="email" value={form.email} onChange={handleChange} type="email" className="form-control" />
        </div>

        <div className="form-group" style={{ marginBottom: 8 }}>
          <label htmlFor="password">Password</label>
          <input name="password" id="password" value={form.password} onChange={handleChange} type="password" className="form-control" />
        </div>

        {error && <div style={{ color: 'red', marginBottom: 8 }}>{error}</div>}

        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Registration