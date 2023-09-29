/* eslint-disable @typescript-eslint/ban-ts-comment */
import 'react-toastify/dist/ReactToastify.css';

import { ApolloProvider } from '@apollo/client';
import { createInstance, MatomoProvider } from '@datapunt/matomo-tracker-react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import theme from '../../assets/theme/theme';
import getValue from '../../utils/getValue';
import { AuthProvider } from '../auth/AuthContext';
import userManager from '../auth/userManager';
import apolloClient from './apollo/apolloClient';
import CookieConsent from './cookieConsent/CookieConsent';
import { NotificationsProvider } from './notificationsContext/NotificationsContext';
import { PageSettingsProvider } from './pageSettingsContext/PageSettingsContext';
import AppRoutes from './routes/appRoutes/AppRoutes';
import { ThemeProvider } from './theme/Theme';

const getMatomoUrlPath = (path: string) =>
  `${import.meta.env.REACT_APP_MATOMO_URL_BASE}${path}`;

const instance = createInstance({
  disabled: import.meta.env.REACT_APP_MATOMO_ENABLED !== 'true',
  urlBase: getValue(import.meta.env.REACT_APP_MATOMO_URL_BASE, ''),
  srcUrl:
    import.meta.env.REACT_APP_MATOMO_SRC_URL &&
    getMatomoUrlPath(import.meta.env.REACT_APP_MATOMO_SRC_URL),
  trackerUrl:
    import.meta.env.REACT_APP_MATOMO_TRACKER_URL &&
    getMatomoUrlPath(import.meta.env.REACT_APP_MATOMO_TRACKER_URL),
  siteId: Number(import.meta.env.REACT_APP_MATOMO_SITE_ID),
});

const App: React.FC = () => {
  return (
    <ThemeProvider initTheme={theme}>
      <NotificationsProvider>
        <AuthProvider userManager={userManager}>
          <PageSettingsProvider>
            <ToastContainer hideProgressBar={true} theme="colored" />
            <BrowserRouter>
              {/* @ts-ignore */}
              <MatomoProvider value={instance}>
                <ApolloProvider client={apolloClient}>
                  <CookieConsent />
                  <AppRoutes />
                </ApolloProvider>
              </MatomoProvider>
            </BrowserRouter>
          </PageSettingsProvider>
        </AuthProvider>
      </NotificationsProvider>
    </ThemeProvider>
  );
};

export default App;
