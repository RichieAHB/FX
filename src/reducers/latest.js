import { RECEIVE_LATEST } from '../constants';

const latest = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_LATEST: {
      return {
        ...state,
        [action.payload.base]: action.payload.rates,
      };
    }
    default: {
      return state;
    }
  }
};

export default latest;
