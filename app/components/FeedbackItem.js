import React, { Component, PropTypes } from 'react';
import styles from './FeedbackItem.css';
var moment = require('moment');

export default class FeedbackItem extends Component {

  static propTypes = {
    item: PropTypes.object.isRequired
  }

  formatDate(date) {
    //return moment(date).format('DD/MM/YYYY');
    return moment(date).fromNow();
  }

  render() {
    const { item } = this.props;

    return (
      <div>
        <span>Site: {item.site}</span><br/>
        <span>Feedback: {item.feedback}</span><br/>
        <span>Url: {item.url}</span><br/>
        <span>Raised: {this.formatDate(item.dateRaised)}</span><br/>
      </div>
    );
  }

}