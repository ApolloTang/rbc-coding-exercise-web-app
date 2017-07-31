import _ from 'lodash';
import store from 'root-infarstructure/store';
import { createHttp } from 'common/utils/rest';

import AN from 'root-infarstructure/action-names';

import config from 'root-infarstructure/config';
const apiUrl= _.get(config, `url_api`, void 0);


const api_transfer = {
  // getDefault(userId) {
  //   return new Promise( (rs, rj) => {
  //     const transferDefault = { from: { account_name: "Checking", account_number: 123456789123, account_balance: 5000 }, to: { name: "Sasha Pieterse", photo_url: "http://i.imgur.com/CGILUTj.jpg" }, amount: 300 };
  //     rs(transferDefault);
  //   })
  // },
  getDefault(userId) {
    return createHttp
      .get(`${apiUrl}/transfer`)
      .then(
        transferDefault => {
          return transferDefault;
        }
      );
  },
  submitDraft(transferDraft) {
    return new Promise( (rs, rj) => {
      const transferConfirm = transferDraft;
      setTimeout(()=>{
        rs(transferConfirm);
      }, 3000)
    })
  },
}


export default api_transfer;
