import _ from 'lodash';

import AN from 'root-infarstructure/action-names';
import API_transfer from 'services/transfer/api';

import {transferDraft_default} from 'services/domain/transfer';

const Action_transfer = {
  init() {
    return (dispatch, getState) => {
      dispatch({
        type: AN[`transfer__init`],
      });
    };
  },
  getTransferDefaultByUserId(userId) {
    return (dispatch, getState) => {
      dispatch({
        type: AN[`transfer__transferDefault_fetch_begin`],
        payload: {userId},
      });

      return API_transfer.getDefault(userId).then(
        (transferDefault) => {
          if (transferDefault.httpError) {
              dispatch({
                type: AN[`transfer__transferDefault_fetch_fail`],
                error: session.httpError.message,
              });
          } else {
            // transferFrequency devalue value is set locally
            _.set(transferDefault, `transferFrequency`, transferDraft_default.transferFrequency);
            dispatch({
              type: AN[`transfer__transferDefault_fetch_success`],
              payload: {transferDefault},
            });
          }
        },
      );

    };
  },
  transferFormFieldChange(fieldName, fieldValue) {
    return (dispatch, getState) => {
      dispatch({
        type: AN[`transfer__transfer_fieldChange`],
        payload: {fieldName, fieldValue},
      });
    };
  },
  submitDraft(userId) {
    return (dispatch, getState) => {
      const transferDraft = _.get(getState(), `appUI.transfer.transferDraft`, null);

      dispatch({
        type: AN[`transfer__transfer_submit_begin`],
        payload: {transferDraft},
      });

      return API_transfer.submitDraft(transferDraft).then(
        (transferConfirm) => {
          if (transferConfirm.httpError) {
              dispatch({
                type: AN[`transfer__transfer_submit_fail`],
                error: session.httpError.message,
              });
          } else {
            dispatch({
              type: AN[`transfer__transfer_submit_success`],
              payload: {transferConfirm},
            });
          }
        },
      );

    };
  }
};

export default Action_transfer;
