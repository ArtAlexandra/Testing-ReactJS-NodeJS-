import React from "react";
import "./ErrorURL.css"
import { useEffect } from "react";
export default function ErrorURL(){
    useEffect(()=>{
        document.title = 'Error 404'
    }, [])
    return(
        <>
        <div className="ErrorURL__container">
            <p className="ErrorURL__404">404</p>
            <p className="ErrorURL__text">Эта страница не найдена</p>
        </div>
        </>
    )
}