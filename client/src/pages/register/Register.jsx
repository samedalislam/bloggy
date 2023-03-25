import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './register.css'

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/auth/register', {
        username,
        email,
        password
      })
      res.data && window.location.replace('/login')
    } catch (error) {
      setError(true)
    }
  }

  return (
    <div className='register'>
      <span className="registerTitle">Register</span>
      <form action="" className="registerForm" onSubmit={handleSubmit}>
        <label htmlFor="">Username</label>
        <input className='registerInput' type="text" placeholder='Enter Your Username' onChange={e => setUsername(e.target.value)} />
        <label htmlFor="">Email</label>
        <input className='registerInput' type="email" placeholder='Enter Your Email' onChange={e => setEmail(e.target.value)} />
        <label htmlFor="">Password</label>
        <input className='registerInput' type="password" placeholder='Enter Your Password' onChange={e => setPassword(e.target.value)} />
        <button type="submit" className='registerButton'>Register</button>
      </form>
      <button type="submit" className='registerLoginButton'>
        <Link className='link' to={'/login'}>Login</Link>
      </button>
      {
        error && (
          <span style={{color: 'red', marginTop: '10px'}}>Something went wrong!</span>
        )
      }
    </div>
  )
}
export default Register