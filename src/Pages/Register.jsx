import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const { createUser, setUser, updatedUser } = use(AuthContext);
    const [nameError, setNameError] = useState("");
    const navigate=useNavigate();
    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        if (name.length < 5) {
            setNameError("Name should be more then 5 character");
            return;
        } else {
            setNameError("");
        }
        const password = e.target.password.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        console.log(name, photo, email, password);
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                updatedUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({...user,displayName: name, photoURL: photo});
                        navigate('/');
                    })
                    .catch((error) => {
                        console.log(error);
                        setUser(user);
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-2xl text-center'>Register an account</h2>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Name</label>
                        <input name='name' type="text" className="input" placeholder="Your Name" required />
                        {nameError && <p className="text-xs text-error">{nameError}</p>}

                        <label className="label">Photo URL</label>
                        <input name='photo' type="Text" className="input" placeholder="Photo URL" required />

                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" required />

                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" required />
                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        <p className='font-semibold text-center mt-4'>Already have an account? <Link className='text-blue-500' to='/auth/login' >Login</Link> </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;