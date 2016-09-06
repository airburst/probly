import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as FeedbackActions from '../actions/feedback';
import Home from '../components/Home';


function mapStateToProps(state) {
  return {
    feedback: state.feedback,
    settings: state.settings
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(FeedbackActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
