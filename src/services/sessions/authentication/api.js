import _ from 'lodash';
import store from 'root-infarstructure/store';
import { createHttp } from 'common/utils/rest';

import AN from 'root-infarstructure/action-names';

import config from 'root-infarstructure/config';
const apiUrl= _.get(config, `url_api`, void 0);

const api_authentication = {
  createSession(email, password) {
    const payload = {
      email,
      password,
    };

    //@TODO API authentication not impliment

    return new Promise((rs, rj)=>{
      const token = `token`;
      setTimeout( function(){
        store.dispatch({
          type: AN[`sessions_authenticate_createSession_success`],
          payload: { token },
        });
        rs('token');
      }, 3000);
    });

  }
};

export default api_authentication;
