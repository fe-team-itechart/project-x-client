import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './styles.module.scss';

class coursePageDetails extends Component {
  state = {
    id: null
  };

  componentDidMount(){
    const courseId = this.props.match.params.id;
    console.log(this.props.match.params.id);
  }

  render() {
    return <main className={styles.coursePageDetailsWrapper}>Course page details</main>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(coursePageDetails);