import React, { Component } from 'react'

import styles from './styles.module.scss'

export class ErrorBoundary extends Component {
  state = { 
    error: null,
    errorData: null
  };
  
  componentDidCatch = (error, errorData) => {
    this.setState({ error, errorData })
  }

  render() {
    return this.state.errorData ? (
      <div className={styles.errorWrapper}>
        <h1>Server is not responding. Try again later.</h1>
      </div>
    ) : this.props.children
  }
}