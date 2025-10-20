import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Findus = () => {
    return (
        <div>
            <h1 className='font-bold mb-3'>Find us on</h1>
            <div>
                <div className='join join-vertical w-full'>
                    <button className='btn justify-start join-item'> <FaFacebook></FaFacebook> Facebook</button>
                    <button className='btn justify-start join-item'> <FaTwitter></FaTwitter> Twitter</button>
                    <button className='btn justify-start join-item'> <FaInstagram></FaInstagram> Instagram</button>
                </div>
            </div>
        </div>
    );
};

export default Findus;