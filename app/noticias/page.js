"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewCard from "../../src/components/news/NewCard";


const News = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/news/')
        .then(response => setNews(response.data.new))
        .catch(error => console.error('Error fetching news: ', error))
    }, [])

    console.log(news)

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




