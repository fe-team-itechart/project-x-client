import React, { Component } from 'react';
import Skeleton from 'react-loading-skeleton';

export default class Img extends Component {
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
    image.src = 'http://placeimg.com/640/480/tech';
  };

  render() {
    const props = this.props;
    const id = this.id;
    const { isLoading } = this.state;
    return (
      <>
        {isLoading && <Skeleton duration={2} width={'100%'} height={'100%'} />}
        <img ref={this.refImg} id={id} {...props} alt="Loading..." />
      </>
    );
  }
}
