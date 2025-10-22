import React from 'react';
import { Link } from 'react-router';

const DetailsCard = ({news}) => {
    console.log(news);
    return (
        <div className='space-y-5'>
            <img className='w-ful h-[350px]' src={news.image_url} alt="" />
            <h2 className='font-semibold'>{news.title}</h2>
            <p className='bg-base-100'>{news.details}</p>

            <Link className='btn btn-secondary' to={`/category/${news.category_id}`}>Back to the news</Link>
        </div>
    );
};

export default DetailsCard;