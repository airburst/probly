import React, { Component, PropTypes } from 'react';
import Divider from 'material-ui/Divider';
import { ListItem } from 'material-ui/List';
import { red100, grey50 } from 'material-ui/styles/colors';
import RightDrawer from './RightDrawer';
import styles from './FeedbackItem.css';

const moment = require('moment');

export default class FeedbackItem extends Component {

  static propTypes = {
    item: PropTypes.object.isRequired,
    showReOpenUndo: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  formatDate(date) {
    return moment(date).fromNow();
  }

  render() {
    const { item } = this.props;
    const bgStyle = (item.status === 'Open') ?
    {
      bg: {
        backgroundColor: grey50
      }
    } :
    {
      bg: {
        backgroundColor: red100
      }
    };

    return (
      <div>
        <ListItem
          key={item.key}
          onTouchTap={this.handleToggle}
          style={bgStyle.bg}
        >
          <div>
            <div className={styles.site}>{item.site}</div>
            <div>
              <div className={styles.feedback}>{item.feedback}</div>
              <div className={styles.time}><i>{this.formatDate(item.dateRaised) }</i></div>
            </div>
          </div>
        </ListItem>
        <Divider />
        <RightDrawer
          item={item}
          open={this.state.open}
          drawerTap={this.handleToggle}
          showReOpenUndo={this.props.showReOpenUndo}
        />
      </div>
    );
  }

}
