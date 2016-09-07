import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as FeedbackActions from '../actions/feedback';
import * as SettingsActions from '../actions/settings';
import Home from '../components/Home';

function mapStateToProps(state) {
  return {
    feedback: state.feedback,
    settings: state.settings
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, SettingsActions, FeedbackActions), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
