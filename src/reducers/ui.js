import {
  UPDATE_EXCHANGE_AMOUNT,
  UPDATE_EXCHANGE_FROM,
  UPDATE_EXCHANGE_TO,
  EXCHANGE_CURRENT_USER,
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

    case EXCHANGE_CURRENT_USER: {
      return {
        ...state,
        exchangeAmount: 0,
      };
    }

    default: {
      return state;
    }
  }
};

export default ui;
