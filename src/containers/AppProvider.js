import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { rootSaga } from '../sagas';
import rootReducer from '../reducers/root';
import Exchange from './Exchange';

class AppProvider extends React.Component {
  constructor(props) {
    super(props);

    const sagaMiddleware = createSagaMiddleware();

    this.store = createStore(
      rootReducer,
      applyMiddleware(sagaMiddleware)
    );

    sagaMiddleware.run(rootSaga);
  }

  render() {
    return (
      <Provider store={this.store}>
        <Exchange
          base="USD"
          whitelistedCurrencies={[
            'GBP',
            'EUR',
            'AUD',
            'HKD',
          ]}
        />
      </Provider>
    );
  }
}

export default AppProvider;
