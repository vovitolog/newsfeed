import './Navigation.css'
import React from "react";
import logo from "../../../images/logo.svg";
import {categoryNames} from "../App/App";

export const Navigation = ({ onNavClick, currentCategory, className = '' }) => {
    return (
        <nav className={`grid navigation ${className}`}>
            <a className="navigation__logo" data-href="index" href="#">
                <img className="navigation__logo-image" src={logo} alt="Логотип" />
            </a>
            <ul className="navigation__list">
                {['index', 'fashion', 'technologies', 'sport', 'karpov'].map((item) => {
                    return (
                        <li className="navigation__item" key={item}>
                            <a
                                onClick={onNavClick}
                                className={`navigation__link ${currentCategory === item ? 'navigation__link--active' : '' }`}
                                data-href={item}
                                href="#"
                            >
                                {categoryNames[item]}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
