import React, {useEffect, useState} from 'react';
import '../../style.css'
import logo from "../../../images/logo.svg";
import {Navigation} from "../Navigation/Navigation";

const categoryIds = {
    index: 0,
    technologies: 1,
    sport: 2,
    fashion: 3,
    karpov: 6,
}

export const categoryNames = {
    index: 'Главная',
    fashion: 'Мода',
    technologies: 'Технологии',
    sport: 'Спорт',
    karpov: 'Karpov'
}

export const App = () => {
    const [category, setCategory] = useState('index');
    const [articles, setArticles] = useState({items: [], categories: [], sources: []});

    const onNavClick = (e) => {
        e.preventDefault();
        setCategory(e.currentTarget.dataset.href);
    }

    useEffect(() => {
        fetch('https://frontend.karpovcourses.net/api/v2/ru/news')
            .then((res) => res.json())
            .then(setArticles)
    }, [category])

    return (
        <>
            <header  className="header">
                <div className="container">
                    <Navigation onNavClick={onNavClick} currentCategory={category}  className='header__navigation'/>
                </div>
            </header>

            <main className="main">
                <section className="articles">
                    <div className="container grid">
                        <section className="articles__big-column">

                            {articles.items.slice(0, 3).map((item) => {
                                return (
                                    <article className="main-article">
                                        <div className="main-article__image-container">
                                            <img className="article-img main-article__image" src={item.image} alt="Фото 1"/>
                                        </div>
                                        <div className="main-article__content">
                                        <span className="article-category main-article__category">{
                                            articles.categories.find(({id}) => item.category_id === id).name
                                        }</span>
                                            <h2 className="main-article__title">{item.title}</h2>
                                            <p className="main-article__text">{item.description}</p>
                                            <span
                                                className="article-source main-article__source"> {articles.sources.find(({id}) => item.source_id === id).name}</span>
                                        </div>
                                    </article>
                                )
                            })}

                        </section>
                        <section className="articles__small-column">

                            {articles.items.slice(3, 12).map((item) => {
                                return (
                                    <article className="small-article">
                                        <h2 className="small-article__title">{item.title}</h2>
                                        <p className="small-article__caption">
                                            <span className="article-date small-article__date">{item.date}</span>
                                            <span
                                                className="article-source small-article__source">{articles.sources.find(({id}) => item.source_id === id).name}</span>
                                        </p>
                                    </article>
                                )
                            })}

                        </section>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <div className="container">
                    <Navigation className='footer__navigation'/>

                    <div className="footer__column">
                        <p className="footer__text">Сделано на Frontend курсе в <a
                            href="https://karpov.courses/frontend" target="_blank"
                            className="footer__link">Karpov.Courses</a></p>
                        <p className="footer__copyright">© 2023</p>
                    </div>
                </div>
            </footer>
        </>
    );
}



