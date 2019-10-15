import React, { Component } from 'react';
import Spinner from './../spinner/index';

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
    console.log('loaded');
    this.setState({
      isLoading: false,
    });
  }

  onError = () => {
    const image = this.refImg.current;
    console.log('error');
    this.setState({
      isLoading: false,
    });
    image.src = 'http://placeimg.com/640/480/tech';
  }

  render() {
    const props = this.props;
    const id = this.id;
    const { isLoading } = this.state;
    return (
      <>
        { isLoading && <Spinner /> }
        <img ref={this.refImg} id={id} {...props} alt='Loading...'/>
      </>
    );
  }
}
