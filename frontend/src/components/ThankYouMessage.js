import React, { Component } from 'react'

export class ThankYouMessage extends Component {
    render() {
        return (
            <section>
            <div>
               <div class="jumbotron text-center" >
  <h1 class="display-3" style={{color:"white"}}>Thank You!</h1>
  <p class="lead" style={{color:"white"}}><strong>Please check your email,</strong> Booking details will be mailed you soon....</p>
  <hr/>
  
  <p class="lead">
    <a class="btn btn-primary btn-sm" href="/" role="button" style={{color:"white"}}>Continue to homepage</a>
  </p>
</div>
            </div>
            </section>
        )
    }
}

export default ThankYouMessage
