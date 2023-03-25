import { BrowserRouter as Router, Routes, Route, redirect } from 'react-router-dom'
import Topbar from "./components/topbar/Topbar"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Setting from "./pages/setting/Setting"
import Write from "./pages/write/Write"
import Single from "./pages/single/Single"
import { useContext } from 'react'
import { Context } from './context/Context'

const App = () => {
  const {user} = useContext(Context)

  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={user ? <Home /> : <Register />} />
        <Route path='/login' element={user ? <Home /> : <Login />} />
        <Route path='/write' element={user ? <Write /> : <Register />} />
        <Route path='/setting' element={user ? <Setting /> : <Register />} />
        <Route path='/post/:postId' element={<Single />} />
      </Routes>
    </Router>
  )
}
export default App