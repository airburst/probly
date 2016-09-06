import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Badge from 'material-ui/Badge';
import { List } from 'material-ui/List';
import Paper from 'material-ui/Paper';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import Toggle from 'material-ui/Toggle';
import styles from './Home.css';
import FeedbackItem from './FeedbackItem';
import store from '../index';
import * as SettingsActions from '../actions/settings';

const toggleStyles = {
  block: {
    maxWidth: 250,
    padding: 16
  },
  toggle: {
    marginBottom: 16,
  },
};

class Home extends Component {

  static propTypes = {
    feedback: PropTypes.array.isRequired
  };

  handleChange = () => {
    store.dispatch(SettingsActions.toggleOpenItems());
  };

  render() {
    const { feedback } = this.props;
    const toggleState = (store !== undefined) ?
      store.getState().settings.filterOpenRecords : true;

    return (
      <MuiThemeProvider>
        <div role="main" id="main">
          <Toolbar>
            <ToolbarGroup>
              <ToolbarTitle text="Product Feedback" />
              <div style={toggleStyles.block}>
                <Badge badgeContent={feedback.length} primary />
              </div>
            </ToolbarGroup>
            <ToolbarGroup>
              <div style={toggleStyles.block}>
                <Toggle
                  label="Only show Open items"
                  defaultToggled={toggleState}
                  onToggle={this.handleChange}
                  style={toggleStyles.toggle}
                />
              </div>
            </ToolbarGroup>
          </Toolbar>

          <Paper zDepth={2}>
            <List className={styles.feedbackList}>
              {feedback.map((f) => { return <FeedbackItem key={f.key} item={f} />; }) }
            </List>
          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Home;
