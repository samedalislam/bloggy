import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './topbar.css'

const Topbar = () => {
    const { user, dispatch } = useContext(Context)

    const PF = "http://localhost:5000/images/"

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' })
    }
    return (
        <div className='top'>
            <div className="topLeft">
                <i className="topIcon fa-brands fa-square-facebook"></i>
                <i className="topIcon fa-brands fa-square-twitter"></i>
                <i className="topIcon fa-brands fa-square-pinterest"></i>
                <i className="topIcon fa-brands fa-square-instagram"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className='link' to={'/'}>Home</Link>
                    </li>
                    <li className="topListItem">
                        <Link className='link' to={'/'}>About</Link>
                    </li>
                    <li className="topListItem">
                        <Link className='link' to={'/'}>contact</Link>
                    </li>
                    <li className="topListItem">
                        <Link className='link' to={'/write'}>write</Link>
                    </li>
                    {
                        user && <li className="topListItem" onClick={handleLogout}><Link className='link' to={'/logout'}>logout</Link></li>
                    }
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <Link to={'/setting'}>
                            <img className='topImg' src={PF+user.profilePicture} alt="" />
                        </Link>
                    ) : (
                        <ul className='topList'>
                            <li className='topListItem'>
                                <Link className='link' to={'/login'}>Login</Link>
                            </li>
                            <li className='topListItem'>
                                <Link className='link' to={'/register'}>Register</Link>
                            </li>
                        </ul>
                    )
                }

                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
export default Topbar