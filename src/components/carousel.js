import React, { Component } from 'react'


export default class carousel extends Component {
  render() {

    let images = this.props.images
    let descriptions = this.props.descriptions;
    return (
      <div className="jumbotron-fluid" style={{backgroundImage: `url(${images})`}}> 
        <div className="container">
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active" >
                  <div className="row justify-content-md-center">
                    <div className="col-sm">
                      <img  src="assets/vimeo-poster1.jpg" alt="poster 1" />
                   </div>
                   <div className="col-6" style={{Color:'#fffff'}}>
                      <h3>Move 2</h3>
                      <p>Isn't that fantastic? You can just push a little tree out of your brush like that. 
                         You don't have to spend all your time thinking about what you're doing, you just 
                          let it happen. A fan brush is a fantastic piece of equipment. Use it. Make friends 
                          with it. Let your imagination be your guide. Just let your mind wander and enjoy. 
                          </p>
                  </div>
                  <div className="">
                    <button className="btn btn-primary" type="button" style={{marginRight:'1rem'}}>Button</button>
                    <button className="btn btn-outline-dark" type="button" style={{marginLeft:'1rem'}}>Button</button>
                  </div>

                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}
