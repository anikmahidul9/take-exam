import React from 'react';
import { NavLink } from 'react-router-dom';
import Home from '../Home/Home';
import './Header.css'

const Header = () => {
    const navLinkStyle = ({isActive})=>{
        return{
            fontWeight:isActive ? 'bold': 'normal',
            color:isActive ? 'rgb(0%, 93%, 63%)':'white'
        }
    }
    return (
        <div className='header'>
            <div className="logo">
                <img src='https://elearni.wpenginepowered.com/wp-content/uploads/2018/12/logo.png' alt="" />
            </div>
            <div className="link">

            <NavLink style={navLinkStyle} to='/'>Home</NavLink>
            <NavLink style={navLinkStyle} to='/about'>About</NavLink>
            <NavLink style={navLinkStyle} to='/blog'>Blog</NavLink>
            </div>
        </div>
    );
};

export default Header;