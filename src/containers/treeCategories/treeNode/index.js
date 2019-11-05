import React, { Component } from 'react';
import generateKey from '../../../utils/generateReactKey';

import styles from './style.module.scss';

class TreeNode extends Component {
  state = {
    show: false,
  };

  ref = React.createRef();

  toggleShow = event => {
    event.stopPropagation();
    event.preventDefault();
    this.setState(state => ({
      show: !state.show
    }))
  };

  componentDidMount = () => {
    this.ref.current.addEventListener('click', this.toggleShow, false);
  };

  componentWillUnmount = () => {
    this.ref.current.removeEventListener('click', this.toggleShow);
  }

  render() {
    const { node } = this.props;
    const { children } = node;

    const childrenNodes =
      children &&
      children.map((node, index) => {
        return <TreeNode key={generateKey(index)} node={node} />;
      });
    const { show } = this.state;
    return (
      <li  className={styles.itemList}>
        <span ref={this.ref} className={styles.itemListTitle}>{node.title}</span>
        {children && (
          <ul
            className={`${show ? styles.listShowTrue : styles.listShowFalse}`}>
            {childrenNodes}
          </ul>
        )}
      </li>
    );
  }
}

TreeNode.propTypes = {};

export default TreeNode;
