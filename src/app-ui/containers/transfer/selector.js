import _ from 'lodash';
import numeral from 'numeral';
import Action from './action';


const mapStoreToProps = (store) => {
  const userId = _.get(store, `sessions.user.userId`, void 0);
  const isLoading = _.get(store, `appUI.profile.isLoading`, false);
  const transferDraft = _.get(store, `appUI.transfer.transferDraft`, null);

  const data = {
    userId,
    isLoading,
    transferDraft
  };
  const data_out = _.cloneDeep(data);
  decorator_presentation(data_out,  `transferDraft.amount`, '$0,0.00', '$0.00' )
  decorator_presentation(data_out,  `transferDraft.from.account_balance`, '$0,0.00', '$0.00' )

  return data_out;
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

function decorator_presentation(data, path, format, fallback) {
  const data_clone = _.get(data, path, fallback); // cloned premitive value;
  return _.set(data, `${path}_presentation`, numeral( data_clone ).format( format ))
};
