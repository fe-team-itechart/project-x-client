import React, { PureComponent } from 'react';

import PropTypes from 'prop-types'

class ShowMessage extends PureComponent {
  render() {
    const { children, classStyle, condition } = this.props;
    return <>{condition && <div className={classStyle}>{children}</div>}</>;
  }
}

ShowMessage.propTypes = {
  classStyle: PropTypes.string,
  condition: PropTypes.bool.isRequired
}

ShowMessage.defaultProps = {
  classStyle: ''
}

export default ShowMessage;
