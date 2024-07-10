import React, { Suspense, useState } from 'react';
import { useDispatch } from 'react-redux';
//import { loginUser } from '../redux/action/authActions';
import { Outlet, useNavigate } from 'react-router-dom';
import { loginUser } from '../redux/actions/action';
import { Nav, NavLink } from 'react-bootstrap';

const LoginForm = () => {
    
const dispatch = useDispatch();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const navigate=useNavigate();
const handleLogin = async () => {
    
const credentials = { email, password };

const loginSuccess = await dispatch(loginUser(credentials));
window.sessionStorage.setItem("login", loginSuccess)
console.log(loginSuccess);
if (loginSuccess) {
// Perform navigation here, you can use react-router-dom's useHistory
// or any other navigation method you are using in your project
navigate('/')
alert('Login successful');
window.location.reload();
} else {
// Handle login failure
alert('please enter correct credential');
}
};
return (
<>
{/* <div className="form-outline mb-4">
    <input type="email" id="form2Example1" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
    <label className="form-label" for="form2Example1">Email address</label>
  </div>
  <div className="form-outline mb-4">
    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="form2Example2" className="form-control" />
    <label className="form-label" for="form2Example2">Password</label>
  </div>
<button onClick={handleLogin}>Sign In</button> */}
<section className="vh-100" style={{backgroundColor:"#508bfc"}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card shadow-2-strong" style={{borderRadius: "1rem"}}>
          <div className="card-body p-5 text-center">

            <h3 className="mb-3">Sign in</h3>

            <div className="form-outline mb-1.5">
              <input type="email" id="typeEmailX-2" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control form-control-lg" />
              <label className="form-label" for="typeEmailX-2">Email</label>
            </div>

            <div className="form-outline mb-2">
              <input type="password" id="typePasswordX-2" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control form-control-lg" />
              <label className="form-label" for="typePasswordX-2">Password</label>
            </div>
           
            <div className="form-check d-flex justify-content-start mb-4">
              <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
              <label className="form-check-label" for="form1Example3"> Remember password </label>
            </div>

            <button className="btn btn-primary btn-lg btn-block" onClick={handleLogin} type="submit">Login</button>
            
            <hr className="my-4"/>
<a href='/signup' className="btn btn-lg btn-block btn-primary mb-2">SignUP</a>
            
            <button className="btn btn-lg btn-block btn-primary mb-2" style={{backgroundColor:"#3b5998"}}
              type="submit"><i className="fab fa-facebook-f me-2"></i>Sign in with facebook</button>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</>
);
};
export default LoginForm;