import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'

const Sidebar = () => {
    const [cats, setCats] = useState([])

    useEffect(() => {
        const getCat = async () => {
            const res = await axios.get('/categories')
            setCats(res.data)
        }
        getCat()
    }, [])
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://images.pexels.com/photos/6347538/pexels-photo-6347538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis esse sint soluta, dolorem rem consequuntur eum mollitia quod velit molestias.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {
                        cats.map(c => (
                            <Link className='link' to={`/?cat=${c.name}`}>
                                <li className="sidebarListItem">{c.name}</li>
                            </Link>
                        ))
                    }
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
                    <i className="sidebarIcon fa-brands fa-square-instagram"></i>
                </div>
            </div>
        </div>
    )
}
export default Sidebar