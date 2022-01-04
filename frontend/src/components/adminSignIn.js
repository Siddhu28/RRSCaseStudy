import React, { Component, useContext, useState, Fragment } from "react";
import { Link} from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { useHistory, useLocation } from "react-router-dom";
import * as Yup from "yup";
import _get from "lodash.get";
import adm from "../resources/adm.jpg";
import style from "../../src/style.module.css/signIn.style.css";




const LoginSchema = Yup.object().shape({
  password: Yup.string().required("Password is required!"),
  username: Yup.string().required("username is required!")
});

const Login = () => { 
    const [username, setUsername] = useState('');
    const [password,setPassword] = useState('')
    const history = useHistory();
    const location = useLocation();
    const fromUrl = _get(location, "state.from.pathname");
    const signInSuccess = (userData) => {
        if (fromUrl) {
          history.push(fromUrl);
        } else {
          history.push("/addTrain");
        }
      };
      
        const login = (userData) => {
            fetch("http://localhost:9050/auth", {
              "method": "POST",
              "headers": {
                "content-type": "application/json",
                "accept": "application/json",
                "Access-Control-Allow-Origin": "*"
              },
              "body": JSON.stringify({
                username: userData.username,
                password: userData.password
              })
            })
            .then(response => response.json())
            .then(response => {
              if(response.error){
               alert('your userId and password is not correct');
              }else {
                const userData = {
                  token:response,
                  name:username
              } 
               signInSuccess(userData)
               console.log(response)
              }
            })
            .catch(err => {
              console.log(err);
            });
        }
        return (
            <Formik
            initialValues={{
              username: "",
              password: ""
            }}
            validationSchema={LoginSchema}
            onSubmit={async (values, { resetForm }) => {
              try {
                const userData = { ...values };
                resetForm();
                login(userData);
              } catch (err) {
                console.error(err);
              }
            }}
          >
            {() => (
              
              <Form>        
          <section className="vh-1" style={{backgroundColor:"lightskyblue"}}>
            
            <div className="container py-4 h-10">
              
              <div className="row d-flex justify-content-center align-items-center ">
                
                 {/* <div className="col-12 col-md-8 col-lg-6 col-xl-5"> */}
                    <div className="card shadow-2-strong" style={{borderRadius: "1rem", width:"500px"}} >
                     <div className="card-body p-5 text-center">
                     

            <h3 className="mb-5">Admin Sign in</h3>

           
            <div className="form-outline mb-4">
            {/* <label className="form-label" for="typeEmailX-2">UserName</label>   */}
              <Field type="text" name="username" className="form-control form-control-lg" placeholder="Enter Admin User Name" />
              
            </div>

            <div className="form-outline mb-4">
            {/* <label className="form-label" for="typePasswordX-2">Password</label> */}
              <Field type="password" name="password" className="form-control form-control-lg" placeholder="Enter password"/>
              
            </div>

            

{/*             
            <div className="form-check d-flex justify-content-start mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="form1Example3"
              />
              <label className="form-check-label" for="form1Example3"> Remember password </label>
            </div> */}

            <button className="btn btn-primary btn-lg btn-block" onClick={()=>{}}   type="submit">Login</button>

            <hr className="my-4"></hr>
          </div>
        </div>
      </div>
    </div>
  {/* </div> */}
</section>    
</Form>
          )}
          </Formik>
        );
          
      
    }
    export default Login;