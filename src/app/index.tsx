/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from 'styles/global-styles';
import { PeoplePage } from './containers/PeoplePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
// import { useTranslation } from 'react-i18next';

export function App() {
  // const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="Simple Starwars Page"
        // htmlAttributes={{ lang: i18n.language }}
      ></Helmet>

      <Switch>
        <Route exact path="/" component={PeoplePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
