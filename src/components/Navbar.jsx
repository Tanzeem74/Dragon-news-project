import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userImg from '../assets/user.png';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const {user}=use(AuthContext);
    return (
        <div className='flex justify-between items-center'>
            <div className=''>{user && user.email}</div>
            <div className='text-accent flex gap-5'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about-us'}>About us</NavLink>
                <NavLink to={'/rareer'}>Career</NavLink>
            </div>
            <div className='flex gap-2'>
                <img src={userImg} alt="" />
                <Link to="/auth/login" className='btn btn-primary'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;