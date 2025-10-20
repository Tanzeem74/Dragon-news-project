import React from 'react';
import swmngImg from '../../assets/swimming.png';
import clsImg from '../../assets/class.png';
import groundImg from '../../assets/playground.png';

const Qzone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className='font-bold mb-4'>Qzone</h2>
            <div className='space-y-3'>
                <img src={swmngImg} alt="" />
                <img src={clsImg} alt="" />
                <img src={groundImg} alt="" />
            </div>
        </div>
    );
};

export default Qzone;