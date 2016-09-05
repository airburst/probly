import React, { Component, PropTypes } from 'react';
import styles from './RightDrawer.css';
var moment = require('moment');
import {List} from 'material-ui/List';
import {ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';

export default class RightDrawer extends Component {

  static propTypes = {
      item: PropTypes.object.isRequired,
      open: PropTypes.bool.isRequired
  }

  formatDate(date) {
    return moment(date).format('DD/MM/YYYY');
  }

  render() {
    const { item, open } = this.props;
    const style = { margin: 12 };

    return (
        <Drawer width={400} openSecondary={true} open={open}>
            <List>
              <ListItem><span className={styles.bold}>{item.site}</span></ListItem>
              <ListItem>{item.feedback}</ListItem>
              <ListItem><a className={styles.url} href={item.url} target="_blank" title="Link to page with issue">{item.url}</a></ListItem>
              <ListItem>{item.browser}</ListItem>
              <ListItem>{item.viewport}</ListItem>
              <ListItem>{this.formatDate(item.dateRaised)}</ListItem>
            </List>
            <Divider/>
            <div className={styles.buttonContainer}>
              <RaisedButton label="Copy to clipboard" primary={true} style={style} />
              <RaisedButton label="Close Item" secondary={true} style={style} />
            </div>
        </Drawer>
    );
  }

}