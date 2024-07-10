import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signupUser } from '../redux/actions/action';
//import { signupUser } from '../redux/action/authActions';
//import { signupUser } from '../redux/actions/authActions';
const SignupForm = () => {
const dispatch = useDispatch();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const handleSignup = () => {
const userData = { email, password };
dispatch(signupUser(userData));
};
return (
    <section className="vh-100" style={{backgroundColor:"#508bfc"}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card shadow-2-strong" style={{borderRadius: "1rem"}}>
          <div className="card-body p-5 text-center">

            <h3 className="mb-3">Sign UP</h3>

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

            <button className="btn btn-primary btn-lg btn-block" onClick={handleSignup} type="submit">Login</button>
            

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
// {/* <div>
// <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
// <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
// <button onClick={handleSignup}>Sign Up</button>
// </div> */}
);
};
export default SignupForm;