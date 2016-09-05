import React, { Component, PropTypes } from 'react';
import styles from './FeedbackListHeading.css';
import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui/svg-icons/action/description';
import Divider from 'material-ui/Divider';

export default class FeedbackListHeading extends Component {

  static propTypes = {
    count: PropTypes.number.isRequired
  }

  render() {
    const { count } = this.props;

    return (
        <div>
            <div className={styles.heading}>
                <Badge
                    badgeContent={count}
                    primary={true}
                    >
                    <NotificationsIcon />
                </Badge>
            </div>    
            <Divider />
        </div>
    );
  }

}