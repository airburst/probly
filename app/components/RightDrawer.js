import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import { indigo700 } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import CopyToClipboard from 'react-copy-to-clipboard';
import Snackbar from 'material-ui/Snackbar';
import * as Firebase from '../services/firebase';
import styles from './RightDrawer.css';

const moment = require('moment');

export default class RightDrawer extends Component {

  static propTypes = {
    item: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    drawerTap: PropTypes.func.isRequired,
    showReOpenUndo: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = { snackBarOpen: false };
  }

  handleTouchTap = () => {
    this.setState({ snackBarOpen: true });
  };

  handleRequestClose = () => {
    this.setState({ snackBarOpen: false });
  };

  closeItem = () => {
    this.props.showReOpenUndo(this.props.item.key);
    Firebase.closeItem(this.props.item.key);
  }

  formatDate(date) {
    return moment(date).format('DD/MM/YYYY');
  }

  writeItem(item) {
    return `Description:
${item.feedback}

Site:\t\t${item.site}
Url:\t\t${item.url}
Browser:\t${item.browser}
Viewport:\t${item.viewport}
Date:\t\t${this.formatDate(item.dateRaised)}`;
  }

  render() {
    const { item, open, drawerTap } = this.props;
    const style = { margin: 12 };
    const appBarBg = { backgroundColor: indigo700 };

    return (
      <Drawer width={400} openSecondary open={open}>
        <AppBar
          title={<span style={styles.title}>{item.site}</span>}
          iconElementLeft={<IconButton onTouchTap={drawerTap}><NavigationClose /></IconButton>}
          style={appBarBg}
        />
        <div>
          <div className={styles.list}>{item.feedback}</div>
          <div className={styles.list}>
            <a
              className={styles.url}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              title="Link to page with issue"
            >{item.url}</a>
          </div>
          <div className={styles.list}>{item.browser}</div>
          <div className={styles.list}>{item.viewport}</div>
          <div className={styles.list}>{this.formatDate(item.dateRaised) }</div>
        </div>
        <Divider />
        <div className={styles.buttonContainer}>
          <CopyToClipboard
            text={this.writeItem(item)}
            onCopy={() => this.handleTouchTap()}
          >
            <RaisedButton label="Copy to clipboard" primary style={style} />
          </CopyToClipboard>
          <RaisedButton
            label="Close Item"
            secondary style={style}
            onTouchTap={this.closeItem}
          />
        </div>

        <Snackbar
          open={this.state.snackBarOpen}
          message="Copied..."
          autoHideDuration={2000}
          onRequestClose={this.handleRequestClose}
        />
      </Drawer>
    );
  }

}
