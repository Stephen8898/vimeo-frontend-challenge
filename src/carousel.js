import React, { Component } from 'react'
import Layout from './components/layout.js'
import './style/layout.css'

let newIndex = 0;

export default class carousel extends Component {
 state = {
      index : 0,
  }
         
  
next = () => {
 let num = newIndex++;
  this.update(num)
}
prev = () => {
  
  let num = newIndex--;
  this.update(num);
}
update(newIndex){
let states = this.setState({
   index: newIndex
 })

 return states;
 
}

  imgs = ["assets/vimeo-pic1.jpg","assets/vimeo-pic2.jpg","assets/vimeo-pic3.jpg"]
  title = ["Move 2","Beams", "Monsoon III"]

  render() {


    return (
  <React.Fragment>
    <div className="backgroundImg" style={{backgroundColor:'grey', backgroundImage: `url(${this.imgs[this.state.index]})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', filter:'blur(8px)'}}></div>
    <div className="jumbotron-fluid" style={{ marginTop:'2%', marginBottom:'5%'}}>
      <div className="container">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" >
              <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4 text-center">
                      <img className="img-fluid" src={this.imgs[this.state.index]} alt="poster 1" height="350px" width="250px"/>
                   </div>
                   <div className="col-5 align-middle" style={{color:'white'}}>
                      <h3>{this.title[this.state.index]}</h3>
                      <p >Isn't that fantastic? You can just push a little tree out of your brush like that. 
                         You don't have to spend all your time thinking about what you're doing, you just 
                          let it happen. A fan brush is a fantastic piece of equipment. Use it. Make friends 
                        </p>
                    </div>
                </div>
                <div className="row justify-content-around"> 
                  <div className="col-4 text-right">
                    <button className="btn btn-primary" type="button" >Buy Now</button>
                    <button className="btn btn-outline-dark" type="button" style={{marginLeft:'.5rem', color:'white'}}>Watch Trailer</button>
                  </div>
                </div>
                  </div>
                    <a className="carousel-control-prev" onClick={this.prev} role="button" data-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" onClick={this.next} role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="sr-only">Next</span>
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
