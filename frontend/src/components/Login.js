// import React, { Component, useContext, useState } from "react";
// import { Link} from "react-router-dom";
// import { Formik, Form, Field } from "formik";
// import { useHistory, useLocation } from "react-router-dom";
// import * as Yup from "yup";
// import _get from "lodash.get";
// import { UserContext } from "../App";




// const LoginSchema = Yup.object().shape({
//   password: Yup.string().required("Password is required!"),
//   email: Yup.string().required("email is required!")
// });

// const Login = () => { 
//     const {state, dispatch} = useContext(UserContext)
//     const [email, setemail] = useState('');
//     const [password,setPassword] = useState('')
//     const history = useHistory();
//     const location = useLocation();
//     const fromUrl = _get(location, "state.from.pathname");
//     const signInSuccess = (userData) => {
//         if (fromUrl) {
//           history.push(fromUrl);
//         } else {
//           dispatch({type:"USER", payload: true})
//           alert("You are Successfully Logged In")
//           history.push("/");
//         }
//       };
      
//         const login = (userData) => {
//             fetch("http://localhost:9060/auth", {
//               "method": "POST",
//               "headers": {
//                 "content-type": "application/json",
//                 "accept": "application/json",
//                 "Access-Control-Allow-Origin": "*"
//               },
//               "body": JSON.stringify({
//                 email: userData.email,
//                 password: userData.password
//               })
//             })
//             .then(response => response.json())
//             .then(response => {
//               if(response.error){
//                alert('your userId and password is not correct');
//               }else {
//                 const userData = {
//                   token:response,
//                   name:email
//               } 
//               sessionStorage.setItem('token',JSON.stringify(userData.token))
//                signInSuccess(userData)
//                console.log(response)
//               }
//             })
//             .catch(err => {
//               console.log(err);
//             });
//         }
//     return (
//       <Formik
//       initialValues={{
//         email: "",
//         password: ""
//       }}
//       validationSchema={LoginSchema}
//       onSubmit={async (values, { resetForm }) => {
//         try {
//           const userData = { ...values };
//           resetForm();
//           login(userData);
//         } catch (err) {
//           console.error(err);
//         }
//       }}
//     >
//       {() => (
//         <section className="vh-50" style={{backgroundColor: "#9A616D"}}>
//         <div className="container py-5 h-50">
//           <div className="row d-flex justify-content-center align-items-center h-50">
//             <div className="col col-xl-10">
//               <div className="card" style={{borderRadius: "1rem"}}>
//                 <div className="row g-0">
//                   <div className="col-md-6 col-lg-5 d-none d-md-block">
//                     <img
//                       src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
//                       alt="login form"
//                       className="img-fluid" style={{borderRadius: "1rem 0 0 1rem"}}
//                     />
//                   </div>
//                   <div className="col-md-6 col-lg-7 d-flex align-items-center">
//                     <div className="card-body p-4 p-lg-5 text-black">
      
//                       <Form>
      
//                         {/* <div className="d-flex align-items-center mb-3 pb-1">
//                           <i className="fas fa-cubes fa-2x me-3" style={{color: "#ff6219"}}></i>
//                           <span className="h1 fw-bold mb-0">Logo</span>
//                         </div> */}
      
//                         <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: "1px"}}>Sign into your account</h5>
      
//                         <div className="form-outline mb-4">
//                           <Field type="email" id="form2Example17" className="form-control form-control-lg" placeholder="email" name="email" />
//                           {/* <label className="form-label" for="form2Example17">email address</label> */}
//                         </div>
      
//                         <div className="form-outline mb-4">
//                           <Field type="password" id="form2Example27" className="form-control form-control-lg" placeholder="password" name="password" />
//                           {/* <label className="form-label" for="form2Example27">Password</label> */}
//                         </div>
      
//                         <div className="pt-1 mb-4">
//                             <center>
//                           <button className="btn btn-dark btn-lg btn-block" onClick={()=>{}} type="submit" style={{minWidth:30}}>Login</button>
//                           &nbsp;
//                           </center>
//                         </div>
      
//                         <a className="small text-muted" href="#!">Forgot password?</a>
//                         <p className="mb-5 pb-lg-2" style={{color: "#393f81"}}>Don't have an account? < a href="/SignUp" style={{color:"#393f81"}}>Register here</a></p>
//                         <a href="#!" className="small text-muted">Terms of use.</a>
//                         <a href="#!" className="small text-muted">Privacy policy</a>
//                       </Form>
      
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>


//        )}
//     </Formik>
//   );
//     }

//     export default Login;