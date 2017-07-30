import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import ReduxInput from 'widgets/redux-input/';
import numeral from 'numeral';

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
    this.state={
      alert:'xx'
    }
  }

  componentDidMount() {
    this.props.dispatch_init();
    this.props.dispatch_getTransferDefaultByUserId(this.props.userId);
  }

  shouldComponentUpdate() {
    return true;
  }

  handle_submit = () => {
    // this.props.dispatch_submitDraft(this.props.userId);
    this.setState({alert:Date.now().toString()})
  }

  handle_transferAmount = (amount) => {
    const amount_new = numeral(amount).value();
    console.log('handle_transferAmount:', amount, amount_new);
  }

  handle_frequencyChanged = (e) => {
    console.log('handle_frequencyChanged:', e.target.value);
  }

  render() {
    console.log('xxxxxx: ', this.props)

    const amount = _.get(this.props, `transferDraft.amount_presentation`, '$00.00');
    const frequency = _.get(this.props, `transferDraft.transferFrequency`, 'every-day');

    console.log('xxxxx: frequency', frequency)

    if (this.props.isLoading) {
      return(
        <div>
          <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
        </div>
      )
    };

    return (
      <div>

        <p id="transfer-alert-message" role="alert" className="alert-message">{this.state.alert}</p>

        <fieldset>
          <legend>Transfer details</legend>

          <div data-fn="transfer-amount" >
            <div className="label-wrap">
              <label id="transfer-amount_label" htmlFor="transfer-amount">
                Amount to transfer
              </label>
            </div>
            <div className="input-wrap">
              {/* <input */}
              {/*   onChange={ this.handle_transferAmount } */}
              {/*   type="text" */}
              {/*   id="transfer-amount" */}
              {/*   aria-labelledby="transfer-amount_label" */}
              {/*   value={amount} */}
              {/*   /> */}
              <ReduxInput
                onChange={ this.handle_transferAmount }
                type="text"
                id="transfer-amount"
                ariaLabelledby="transfer-amount_label"
                value={amount}
                shouldAllowInput={(v)=>{
                  const r = /^\$?\d+(,\d{3})*\.?[0-9]?[0-9]?$/;
                  // https://stackoverflow.com/questions/8829765/regular-expression-for-dollar-amount-in-javascript
                  return r.test(v) || /^\s*$/.test(v);
                }} />
            </div>
          </div>

          <div data-fn="transfer-frequency" >
            <div className="label-wrap">
              <label htmlFor="transfer-frequency">Frequency</label>
            </div>
            <div className="select-wrap">
              <select
                onChange={ this.handle_frequencyChanged }
                value={frequency}
                id="transfer-frequency"
                name="select" >
                <option value="every-day">Every day</option>
                <option value="every-week">Every week</option>
                <option value="every-month">Every month</option>
                <option value="every-year">Every year</option>
              </select>
            </div>
          </div>

        </fieldset>
        <pre><code>{JSON.stringify(this.props.transferDraft, null, 4)}</code></pre>
        <button onClick={this.handle_submit} > submit</button>
      </div>
    );
  }
}

export default Screen_profile;
