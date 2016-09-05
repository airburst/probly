import React, { Component, PropTypes } from 'react';
import styles from './FeedbackItem.css';
var moment = require('moment');
import {ListItem} from 'material-ui/List';

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
      <ListItem key={item.key}>
        <div className="feedback-row">
          <span className="site">{item.site}</span>
          <span className="feedback">{item.feedback}</span>
          <span className="url">{item.url}</span>
          <span className="fill-space"></span>
          <span className="time"><i>{this.formatDate(item.dateRaised)}</i></span>
        </div>
      </ListItem>
    );
  }

}