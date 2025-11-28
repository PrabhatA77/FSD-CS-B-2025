import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Dashboard = () => {
  const navigate = useNavigate()
  const { cart, addToCart } = useCart();
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null')
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log('Counter value changed:', counter)
  }, [counter])

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

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json();
      console.log(data)
      setData(data);
    }
    fetchData();
  }, [])

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Dashboard</h2>
        <button onClick={() => navigate('/cart')} style={{
          backgroundColor: '#ff9800',
          color: 'white',
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 1000,
          padding: '10px 20px',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          View Cart ({cart.length})
        </button>
      </div>
      <p>Welcome, {currentUser.name} ({currentUser.email})</p>
      <button onClick={handleLogout}>Logout</button>
      <div style={{ marginTop: '20px' }}>
        <h3>Counter: {counter}</h3>
        <button onClick={() => setCounter(counter + 10)}>Increase by 10</button>
        <button onClick={() => setCounter(counter - 10)} style={{ marginLeft: '10px' }}>Decrease by 10</button>

      </div>
      {data && (
        <div>
          {
            data.map((item, index) => (
              <div key={index} style={{ margin: '10px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
                <h3> {index + 1}. {item.title}</h3>
                <p><strong>Category : </strong>{item.category}</p>
                <p><strong>Description : </strong> {item.description}</p>
                <p><strong>Price : </strong> ${item.price}</p>
                <img src={item.image} alt={item.title} style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '5px' }} />
                <br /> <br />
                <button
                  onClick={() => addToCart(item)}
                  style={{ cursor: 'pointer' }}
                >
                  Add to Cart
                </button>
              </div>
            ))
          }
        </div>
      )}
    </div>
  )
}

export default Dashboard