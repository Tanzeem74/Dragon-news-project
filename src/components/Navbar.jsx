import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/user.png';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div></div>
            <div className='text-accent flex gap-5'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about-us'}>About us</NavLink>
                <NavLink to={'/rareer'}>Career</NavLink>
            </div>
            <div className='flex gap-2'>
                <img src={user} alt="" />
                <button className='btn btn-primary'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;