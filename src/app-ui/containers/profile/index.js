import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import {
  string,
  bool,
  func,
  object
} from 'prop-types';

import styles from './styles.scss';

import selector from './selector';
const {mapStoreToProps, mapDispatchToProps} = selector;

@connect(mapStoreToProps, mapDispatchToProps)
class Screen_profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch_init();
    this.props.dispatch_fetchUserById(this.props.userId);
  }

  render() {
    if (this.props.isLoading) {
      return(
        <div className={`profile ${styles['module-style']} is-loading`} >
          <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
        </div>
      )
    };

    return (
      <div className={`profile ${styles['module-style']}`} >
        {/* <pre><code>{JSON.stringify(this.props.userProps, null, 4)}</code></pre> */}
        <div className="wrap-img">
          <img src={_.get(this.props, `userProps.photo_url`, '')}/>
        </div>
        <div className="wrap-name">
          <span>
            {_.get(this.props, `userProps.name`, '')}
          </span>
        </div>
      </div>
    );
  }
}

export default Screen_profile;
