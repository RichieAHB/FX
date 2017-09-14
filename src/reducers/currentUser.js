import { EXCHANGE_CURRENT_USER } from '../constants';

const initialState = {
  balances: {
    USD: 500,
  },
};

const currentUser = (state = initialState, action) => {
  switch (action.type) {
    case EXCHANGE_CURRENT_USER: {
      const { exchangeFrom, amountFrom, exchangeTo, output } = action.payload;
      const prevTo = state.balances[exchangeTo] || 0;
      return {
        balances: {
          ...state.balances,
          [exchangeFrom]: state.balances[exchangeFrom] - amountFrom,
          [exchangeTo]: prevTo + output,
        }
      };
    }
    default: {
      return state;
    }
  }
};

export default currentUser;
