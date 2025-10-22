import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userImg from '../assets/user.png';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = use(AuthContext);
    const handleLogout = () => {
        logOut().then(() => {
            // Sign-out successful.\
            alert('logout done');
        }).catch((error) => {
            // An error happened.
            console.log(error);
        });
    }
    return (
        <div className='flex justify-between items-center'>
            <div className=''>{user && user.email}</div>
            <div className='text-accent flex gap-5'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about-us'}>About us</NavLink>
                <NavLink to={'/rareer'}>Career</NavLink>
            </div>
            <div className='flex gap-2'>
                <img className='w-[40px] rounded-full border' src={`${user ? user.photoURL : userImg}`} alt="" />
                {
                    user ?
                        <button onClick={handleLogout} className='btn btn-secondary'>Logout</button> :
                        <Link to="/auth/login" className='btn btn-primary'>Login</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;