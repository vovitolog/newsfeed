import './MainArticle.css'
import React from "react";

export const MainArticle = ({image, title, description, source, category}) => {
    return (
        <article className="main-article">
            <div className="main-article__image-container">
                <img className="article-img main-article__img" src={image} alt="Фото 1"/>
            </div>
            <div className="main-article__content">
                                        <span className="article-category main-article__category">{
                                            category
                                        }</span>
                <h2 className="main-article__title">{title}</h2>
                <p className="main-article__text">{description}</p>
                <span
                    className="article-source main-article__source"> {source}</span>
            </div>
        </article>
    )
}
