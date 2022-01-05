import axios from 'axios';
import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import "../../src/style.module.css/login.css"
// import email from '../../src/resources/email.png'
// import pass from '../../src/resources/pass.png'
import App from '../App';

export class LogInCls extends Component {
    handleSubmit=e=>{
        e.preventDefault();
        // <Redirect to={'/trainlist'} exact component={App}/>

        const data={
            email:this.email,
            password: this.password
        }

        axios.post("auth",data)
        .then(res=>{
            // alert('Your Logged In')
            sessionStorage.setItem('token',res.data.token)
            console.log(res)
            this.props.history.push(`/`);
            window.location.reload()
            
          
            
        })
        .catch(err=>{
            alert('Your userID or password is Incorrect')
           
            console.log(err)

        })
    }
    render() {
        return (
            <section className="vh-30" style={{backgroundColor: "#9A616D"}}>
        <div className="container" >
          {/* <div className="row d-flex justify-content-center align-items-center h-20"> */}
            <div className="col col-xl-1">
              <div className="card"  style={{ borderRadius: "1rem", width:"600px"}}>
                <div className="row g-0">
                  <div className="col-md-2 col-lg-3 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      className="img-fluid" style={{borderRadius: "1rem 0 0 1rem", height:"100%", width:"2000px"}}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
      
                    <form onSubmit={this.handleSubmit}>
      
                        {/* <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-3" style={{color: "#ff6219"}}></i>
                          <span className="h1 fw-bold mb-0">Logo</span>
                        </div> */}
                        <center>
                        <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: "1px"}}>Sign into your account</h5>
      
                        <div className="form-outline mb-4">
                        <input type="email" name="email"  placeholder="Enter Email" onChange={e=>this.email=e.target.value}/>

                          {/* <label className="form-label" for="form2Example17">email address</label> */}
                        </div>
      
                        <div className="form-outline mb-4">
                          {/* <Field type="password" id="form2Example27" className="form-control form-control-lg" placeholder="password" name="password" /> */}
                          {/* <label className="form-label" for="form2Example27">Password</label> */}
                          <input type="password" name="password" placeholder="Enter password" onChange={e=> this.password=e.target.value}/>
                        </div>
                        </center>
                        <div className="pt-1 mb-4">
                            <center>
                          <button className="btn btn-dark btn-lg btn-block" onClick={()=>{}} type="submit" style={{minWidth:30}}>Login</button>
                          &nbsp;
                          </center>
                        </div>
      
                        <center>
                        <p className="mb-5 pb-lg-2" style={{color: "#393f81"}}>Don't have an account? < a href="/SignUp" style={{color:"#393f81"}}>Register here</a></p>
                        </center>
                      </form>
      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* </div> */}
      </section>
        )
    }
}

export default LogInCls