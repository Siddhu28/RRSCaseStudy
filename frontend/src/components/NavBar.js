import React, { Component,useContext } from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {UserContext} from '../App'
import signOutIcon from "../../src/resources/log-out.svg";

import { BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";


//Importing Images


//Importing Components

import Logout from './logout';
import navImage from '../../src/resources/navnew3.jpg'

import axios from 'axios';
//import {reducer, initialState} from '../src/reducer.js/UseReducer'



 class  NavBar extends Component {
  // state={};
  // componentDidMount(){
  //  //axios.get('http://localhost:8682/auth')
  //  const config={
  //    headers: {
  //     Authorization: 'Bearer '+ localStorage.getItem('token'),
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  //    }
  //  };
  //  axios.get('http://localhost:8682/dashboard',config).then(
  //    res=>{
  //      this.setState({
  //        user: res.data
  //      })
  //      console.log(res)
  //    },
  //    err=>
  //    {
  //      console.log(err)
  //    }
  //  )
  // }
  
  render(){
    let button;
    if(this.props.user){
      button=(
      <ul>
     <li><a  href="/">Home</a></li>
      <li><a  href="TrainList">TrainList</a></li>
      <li><a  href="Booking">Booking</a></li>
      <li><a href="/" onClick={Logout}>Logout</a></li>
     {/* <li><Link to={'/'} className="nav-link" onClick={Logout}></Link></li> */}
  </ul>
  )
    }
    else{
      button= (
        <ul>
                <li><a  href="/">Home</a></li>
                <li><a  href="TrainList">TrainList</a></li>
                <li><a href='/adminSignIn'>Admin</a></li>
              
               {/* <li><Link to='/' className="nav-link" onClick={Logout}><img src={logout} style={{height:50}}/></Link></li> */}
               <li><a href='/Login'>Login</a></li>
               <li className="navbar-item">
                {/* <Link to="/" onClick={Logout} className="nav-link">
                  <img src={signOutIcon} alt="signOutIcon" />
                </Link> */}
              </li>
               
            </ul>
      )
    }
        return (
         
            
    <div className="wrap">
            <nav>
            <img src="https://cdn-icons-png.flaticon.com/128/713/713309.png"  width="100" height="70"/>
      <label className="logo">Railway Reservation System</label>
      {/* <ul>
        <li><a  href="/">Home</a></li>
        <li><a  href="TrainList">TrainList</a></li>
        <li><a  href="Booking">Booking</a></li>
        <li><a href='/Login'>Login</a></li>
        <li><a href="/" onClick={Logout}>Logout</a></li>
        <li><a  href="adminSignIn">Admin</a></li> */}
        {button}

        
        
      {/* </ul> */}
     </nav>

      </div>
        )
      }
}

export default NavBar