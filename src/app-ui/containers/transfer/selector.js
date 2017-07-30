import _ from 'lodash';
import numeral from 'numeral';
import Action from './action';


const mapStoreToProps = (store) => {
  const userId = _.get(store, `sessions.user.userId`, void 0);
  const isLoading = _.get(store, `appUI.profile.isLoading`, false);
  const transferDraft = _.get(store, `appUI.transfer.transferDraft`, null);
  const transferingState = _.get(store, `appUI.transfer.transferingState`, null);

  const PS = {
    account_name : _.get(transferDraft, `from.account_name`, '' ),
    account_number : _.get(transferDraft, `from.account_number`, '' ),
    account_balance : get_presentation_money(transferDraft, `from.account_balance`, '$0,0.00', '$0.00' ),
    to_name : _.get(transferDraft, `to.name`, '' ),
    to_photo_url : _.get(transferDraft, `to.photo_url`, '' ),
    amount : get_presentation_money(transferDraft, `amount`, '$00.00', '$0.00' ),
    transferFrequency : _.get(transferDraft, `transferFrequency`, 'every-day'),
  };

  const data_out = {
    userId,
    isLoading,
    transferingState,
    transferDraft,
    PS
  };

  return data_out;

};

const mapDispatchToProps = dispatch => ({
  dispatch_init() {
    dispatch(Action.init());
  },
  dispatch_getTransferDefaultByUserId(userId) {
    dispatch(Action.getTransferDefaultByUserId(userId));
  },
  dispatch_transferFormFieldChange(fieldName, fieldValue) {
    dispatch(Action.transferFormFieldChange(fieldName, fieldValue));
  },
  dispatch_submitDraft() {
    dispatch(Action.submitDraft());
  },
});

export default { mapStoreToProps, mapDispatchToProps };

function decorator_presentation(data, path, format, fallback) {
  const data_clone = _.get(data, path, fallback); // cloned premitive value;
  return _.set(data, `${path}_presentation`, numeral( data_clone ).format( format ))
};

function get_presentation_money(data, path, format, fallback) {
  const data_clone = _.get(data, path, fallback); // cloned premitive value;
  return numeral( data_clone ).format( format );
};
