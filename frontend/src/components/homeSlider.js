import axios from 'axios'
import React, { Component } from 'react'


export class homeSlider extends Component {
  componentDidMount(){
    const config ={
      headers:{
        Authorization : 'Bearer' + localStorage.getItem('token')
      }
    }
  }

  render() {
    return (
      <section>
        {/* <br></br><br></br>
      <div class="abc">
	      <div class="box">
        
        <p>hieee from home</p>
        </div>
        <div class="box"></div>
      </div> */}
    
      <div class="container">
        <div class="box">
          
          <div class="content"></div>
          <h3>About us</h3>
          <p>
The railway reservation system facilitates the passengers to enquiry about the trains available on the basis of source and destination, booking and cancellation of tickets, enquiry about the status of the booked ticket, etc. ... It is the computerized system of reserving the seats of train seats in advance.</p>
<a href="https://www.irctc.com/about.html"> Read More</a>
        </div>
      
      </div>
    </section>
     
      
    )
  }
}

export default homeSlider
