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
    this.props.dispatch_submitDraft();
    // this.setState({alert:Date.now().toString()})
  }

  handle_transferAmount = (amount) => {
    const amount_new = numeral(amount).value();
    console.log('handle_transferAmount:', amount, amount_new);
    this.props.dispatch_transferFormFieldChange('amount', amount_new);
  }

  handle_frequencyChanged = (e) => {
    console.log('handle_frequencyChanged:', e.target.value);
    this.props.dispatch_transferFormFieldChange('transferFrequency', e.target.value);
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
        <p id="transfer-alert-message" role="alert" className="alert-message">{this.state.alert}</p>

        <fieldset>
          <legend>From</legend>

            <div className="form-row">
              <div className="label-wrap">
                <label>
                  Account Name:
                </label>
              </div>
              <div className="text-wrap">
                <span>
                  {this.props.PS.account_name}
                </span>
              </div>
            </div>

            <div className="form-row">
              <div className="label-wrap">
                <label>
                  Account Number:
                </label>
              </div>
              <div className="text-wrap">
                <span>
                  {this.props.PS.account_number}
                </span>
              </div>
            </div>

            <div className="form-row">
              <div className="label-wrap">
                <label>
                  Current Balance:
                </label>
              </div>
              <div className="text-wrap">
                <span>
                  {this.props.PS.account_balance}
                </span>
              </div>
            </div>
        </fieldset>

        <fieldset>
          <legend>Transfer details</legend>
          <div data-fn="transfer-amount" >
            <div className="label-wrap">
              <label id="transfer-amount_label" htmlFor="transfer-amount">
                Amount to transfer
              </label>
            </div>
            <div className="input-wrap">
              <ReduxInput
                onChange={ this.handle_transferAmount }
                type="text"
                id="transfer-amount"
                ariaLabelledby="transfer-amount_label"
                value={this.props.PS.amount}
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
                value={this.props.PS.transferFrequency}
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

        <fieldset>
          <legend>Send To</legend>
          {/* <div> <img src={this.props.PS.to_photo_url} /> </div> */}
          <div>
            <span>
              {this.props.PS.to_name}
            </span>
          </div>
          <div>
            <span>
              Change recipient
            </span>
          </div>
        </fieldset>

        {/* <pre><code>{JSON.stringify(this.props.transferDraft, null, 4)}</code></pre> */}
        {/* <pre><code>{JSON.stringify(this.props.PS, null, 4)}</code></pre> */}
        <button onClick={this.handle_submit} > submit</button>
      </div>
    );
  }
}

export default Screen_profile;
