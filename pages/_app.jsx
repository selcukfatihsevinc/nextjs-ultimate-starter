/* eslint-disable react/jsx-props-no-spreading */
import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import withReduxStore from '@utils/withReduxStore';

class MyApp extends App {
  constructor(props) {
    super(props);
    this.persistor = persistStore(props.reduxStore);
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Provider store={reduxStore}>
        <PersistGate loading={<Component {...pageProps} />} persistor={this.persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);
