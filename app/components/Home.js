import React, { Component, PropTypes } from 'react';
// import { Link } from 'react-router';
import styles from './Home.css';
import FeedbackItem from './FeedbackItem';

class Home extends Component {
  static propTypes = {
    feedback: PropTypes.array.isRequired
  };

  render() {
    const { feedback } = this.props;

    return (
      <div className={styles.container}>
        <div>
          {feedback.length} Feedback items: 
          {feedback.map((f) => {
            return <FeedbackItem key={f.key} item={f} />
          })}
        </div>
      </div>
    );
  }
}

export default Home;
