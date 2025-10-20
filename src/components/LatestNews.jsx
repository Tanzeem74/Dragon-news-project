import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-3 bg-base-200 p-3 font-bold mt-3'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
            <Marquee className='gap-5' pauseOnHover={true} speed={60}>
                <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora aspernatur, eum illum itaque quibusdam ducimus maxime </p>
                <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora aspernatur, eum illum itaque quibusdam ducimus maxime </p>
            </Marquee>
        </div>
    );
};

export default LatestNews;