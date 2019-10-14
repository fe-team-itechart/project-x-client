import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './styles.module.scss';

class Catalogue extends Component {
  state = {};

  render() {
    return <main className={styles.mainPageWrapper}>Catalogue</main>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Catalogue);
