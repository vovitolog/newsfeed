import React from 'react';
import '../../style.css'
import logo from '../../../images/logo.svg'
import {api} from "../../../script";

export const App = () => {
    api()

    return (
        <>
            <header>
                <div className="container">
                    <nav className="navigation grid  header__navigation">
                        <a href="#" className="navigation__logo">
                            <img src={logo} className="navigation__image" alt="logo"/>
                            <ul className="navigation__list">
                                <li className="navigation__item"><a href="#"
                                                                    className="navigation__link navigation__link--active">Главная</a>
                                </li>
                                <li className="navigation__item"><a href="#" className="navigation__link">Мода</a></li>
                                <li className="navigation__item"><a href="#" className="navigation__link">Технологии</a>
                                </li>
                                <li className="navigation__item"><a href="#" className="navigation__link">Музыка</a>
                                </li>
                                <li className="navigation__item"><a href="#" className="navigation__link">Karpov</a>
                                </li>
                            </ul>
                        </a>
                    </nav>
                </div>
            </header>

            <main className="main">
                <section className="articles">
                    <div className="container grid">
                        <section className="articles__big-column">
                            <article className="main-article">
                                <div className="main-article__image-container">
                                    <img className="main-article__image" src='' alt="Фото 1"/>
                                </div>
                                <div className="main-article__content">
                                    <span className="article-category main-article__category">Технологии</span>
                                    <h2 className="main-article__title">Отец жанра. Как уже забытый трип-хоп определяет
                                        самую
                                        популяр…</h2>
                                    <p className="main-article__text">Новая мода на топовые наряды необычных цветов. В
                                        сезоне – топики,
                                        шорты-боксеры, сланцы и сандалии. А также большие солнечные очки и яркая
                                        шляпка.</p>
                                    <span className="article-source main-article__source"> Источник</span>
                                </div>
                            </article>

                            <article className="main-article">
                                <div className="main-article__image-container">
                                    <img className="main-article__image" src='' alt="Фото новости"/>
                                </div>
                                <div className="main-article__content">
                                    <span className="article-category main-article__category">Технологии</span>
                                    <h2 className="main-article__title">Отец жанра. Как уже забытый трип-хоп определяет
                                        самую
                                        популяр…</h2>
                                    <p className="main-article__text">Новая мода на топовые наряды необычных цветов. В
                                        сезоне – топики,
                                        шорты-боксеры, сланцы и сандалии. А также большие солнечные очки и яркая
                                        шляпка.</p>
                                    <span className="article-source main-article__source">Источник</span>
                                </div>
                            </article>

                            <article className="main-article">
                                <div className="main-article__image-container">
                                    <img className="main-article__image" src='' alt="Фото новости"/>
                                </div>
                                <div className="main-article__content">
                                    <span className="article-category main-article__category">Технологии</span>
                                    <h2 className="main-article__title">Как DJ Shadow попал в книгу рекордов Гиннеса
                                        из-за альбома</h2>
                                    <p className="main-article__text">Технологические тренды меняют наш привычный мир.
                                        Глобальные
                                        корпорации задают новые тренды айтишникам на разработку, а дизайнеров
                                        заставляю…</p>
                                    <span className="article-source main-article__source">Источник</span>
                                </div>
                            </article>

                        </section>
                        <section className="articles__small-column">
                            <article className="small-article">
                                <h2 className="small-article__title">В американском зоопарке празднуют рождение гориллы:
                                    видео</h2>
                                <p className="small-article__caption">
                                    <span className="article-date small-article__date">12 июля</span>
                                    <span className="article-source small-article__source">Источник</span>
                                </p>
                            </article>

                            <article className="small-article">
                                <h2 className="small-article__title">Новую популяцию синих китов обнаружили в Индийском
                                    океане</h2>
                                <p className="small-article__caption">
                                    <span className="article-date small-article__date">11 июля</span>
                                    <span className="article-source small-article__source">Источник</span>
                                </p>
                            </article>

                            <article className="small-article">
                                <h2 className="small-article__title">Билл Гейтс уверен, что 2021 год будет лучше
                                    2020-го. И вот почему</h2>
                                <p className="small-article__caption">
                                    <span className="article-date small-article__date">10 июля</span>
                                    <span className="article-source small-article__source">Источник</span>
                                </p>
                            </article>

                            <article className="small-article">
                                <h2 className="small-article__title">Благотворительный забег с собаками: чем заняться на
                                    выходных в Москве</h2>
                                <p className="small-article__caption">
                                    <span className="article-date small-article__date">10 июля</span>
                                    <span className="article-source small-article__source">Источник</span>
                                </p>
                            </article>

                            <article className="small-article">
                                <h2 className="small-article__title">Как начать год так, чтобы потом было приятно
                                    подводить итоги: чек-лист</h2>
                                <p className="small-article__caption">
                                    <span className="article-date small-article__date">9 июля</span>
                                    <span className="article-source small-article__source">Источник</span>
                                </p>
                            </article>

                            <article className="small-article">
                                <h2 className="small-article__title">Как подготовиться к Новому году, все успеть и не
                                    нервничать</h2>
                                <p className="small-article__caption">
                                    <span className="article-date small-article__date">12 июля</span>
                                    <span className="article-source small-article__source">Источник</span>
                                </p>
                            </article>

                            <article className="small-article">
                                <h2 className="small-article__title">Как выбирать и дарить подарки — новогодние и не
                                    только: чек-лист Esquire</h2>
                                <p className="small-article__caption">
                                    <span className="article-date small-article__date">11 июля</span>
                                    <span className="article-source small-article__source">Источник</span>
                                </p>
                            </article>

                            <article className="small-article">
                                <h2 className="small-article__title">Мужчина из Франции завещал часть своего наследства
                                    котам из Эрмитажа</h2>
                                <p className="small-article__caption">
                                    <span className="article-date small-article__date">13 июля</span>
                                    <span className="article-source small-article__source">Источник</span>
                                </p>
                            </article>

                            <article className="small-article">
                                <h2 className="small-article__title">Самое трогательное видео дня: котенок не мог
                                    забраться на крышу, но ему помогла другая…</h2>
                                <p className="small-article__caption">
                                    <span className="article-date small-article__date">14 июля</span>
                                    <span className="article-source small-article__source">Источник</span>
                                </p>
                            </article>
                        </section>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <div className="container">
                    <nav className="navigation grid footer__navigation">
                        <a href="#" className="navigation__logo"><img className="navigation__image"
                                                                      src={logo} alt="Логотип"/></a>
                        <ul className="navigation__list">
                            <li className="navigation__item"><a href="#"
                                                                className="navigation__link navigation__link--active">Главная</a>
                            </li>
                            <li className="navigation__item"><a href="#" className="navigation__link">Мода</a></li>
                            <li className="navigation__item"><a href="#" className="navigation__link">Технологии</a>
                            </li>
                            <li className="navigation__item"><a href="#" className="navigation__link">Музыка</a></li>
                            <li className="navigation__item"><a href="#" className="navigation__link">Karpov</a></li>
                        </ul>
                    </nav>

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



