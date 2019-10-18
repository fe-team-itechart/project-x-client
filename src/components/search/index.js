import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { MdSearch } from 'react-icons/md';

import styles from './styles.module.scss';

class Search extends Component {
  state = {
    searchValue: '',
  };

  onChange = e => {
    this.setState({ searchValue: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.state.searchValue &&
      this.props.history.push(
        `/catalogue?search=${this.state.searchValue}&limit=10`
      );
  };

  render() {
    return (
      <form className={styles.search} onSubmit={this.onSubmit}>
        <input
          name="searchValue"
          value={this.state.searchValue}
          placeholder="Please enter course name, description or author"
          onChange={this.onChange}
        />
        <button type="submit">
          <MdSearch className={styles.icon} />
        </button>
      </form>
    );
  }
}

export default withRouter(Search);
