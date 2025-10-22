import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import RightAside from '../components/homeLayout/RightAside';
import DetailsCard from '../components/DetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const {id}=useParams();
    const data=useLoaderData();
    const [news,setNews]=useState({});

    useEffect(()=>{
        const details=data.find(singleNews=>singleNews.id==id);
        setNews(details);
    },[data,id])
    return (
        <div>
            <header className='py-4'>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 mt-5 gap-10 py-5'>
                <section className='col-span-9'>
                    <h2 className='font-bold'>news details</h2>
                    <DetailsCard news={news}></DetailsCard>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;