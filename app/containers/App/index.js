/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import { ROOT_ROUTES, APP_ROUTES } from 'constants/routes';

import HomePage from 'containers/HomePage/Loadable';
import NoteCase from 'containers/NoteCase/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  // max-width: calc(768px + 16px * 2);
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
  box-sizing: border-box;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React Based"
        defaultTitle="React Based"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      {/*<Header />*/}
      <Switch>
        <Route exact path={ROOT_ROUTES.HOMEPAGE} component={HomePage} />
        <Route exact={false} path={ROOT_ROUTES.FEATURES} component={FeaturePage} />
        
        <Route exact path={APP_ROUTES.NOTE_CASE} component={NoteCase} />
        
        <Route path="" component={NotFoundPage} />
      </Switch>
      {/*<Footer />*/}
      <GlobalStyle />
    </AppWrapper>
  );
}
