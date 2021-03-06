import React, { Component } from 'react'

export default class layout extends Component {
  render() {
    return (
        <React.Fragment>
        <div className="container" style={{marginTop:'15%', marginBottom:'10%'}}>
          <div className="row" >
          <div className="col align-middle" >
              <img className="img-fluid" src="assets/vimeo-pic3.jpg" alt="picture Monsoon III" />
            </div>
            <div className="col-md align-start">
                <h3>Monsoon III</h3>
                <p>Isn't that fantastic? You can just push a little tree out of your brush like that. 
                   You don't have to spend all your time thinking about what you're doing, you just 
                   let it happen. A fan brush is a fantastic piece of equipment. Use it. Make friends 
                   with it. Let your imagination be your guide. Just let your mind wander and enjoy. 
                   </p>
            </div>
        </div>
      </div>
        <div className="container-fluid" style={{backgroundImage:'linear-gradient(to bottom, rgb(55, 55, 56,1), rgb(55, 55, 56, 0))', width:'100%'}}>
        <div className="container" style={{paddingTop:'10%'}}>
        <div className="row" > 
            <div className="col" style={{color:'#ffff'}}>
                <h3>Beams</h3>
                <p>Isn't that fantastic? You can just push a little tree out of your brush like that. 
                   You don't have to spend all your time thinking about what you're doing, you just 
                   let it happen. A fan brush is a fantastic piece of equipment. Use it. Make friends 
                   with it. Let your imagination be your guide. Just let your mind wander and enjoy. 
                   </p>
            </div>
            <div className="col-md">
              <img className="img-fluid" src="assets/vimeo-pic2.jpg" alt="picture Beams"/>
            </div>
          </div> 
      <div className="container" style={{paddingTop:'10%'}}>
        <div className="row"> 
            <div className="col-md">
              <img className="img-fluid" src="assets/vimeo-pic1.jpg" alt="picture Move 2" style={{width:'100%'}} />
            </div>
             <div className="col" style={{color:'#ffff'}}>
                <h3>Move 2</h3>
                <p>Isn't that fantastic? You can just push a little tree out of your brush like that. 
                   You don't have to spend all your time thinking about what you're doing, you just 
                   let it happen. A fan brush is a fantastic piece of equipment. Use it. Make friends 
                   with it. Let your imagination be your guide. Just let your mind wander and enjoy. 
                   </p>
                </div>
            </div> 
            </div>
        </div>
      </div>
    </React.Fragment>
    )
  }
}
