import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './styles.module.scss';

class Sources extends Component {
  state = {};

  render() {
    return <main className={styles.main_page_wrapper}>Sources</main>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sources);
