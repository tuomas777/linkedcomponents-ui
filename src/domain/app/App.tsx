/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/ban-ts-comment */

import { ApolloProvider } from '@apollo/client';
import { LoginProvider } from 'hds-react';
import React, { PropsWithChildren, useMemo } from 'react';
import { BrowserRouter } from 'react-router-dom';

import theme from '../../assets/theme/theme';
import { AccessibilityNotificationProvider } from '../../common/components/accessibilityNotificationContext/AccessibilityNotificationContext';
import { MatomoContext } from '../../common/components/matomoTracker/matomo-context';
import MatomoTracker from '../../common/components/matomoTracker/MatomoTracker';
import getValue from '../../utils/getValue';
import { loginProviderProps } from '../auth/constants';
import useAuth from '../auth/hooks/useAuth';
import { createApolloClient } from './apollo/apolloClient';
import CookieConsent from './cookieConsent/CookieConsent';
import { useNotificationsContext } from './notificationsContext/hooks/useNotificationsContext';
import { NotificationsProvider } from './notificationsContext/NotificationsContext';
import { PageSettingsProvider } from './pageSettingsContext/PageSettingsContext';
import AppRoutes from './routes/appRoutes/AppRoutes';
import { ThemeProvider } from './theme/Theme';

const ApolloWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  const { addNotification } = useNotificationsContext();
  const { apiToken } = useAuth();

  const apolloClient = useMemo(() => {
    return createApolloClient({ addNotification, apiToken });
  }, [addNotification, apiToken]);

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

const App: React.FC = () => {
  const matomoTracker = useMemo(
    () =>
      new MatomoTracker({
        urlBase: getValue(import.meta.env.REACT_APP_MATOMO_URL_BASE, ''),
        siteId: import.meta.env.REACT_APP_MATOMO_SITE_ID,
        srcUrl: import.meta.env.REACT_APP_MATOMO_SRC_URL,
        enabled: import.meta.env.REACT_APP_MATOMO_ENABLED === 'true',
        configurations: {
          setDoNotTrack: undefined,
        },
      }),
    []
  );

  return (
    <ThemeProvider initTheme={theme}>
      <AccessibilityNotificationProvider>
        <NotificationsProvider>
          <LoginProvider {...loginProviderProps}>
            <PageSettingsProvider>
              <BrowserRouter>
                {/* @ts-ignore */}
                <MatomoContext.Provider value={matomoTracker}>
                  <ApolloWrapper>
                    <CookieConsent />
                    <AppRoutes />
                  </ApolloWrapper>
                </MatomoContext.Provider>
              </BrowserRouter>
            </PageSettingsProvider>
          </LoginProvider>
        </NotificationsProvider>
      </AccessibilityNotificationProvider>
    </ThemeProvider>
  );
};

export default App;
