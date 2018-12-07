import React, { Component } from 'react'
import Layout from './components/layout.js'
import './style/layout.css'

export default class carousel extends Component {
  state = {
    images: [],
    title:[],
    descriptions: []
  }

  id = [304230331]
componentDidMount(){
  fetch(`https://api.vimeo.com/videos/${this.id[0]}`)
    .then((result) => {
      return result.json();
    })
    .then((json) => {
      return console.log(json)
    })
}

next = () => {

}

prev = () => {

}

  render() {

    let images = this.props.images
    let descriptions = this.props.descriptions;

    var {items} = this.state;
    return (
  <React.Fragment>
    <div className="backgroundImg" style={{backgroundColor:'grey', backgroundImage: `url(${images})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', filter:'blur(8px)'}}></div>
    <div className="jumbotron-fluid" style={{ marginTop:'2%', marginBottom:'5%'}}>
      <div className="container">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" >
              <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4 text-center">
                      <img className="img-fluid" src="assets/vimeo-pic2.jpg" alt="poster 1" height="350px" width="250px"/>
                   </div>
                   <div className="col-5 align-middle" style={{color:'white'}}>
                      <h3>Move 2</h3>
                      <p >Isn't that fantastic? You can just push a little tree out of your brush like that. 
                         You don't have to spend all your time thinking about what you're doing, you just 
                          let it happen. A fan brush is a fantastic piece of equipment. Use it. Make friends 
                        </p>
                    </div>
                </div>
                <div className="row justify-content-lg-around"> 
                  <div className="col-4 text-right">
                    <button className="btn btn-primary" type="button" style={{marginRight:'1rem'}}>Buy Now</button>
                    <button className="btn btn-outline-dark" type="button" style={{marginLeft:'1rem', color:'white'}}>Watch Trailer</button>
                  </div>
                </div>
                  </div>
                    <a class="carousel-control-prev"  role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next"  role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </a>
                </div>
              </div>
          </div>
        </div>
      </div>
      <Layout/>
      </React.Fragment>
    )
  }
}
