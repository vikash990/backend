import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    phoneNumber: ''
  });

  const [userData,setUserData]=useState([]);

  useEffect(()=>{
    fetch("http://localhost:4000/")
    .then((data)=>data.json())
    .then((ele)=>console.log(ele,"Database data"))
    .catch((err)=>console.log(err))
  },[])

 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   fetch("http://localhost:4000/",{
      method:"post",
      headers: {
        "Content-Type": "application/json", // Tells server the type of data being sent
      },
      body: JSON.stringify(formData),
    }

    )
    
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>User Form</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
          <label>
            Username:
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Phone Number:
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" style={{ marginTop: '10px' }}>Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
