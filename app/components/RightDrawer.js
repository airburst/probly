import React, { Component, PropTypes } from 'react';
import styles from './RightDrawer.css';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
var moment = require('moment');

export default class RightDrawer extends Component {

  static propTypes = {
    item: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    drawerTap: PropTypes.func.isRequired
  }

  formatDate(date) {
    return moment(date).format('DD/MM/YYYY');
  }

  render() {
    const { item, open, drawerTap } = this.props;
    const style = { margin: 12 };

    return (
      <Drawer width={400} openSecondary={true} open={open}>
        <AppBar
          title={<span style={styles.title}>{item.site}</span>}
          iconElementLeft={<IconButton onTouchTap={drawerTap}><NavigationClose /></IconButton>}
          />
        <div>
          <div className={styles.list}>{item.feedback}</div>
          <div className={styles.list}><a className={styles.url} href={item.url} target="_blank" title="Link to page with issue">{item.url}</a></div>
          <div className={styles.list}>{item.browser}</div>
          <div className={styles.list}>{item.viewport}</div>
          <div className={styles.list}>{this.formatDate(item.dateRaised) }</div>
        </div>
        <Divider/>
        <div className={styles.buttonContainer}>
          <RaisedButton label="Copy to clipboard" primary={true} style={style} />
          <RaisedButton label="Close Item" secondary={true} style={style} />
        </div>
      </Drawer>
    );
  }

}