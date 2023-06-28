import React, {FC} from 'react';
import '../../style.css'
import {useEffect} from "react";
import {ArticleItem} from "../ArticleItem/ArticleItem";
import { Switch, Route, useLocation } from 'react-router-dom';
import {Page} from "../Page/Page";
import {Articles} from "../Articles/Articles";
 const App: FC = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <Switch>
             <Route path="/article/:id">
                <Page>
                    <ArticleItem />
                </Page>
            </Route>
            <Route path="/:categoryId">
                <Page>
                    <Articles />
                </Page>
            </Route>
            <Route path="/">
                <Page>
                    <Articles />
                </Page>
            </Route>
        </Switch>
    );
};

 export default App;


