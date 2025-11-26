import React,{useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null')
  const [counter, setCounter] = useState(0);
  const [data,setData] = useState(null);

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

  useEffect(() =>{
    async function fetchData(){
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json();
      console.log(data)
      setData(data);
    }
    fetchData();
  },[])

  return (
    <div>
      <h2>Dashboard</h2>
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
            data.map((item,index) => (
              <div key={index} style={{ margin: '10px' , border: '1px solid #ccc', padding: '10px' ,borderRadius: '5px'}}>
                <h3> {index + 1}. {item.title}</h3>
                <p> {item.description}</p>
                <p> {item.price}</p>
                <img src={item.image} alt={item.title} style={{ width: '100px', height: '100px' , objectFit: 'cover' , borderRadius: '5px' }}/>
                <button>Add to Cart</button>
              </div>
            ))
          }
          
        </div>
      )}
    </div>
  )
}

export default Dashboard