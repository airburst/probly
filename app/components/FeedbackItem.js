import React, { Component, PropTypes } from 'react';
import styles from './FeedbackItem.css';
var moment = require('moment');
import {ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';

export default class FeedbackItem extends Component {

  static propTypes = {
    item: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  formatDate(date) {
    //return moment(date).format('DD/MM/YYYY');
    return moment(date).fromNow();
  }

  render() {
    const { item } = this.props;

    return (
      <div>
        <ListItem
          key={item.key}
          onTouchTap={this.handleToggle}>
          <div className="feedback-row">
            <span className="site">{item.site}</span>
            <span className="feedback">{item.feedback}</span>
            <span className="url">{item.url}</span>
            <span className="fill-space"></span>
            <span className="time"><i>{this.formatDate(item.dateRaised) }</i></span>
          </div>
        </ListItem>
        <Divider />

        <Drawer width={400} openSecondary={true} open={this.state.open}>
          <AppBar title={item.key} />
        </Drawer>

      </div>
    );
  }

}