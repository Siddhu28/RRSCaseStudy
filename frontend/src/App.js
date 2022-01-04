import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import TrainList from "./components/trainlist";
import axios from 'axios';
import  "./style.module.css/style.css";
import NavBar from './components/NavBar';



//Importing Images
import navImage from './resources/navImage.jpg'
import trainicon from './resources/trainicon.png'
 import homeSlider from './components/homeSlider';
import adminSignIn from './components/adminSignIn';
import createTrain from './components/createTrain';
import deleteTrain from "./components/deleteTrain";
import TicketBooking from "./components/TicketBooking";
import PaymentMethod from "./components/PaymentMethod";
import PaytmPG from "./components/PaytmPG";
import SBIBankPG from "./components/SBIBankPG";
import ThankYouMessage from "./components/ThankYouMessage";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import LogInCls from './components/LoginCls';
import logout from './components/logout';
import {reducer,initialState} from '../src/reducer.js/UseReducer'

  
class App extends Component {
 
  //const isLoggedIn=sessionStorage.getItem('token')
  state={};
  componentDidMount(){
   //axios.get('http://localhost:8682/auth')
   const config={
     headers: {
      Authorization: 'Bearer '+ sessionStorage.getItem('token'),
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
     }
   };
   axios.get('dashboard',config).then(
     res=>{
       this.setState({
         user: res.data
       })
       console.log(res)
     },
     err=>
     {
       console.log(err)
     }
   )
  }
  render() {
 

  return (
    
    <Router>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <link rel="stylesheet" href="style.css"></link>
            <script src="https://kit.fontawesome.com/a076d05399.js" ></script>
      
    {/* <RenderMenu/> */}
    
    <NavBar user={this.state.user}/>
   

      {/* <div  className="navImage">
      <a href="">
        <img src={navImage}/>
      </a>
    </div> */}
  

    
    <Switch>
        <Route path="/" exact component={homeSlider} />
        <Route path="/trainlist" exact component={TrainList} />
        <Route path="/adminSignIn" exact component={adminSignIn} />
        <Route path="/addTrain" exact component={createTrain} />
        
        <Route path="/booking" exact component={TicketBooking} />
        <Route path="/payment" exact component={PaymentMethod} />
        <Route path="/submitPaymentDetail" exact component={PaytmPG} />
        <Route path="/sbipg" exact component={SBIBankPG} />
        <Route path="/thankyou" exact component={ThankYouMessage} />
        <Route path="/signUp" exact component={SignUp} />
        <Route path="/Login" exact component={LogInCls} />
        <Route path="/Logout" exact component={logout} />
        <Route path="/deleteTrain" exact component={deleteTrain} />

        </Switch>
        
        
        <div
        className="footer"
        style={{ backgroundColor: "#F0F8FF", width: 1260, height: 60 }}

        
      >
        <center>
          {" "}
          <div>
          <img src={trainicon} width="40" />{" "}
          <p><strong>Indian Railway Reservation System</strong></p>
           
          </div>{" "}
          <div style={{ color: "white" }}></div>

        
        </center>
        
        
      </div>
      
    </Router>
    
    
  );
}
}
export default App;
