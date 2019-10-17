import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import queryString from 'query-string';

import { getCoursesByAttribute } from '../../services/courses';

import styles from './styles.module.scss';

class Catalogue extends Component {
  state = {
    courses: [],
    isLoading: true
  };

  componentDidMount = () => {
    const { location } = this.props;
    const query = queryString.parse(location.search);

    const courses = getCoursesByAttribute(query.search, query.limit);

    this.setState({ courses });
  };

  componentDidUpdate = prevProps => {
    const { location } = this.props;
    const query = queryString.parse(location.search);

    if (query.search !== prevProps.location) {
      const query = queryString.parse(this.props.location.search);
      getCoursesByAttribute(query.search, query.limit);
    }
  };

  render() {
    console.log(this.state.courses);
    return <main className={styles.mainPageWrapper}>Catalogue</main>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Catalogue)
);
