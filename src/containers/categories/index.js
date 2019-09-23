import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './styles.module.scss';

class Categories extends Component {
  state = {};

  render() {
    return <main className={styles.mainPageWrapper}>Categories</main>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
