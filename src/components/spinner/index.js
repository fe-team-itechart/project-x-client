import React, { PureComponent } from 'react';
import { CircleSpinner } from 'react-spinners-kit';

class Spinner extends PureComponent {
  render() {
    return (
      <CircleSpinner size={40} color="#fff" loading={this.props.loading} />
    );
  }
}

export default Spinner;
