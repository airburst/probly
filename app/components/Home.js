import React, { Component, PropTypes } from 'react';
// import { Link } from 'react-router';
import styles from './Home.css';
import FeedbackItem from './FeedbackItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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
          <Paper className="feedback-container" zDepth={2}>
            {feedback.length} Feedback items:
            <List className="feedback-list">
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
