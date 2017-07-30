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
class Screen_Login extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch_init();
    this.props.dispatch_getTransferDefaultByUserId(this.props.userId);
  }

  handle_submit = () => {
    this.props.dispatch_submitDraft(this.props.userId);
  }

  render() {
    if (this.props.isLoading) {
      return(
        <div>
          <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
        </div>
      )
    };

    return (
      <div>
        <pre><code>{JSON.stringify(this.props.transferDraft, null, 4)}</code></pre>
        <button onClick={this.handle_submit} > submit</button>
      </div>
    );
  }
}

export default Screen_Login;
