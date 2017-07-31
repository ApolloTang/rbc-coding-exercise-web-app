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
    this.props.dispatch_getTransferDefaultByUserId(this.props.userId);
  }

  handle_submit = () => {
    this.props.dispatch_submitDraft();
  }

  handle_transferAmount = (amount) => {
    const amount_new = numeral(amount).value();
    // console.log('handle_transferAmount:', amount, amount_new);
    this.props.dispatch_transferFormFieldChange('amount', amount_new);
  }

  handle_frequencyChanged = (e) => {
    // console.log('handle_frequencyChanged:', e.target.value);
    this.props.dispatch_transferFormFieldChange('transferFrequency', e.target.value);
  }

  render() {
    if (this.props.isLoading) {
      return(
        <div className={`profile ${styles['module-style']} is-loading`}>
          <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
        </div>
      )
    };

    return (
      <div className={`profile ${styles['module-style']}`}>
        {
          (this.props.transferingState === 'inProgress') ?
            <div className='message in-progress'>
              <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
              <p id="transfer-alert-message" role="alert" className="alert-message">Transfering in progress</p>
            </div> : null
        } {
          (this.props.transferingState === 'success') ?
            <div className='message success'>
              <p id="transfer-alert-message" role="alert" className="alert-message">Transfering success</p>
            </div> : null
        }
        <fieldset className="from">

          <div className="wrap-legend">
            <legend>From</legend>
          </div>

          <div className="group">
            <div className="form-row">
              <div className="label-wrap left-col">
                <label>
                  Account Name:
                </label>
              </div>
              <div className="text-wrap last-col">
                <span>
                  {this.props.PS.account_name}
                </span>
              </div>
            </div>

            <div className="form-row">
              <div className="label-wrap left-col">
                <label>
                  Account Number:
                </label>
              </div>
              <div className="text-wrap last-col">
                <span>
                  {this.props.PS.account_number}
                </span>
              </div>
            </div>

            <div className="form-row">
              <div className="label-wrap left-col">
                <label>
                  Current Balance:
                </label>
              </div>
              <div className="text-wrap last-col">
                <span>
                  {this.props.PS.account_balance}
                </span>
              </div>
            </div>

          </div>

        </fieldset>

        <fieldset className="transfer-details">
          <div className="wrap-legend">
            <legend>Transfer details</legend>
          </div>

          <div className="group">
            <div className="form-row" data-fn="transfer-amount" >
              <div className="label-wrap left-col">
                <label id="transfer-amount_label" htmlFor="transfer-amount">
                  Amount to transfer
                </label>
              </div>
              <div className="input-wrap last-col">
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

            <div className="form-row" data-fn="transfer-frequency" >
              <div className="label-wrap left-col">
                <label htmlFor="transfer-frequency">Frequency</label>
              </div>
              <div className="select-wrap last-col">
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
          </div>
        </fieldset>

        <fieldset className="send-to">
          <div className="wrap-legend">
            <legend>Send To</legend>
          </div>
          <div className="form-row">
            <div className="wrap-outter-img">
              <div className="wrap-img">
                <div className="wrap-inner-img">
                  <img src={this.props.PS.to_photo_url} />
                </div>
              </div>
            </div>
            <div className="wrap-name">
              <span>
                {this.props.PS.to_name}
              </span>
            </div>
            <div className="wrap-change">
              <span>
                Change recipient
              </span>
            </div>
          </div>
        </fieldset>

        <div className="foot" >
          <button className="send-button" onClick={this.handle_submit} >send {this.props.PS.amount}</button>
        </div>

        {/* <pre><code>{JSON.stringify(this.props.transferDraft, null, 4)}</code></pre> */}
        {/* <pre><code>{JSON.stringify(this.props.PS, null, 4)}</code></pre> */}
      </div>
    );
  }
}

export default Screen_profile;
