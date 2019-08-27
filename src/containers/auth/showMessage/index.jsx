import React, { PureComponent } from 'react';

class ShowMessage extends PureComponent {
  render() {
    const { children, classStyle, condition } = this.props;
    return <>{condition && <div className={classStyle}>{children}</div>}</>;
  }
}

export default ShowMessage;
