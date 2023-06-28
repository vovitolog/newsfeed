import React from 'react';
import '../../style.css'
import {Navigation} from "../Navigation/Navigation";
import {MainArticle} from "../MainArticle/MainArticle";
import {SmallArticle} from "../SmallArticle/SmallArticle";
import {useEffect, useState} from "react";
import {ArticleItem} from "../ArticleItem/ArticleItem";
import {BrowserRouter} from "react-router-dom";

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

 const App = () => {
    const [category, setCategory] = useState('index');
    const [articles, setArticles] = useState({items: [], categories: [], sources: []});

    const onNavClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        setCategory(e.currentTarget.dataset.href);
    }

    useEffect(() => {
        fetch('https://frontend.karpovcourses.net/api/v2/ru/news/' + categoryIds[category] || '')
            .then((res) => res.json())
            .then(setArticles)
    }, [category])

    return (
        <BrowserRouter>
            <header className="header">
                <div className="container">
                    <Navigation onNavClick={onNavClick} currentCategory={category} className='header__navigation'/>
                </div>
            </header>

            <ArticleItem/>

            <main className="main">
                <section className="articles">
                    <div className="container grid">
                        <section className="articles__big-column">

                            {articles.items.slice(0, 3).map((item) => {
                                return (
                                    <MainArticle
                                        key={item.title}
                                        description={item.description}
                                        title={item.title}
                                        image={item.image}
                                        category={articles.categories.find(({id}) => item.category_id === id).name}
                                        source={articles.sources.find(({id}) => item.source_id === id).name}
                                    />
                                )
                            })}

                        </section>
                        <section className="articles__small-column">

                            {articles.items.slice(3, 12).map((item) => {
                                return (
                                    <SmallArticle
                                        key={item.title}
                                        title={item.title}
                                        date={item.date}
                                        source={articles.sources.find(({id}) => item.source_id === id).name}
                                    />
                                )
                            })}
                        </section>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <div className="container">
                    <Navigation className='footer__navigation' onNavClick={onNavClick} currentCategory={category} />

                    <div className="footer__column">
                        <p className="footer__text">Сделано на Frontend курсе в <a
                            href="https://karpov.courses/frontend" target="_blank"
                            className="footer__link">Karpov.Courses</a></p>
                        <p className="footer__copyright">© 2023</p>
                    </div>
                </div>
            </footer>
        </BrowserRouter>
    );
}

export default App;


