import './SmallArticle.css'
import React from "react";

export const SmallArticle = ({ title, date, source}) => {
    return (
        <article className="small-article">
            <h2 className="small-article__title">{title}</h2>
            <p className="small-article__caption">
                <span className="article-date small-article__date">{date}</span>
                <span
                    className="article-source small-article__source">{source}</span>
            </p>
        </article>
    )
}
