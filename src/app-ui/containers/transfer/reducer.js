import _ from 'lodash';
import AN from 'root-infarstructure/action-names';

const initialState = {
  isLoading: false,
  transferDraft: null,
  transferingState: 'idle',
};




const reducer_transfer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case AN[`transfer__transferDefault_fetch_begin`]: {
      const state_prev = { ...state };
      const state_next = { ...state_prev, isLoading: true};
      return state_next;
    }
    case AN[`transfer__transferDefault_fetch_success`]: {
      const transferDefault = _.get(action, `payload.transferDefault`, false);
      const state_prev = { ...state };
      const state_next = {
        ...state_prev,
        isLoading: false,
        transferDraft: transferDefault
      };
      return state_next;
    }
    case AN[`transfer__transferDefault_fetch_fail`]: {
      const state_prev = { ...state };
      const state_next = { ...state_prev, isLoading: false };
      return state_next;
    }

    case AN[`transfer__transfer_fieldChange`]: {
      const fieldName = _.get(action, `payload.fieldName`, '');
      const fieldValue = _.get(action, `payload.fieldValue`, '');


      const state_prev = { ...state };
      const state_next = {
        ...state_prev,
        transferDraft: {
          ...state_prev.transferDraft,
          [fieldName]: fieldValue
        }
      };
      return state_next;
    }

    case AN[`transfer__transfer_submit_begin`]: {
      const state_prev = { ...state };
      const state_next = { ...state_prev, transferingState:'inProgress'};
      return state_next;
    }
    case AN[`transfer__transfer_submit_success`]: {
      const transferConfirm = _.get(action, `payload.transferConfirm`, false);
      const state_prev = { ...state };
      const state_next = { ...state_prev, transferingState:'success' };
      return state_next;
    }
    case AN[`transfer__transfer_submit_fail`]: {
      const state_prev = { ...state };
      const state_next = { ...state_prev, transferingState:'fail' };
      return state_next;
    }
    default: {
      return state;
    }
  }
};

export default reducer_transfer;
