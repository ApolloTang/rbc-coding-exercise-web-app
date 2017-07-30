import _ from 'lodash';
import Action from './action';


const mapStoreToProps = (store) => {
  const userId = _.get(store, `sessions.user.userId`, void 0);
  const isLoading = _.get(store, `appUI.profile.isLoading`, false);
  const transferDraft = _.get(store, `appUI.transfer.transferDraft`, null);

  return {
    userId,
    isLoading,
    transferDraft
  };
};


const mapDispatchToProps = dispatch => ({
  dispatch_init() {
    dispatch(Action.init());
  },
  dispatch_getTransferDefaultByUserId(userId) {
    dispatch(Action.getTransferDefaultByUserId(userId));
  },
  dispatch_submitDraft(userId) {
    dispatch(Action.submitDraft(userId));
  },
});

export default { mapStoreToProps, mapDispatchToProps };
