import latest from './latest';
import currentUser from './currentUser';

const root = (state = {}, action) => ({
  latest: latest(state.latest, action),
  currentUser: currentUser(state.currentUser, action),
});

export default root;
