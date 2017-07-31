import _ from 'lodash';
import Action from './action';


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
});

export default { mapStoreToProps, mapDispatchToProps };
