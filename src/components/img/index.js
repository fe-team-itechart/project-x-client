import React, { Component } from 'react';

import Skeleton from 'react-loading-skeleton';

import { links } from '../../utils/constants';

 class Img extends Component {
  refImg = React.createRef();

  state = {
    isLoading: true,
  };

  componentDidMount() {
    const image = this.refImg.current;
    image.addEventListener('load', this.onLoad);
    image.addEventListener('error', this.onError);
  }

  componentWillUnmount() {
    const image = this.refImg.current;
    image.removeEventListener('load', this.onLoad);
    image.removeEventListener('error', this.onError);
  }

  onLoad = () => {
    this.setState({
      isLoading: false,
    });
  };

  onError = () => {
    const image = this.refImg.current;
    this.setState({
      isLoading: false,
    });
    image.src = links.placeHolderImage;
  };

  render() {
    const props = this.props;
    const { isLoading } = this.state;
    return (
      <>
        {isLoading && <Skeleton duration={2} width='100%' height='100%' />}
        <img ref={this.refImg} {...props} alt="Loading..." />
      </>
    );
  }
}

export default Img;