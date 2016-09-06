import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Chip from 'material-ui/Chip';
import Divider from 'material-ui/Divider';
import { List } from 'material-ui/List';
import Paper from 'material-ui/Paper';
import Snackbar from 'material-ui/Snackbar';
import Toggle from 'material-ui/Toggle';
import AppBar from 'material-ui/AppBar';
import { red200 } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import styles from './Home.css';
import FeedbackItem from './FeedbackItem';
import * as FeedbackActions from '../actions/feedback';
import * as SettingsActions from '../actions/settings';
import theme from './theme';

const toggleStyles = {
  block: {
    maxWidth: 250,
    paddingTop: 16
  },
  toggle: {
    marginBottom: 16,
  },
  chip: {
    margin: 12
  },
};

class Home extends Component {

  static propTypes = {
    feedback: PropTypes.array.isRequired,
    settings: PropTypes.object.isRequired
  };

  handleToggle = () => {
    SettingsActions.toggleOpenItems();
  }

  handleRequestClose = () => {
    SettingsActions.hideReOpenUndo();
  };

  reOpenItem = () => {
    FeedbackActions.openItem(this.props.settings.lastKey);
    SettingsActions.hideReOpenUndo();
  }

  render() {
    const { feedback } = this.props;

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
        <div role="main" id="main">

          <AppBar
            title="Probly -> MyLife Feedback"
            showMenuIconButton={false}
            iconElementRight={<IconButton><MoreVertIcon /></IconButton>}
          />

          <Paper zDepth={0}>
            <List className={styles.feedbackList}>
              <div className={styles.detailsBar}>
                <Chip
                  style={toggleStyles.chip}
                  backgroundColor={red200}
                >
                  {feedback.length} feedback items
                </Chip>
                <div style={toggleStyles.block}>
                  <Toggle
                    label="Only show Open items"
                    defaultToggled={this.props.settings.filterOpenRecords}
                    onToggle={this.handleToggle}
                    style={toggleStyles.toggle}
                  />
                </div>
              </div>
              <Divider />
              {feedback.map((f) => { return <FeedbackItem key={f.key} item={f} />; }) }
            </List>
          </Paper>

          <Snackbar
            open={this.props.settings.showReopenUndo}
            message="Closed this record"
            autoHideDuration={4000}
            action="undo"
            onActionTouchTap={this.reOpenItem}
            onRequestClose={this.handleRequestClose}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Home;
