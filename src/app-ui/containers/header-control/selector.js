import _ from 'lodash';
import Action from 'app-ui/containers/profile/action';
import Action_login from 'app-ui/containers/login/action';

import { push } from 'connected-react-router';

const mapStoreToProps = (store) => {
  const isLoading = _.get(store, `appUI.profile.isLoading`, false);
  const userId = _.get(store, `sessions.user.userId`, void 0);
  const userProps = _.get(store, `sessions.user.userProps`, void 0);

  return {
    isLoading,
    userId,
    userProps
  };
};


const mapDispatchToProps = dispatch => ({
  dispatch_init() {
    dispatch(Action.init());
  },
  dispatch_fetchUserById(userId) {
    dispatch(Action.getUserById(userId));
  },
  dispatch_logout(userId) {
    dispatch(Action_login.destroySession());
  }
});

export default { mapStoreToProps, mapDispatchToProps };
