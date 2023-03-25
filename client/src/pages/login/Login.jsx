import axios from 'axios'
import { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import './login.css'

const Login = () => {
  const userRef = useRef()
  const passwordRef = useRef()
  const { dispatch, isFetching } = useContext(Context)

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch({ type: "LOGIN_START" });

    try {
      const res = await axios.post('/auth/login', {
        username: userRef.current.value,
        password: passwordRef.current.value
      })
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE"})
    }
  }


  return (
    <div className='login'>
      <span className="loginTitle">Login</span>
      <form action="" className="loginForm" onSubmit={handleSubmit}>
        <label htmlFor="">Username</label>
        <input ref={userRef} className='loginInput' type="text" placeholder='Enter Your Username' />
        <label htmlFor="">Password</label>
        <input ref={passwordRef} className='loginInput' type="password" placeholder='Enter Your Password' />
        <button type="submit" className='loginButton' disabled={isFetching}>Login</button>
      </form>
      <button type="submit" className='loginRegisterButton'>
        <Link className='link' to={'/register'}>Register</Link>
      </button>
    </div>
  )
}
export default Login