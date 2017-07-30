import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import {
  string,
  bool,
  func,
  object
} from 'prop-types';


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
    console.log('xxxx: ',  this.props)
    if (this.props.isLoading) {
      return(
        <div>
          <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
        </div>
      )
    };

    return (
      <div>
        <img src={_.get(this.props, `userProps.photo_url`, '')}/>
        <pre><code>{JSON.stringify(this.props.userProps, null, 4)}</code></pre>
          <span>hello</span>
      </div>
    );
  }
}

export default Screen_profile;
