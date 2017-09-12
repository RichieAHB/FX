import latest from './latest';
import currentUser from './currentUser';
import ui from './ui';

const root = (state = {}, action) => ({
  latest: latest(state.latest, action),
  currentUser: currentUser(state.currentUser, action),
  ui: ui(state.ui, action),
});

export default root;
