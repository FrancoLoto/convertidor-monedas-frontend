"use client"; 

import React, { useState, useEffect } from 'react';
import NewCard from "../../src/components/news/NewCard";
import { fetchNews } from '../../api/api';

const News = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const getNews = async () => {
            const fetchedNews = await fetchNews();
            setNews(fetchedNews.props.news);

        };
        getNews();
        
    }, []);

    return(
        <div>
            <div className="flex justify-center mt-12 mb-8">
                <h1 className="text-4xl font-onest font-bold">Noticias</h1>
            </div>

            <div className='grid grid-cols-1 mx-10 my-10 gap-5 sm:grid-cols-2 md:grid-cols-3 justify-center mt-4'>
            {news.map(article => (
                    <div key={article}>
                    <NewCard article={article}/>
                    </div>
            ))}
            </div>

        </div>
    )
}

export default News;





