import { IconPlus } from 'hds-react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';

import Breadcrumb from '../../common/components/breadcrumb/Breadcrumb';
import Button from '../../common/components/button/Button';
import LoadingSpinner from '../../common/components/loadingSpinner/LoadingSpinner';
import { ROUTES } from '../../constants';
import useLocale from '../../hooks/useLocale';
import Container from '../app/layout/Container';
import MainContent from '../app/layout/MainContent';
import PageWrapper from '../app/layout/PageWrapper';
import TitleRow from '../app/layout/TitleRow';
import NotSigned from '../notSigned/NotSigned';
import useUser from '../user/hooks/useUser';
import KeywordList from './keywordList/KeywordList';
import styles from './keywordsPage.module.scss';

const KeywordsPage: React.FC = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const locale = useLocale();

  const goToCreateKeywordPage = () => {
    history.push(`/${locale}${ROUTES.CREATE_KEYWORD}`);
  };

  return (
    <div className={styles.keywordsPage}>
      <Container withOffset={true}>
        <TitleRow
          button={
            <Button
              className={styles.addButton}
              fullWidth={true}
              iconLeft={<IconPlus aria-hidden={true} />}
              onClick={goToCreateKeywordPage}
              variant="primary"
            >
              {t('common.buttonAddKeyword')}
            </Button>
          }
          title={t('keywordsPage.title')}
        />
        <Breadcrumb>
          <Breadcrumb.Item to="/">{t('common.home')}</Breadcrumb.Item>
          <Breadcrumb.Item active={true}>
            {t('keywordsPage.title')}
          </Breadcrumb.Item>
        </Breadcrumb>
        <KeywordList />
      </Container>
    </div>
  );
};

const KeywordsPageWrapper: React.FC = () => {
  const { loading: loadingUser, user } = useUser();

  return (
    <PageWrapper
      description="keywordsPage.pageDescription"
      title="keywordsPage.pageTitle"
    >
      <MainContent>
        <LoadingSpinner isLoading={loadingUser}>
          {user ? <KeywordsPage /> : <NotSigned />}
        </LoadingSpinner>
      </MainContent>
    </PageWrapper>
  );
};

export default KeywordsPageWrapper;
