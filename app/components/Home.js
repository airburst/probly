import React, { Component, PropTypes } from 'react';
// import { Link } from 'react-router';
import styles from './Home.css';
import FeedbackListHeading from './FeedbackListHeading';
import FeedbackItem from './FeedbackItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import {List} from 'material-ui/List';
import Paper from 'material-ui/Paper';

class Home extends Component {
  static propTypes = {
    feedback: PropTypes.array.isRequired
  };

  render() {
    const { feedback } = this.props;

    return (
      <MuiThemeProvider>
        <div role="main" id="main">
          <AppBar
            title={<span style={styles.title}>Product Feedback</span>}
            iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          />
          <Paper className="feedback-container" zDepth={2}>
            <FeedbackListHeading count={feedback.length} />
            <List className={styles.feedbackList}>
              {feedback.map((f) => {
                return <FeedbackItem key={f.key} item={f} />
              }) }
            </List>
          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Home;
