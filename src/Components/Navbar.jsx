import React from 'react'
import { Link } from "react-router-dom";
import "../App.css";
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='items'>
                <div className='item'><Link to="/"><>home</></Link></div>
                <div className='item'><Link to="webcam"><>webcam</></Link></div>
            </div>

        </div>
    )
}

export default Navbar