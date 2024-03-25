"use client"

import React, { useState, useEffect } from 'react';
import { fetchNewDetail } from "../../../api/api";


const ArticleDetail = ({params: {slug}}) => {
    const [newDetail, setNewDetail] = useState([]);

    useEffect(() => {
        const getNewDetail = async () => {
            const fetchedNewDetail = await fetchNewDetail(slug);
            setNewDetail(fetchedNewDetail.props.newDetail);
        }
        getNewDetail();

    }, []);

    return (
        <div className="p-20">
            <h1 className="p-10 text-center font-bold text-3xl">{newDetail.title}</h1>
            <p className="text-center">{newDetail.content}</p>
            {/* Otros detalles de la noticia */}
        </div>
    );
};

export default ArticleDetail;
