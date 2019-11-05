import React, { Component } from 'react';
import { connect } from 'react-redux';

import TreeNode from './treeNode/index';

import { getAllCategoriesRequest } from '../../actions/categories';
import generateKey from '../../utils/generateReactKey';
import styles from './style.module.scss';


class TreeCategories extends Component {
  componentDidMount() {
    this.props.getAllCategoriesRequest();
  }

  toggleNode = event => {
    event.stopPropagation();
    event.currentTarget.classList.toggle(styles.hidden);
  };

  renderTree = children => {
    const nodes = children.map((node, index) => {
      return <TreeNode key={generateKey(index)} node={node} />;
    });
    return nodes;
  };

  render() {
    const { nodesTree } = this.props;
    return (
      <>
        <nav role="navigation" className={styles.tree}>
            <ul>{this.renderTree(nodesTree)}</ul>
        </nav>
      </>
    );
  }
}

const mapStateToProps = state => ({
  nodesTree: state.categories.data,
});

const mapDispatchToProps = {
  getAllCategoriesRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TreeCategories);
