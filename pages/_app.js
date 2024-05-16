import 'bootstrap/dist/css/bootstrap.css';
import Router from 'next/router';

import Header from '../components/Header';
import { buildClient } from '../api/build-client';

const AppComponent = ({ Component, pageProps }) => {
  const onSignOut = () => {
    Router.push('/');
  }

  return (
    <div>
      <Header currentUser={pageProps.currentUser} onSignOut={onSignOut} />
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  )
}

AppComponent.getInitialProps = async (appContext) => {
  const { Component, ctx } = appContext;
  const client = buildClient(ctx);
  let currentUser = null;
  let pageProps = {};

  try {        
    const { data } = await client.get('/api/users/current-user');
    currentUser = data.currentUser;
  } catch (error) {
    console.log(error.message);
  }

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {
    pageProps: {
      ...pageProps,
      currentUser
    }
  }
}

export default AppComponent;