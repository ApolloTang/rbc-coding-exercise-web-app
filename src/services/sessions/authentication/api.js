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
      const userId = `12345`;
      setTimeout( function(){
        store.dispatch({
          type: AN[`sessions_authenticate_createSession_success`],
          payload: { token, userId },
        });
        rs({token, userId});
      }, 1000);
    });

  }
};

export default api_authentication;
