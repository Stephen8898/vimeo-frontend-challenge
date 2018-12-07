import React, { Component } from 'react';
import Layout from './components/layout.js'
import Carousel from './components/carousel'
import './style/layout.css'

class App extends Component {
  state = {
    images: '',
    descriptions: [ 
    
    ]
  }

next = () => {

}

prev = () => {

}
  render() {

    return (
    <React.Fragment>
      <Carousel images={this.state.images}/>
      <hr></hr>
      <Layout/>
  </React.Fragment>
    );
  }
}

export default App;
