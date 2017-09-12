import {
  UPDATE_EXCHANGE_AMOUNT,
  UPDATE_EXCHANGE_FROM,
  UPDATE_EXCHANGE_TO,
} from '../constants';

const initialState = {
  exchangeAmount: 0,
  exchangeFrom: 'USD',
  exchangeTo: 'EUR',
};

const ui = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_EXCHANGE_AMOUNT: {
      return {
        ...state,
        exchangeAmount: action.payload,
      };
    }

    case UPDATE_EXCHANGE_FROM: {
      return {
        ...state,
        exchangeFrom: action.payload,
      };
    }

    case UPDATE_EXCHANGE_TO: {
      return {
        ...state,
        exchangeTo: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default ui;
