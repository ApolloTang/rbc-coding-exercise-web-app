import _ from 'lodash';
import store from 'root-infarstructure/store';
import { createHttp } from 'common/utils/rest';

import AN from 'root-infarstructure/action-names';

import config from 'root-infarstructure/config';
const apiUrl= _.get(config, `url_api`, void 0);


const api_user = {
  getAll() {
    // not impliment
  },
  // getOne(userId) {
  //   return new Promise( (rs, rj) => {
  //     const userProps = { name: "Keanu Reeves", photo_url: "http://i.imgur.com/Y7u78c4.jpg" };
  //     store.dispatch( {
  //       type: AN[`sessions_user_update`],
  //       payload: {userProps}
  //     });
  //     rs({userProps});
  //   })
  // },
  getOne(userId) {
    return createHttp
      .get(`http://localhost:3001/api/user`)
      .then(
        userProps => {
          store.dispatch( {
            type: AN[`sessions_user_update`],
            payload: {userProps}
          });
          return userProps;
        }
      );
  },
  create(payload) {
    // not impliment
  },
  update(userId, payload) {
    // not impliment
  },
  del(userId) {
    // not impliment
  }

}


export default api_user;
