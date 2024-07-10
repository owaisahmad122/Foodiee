// Certainly! Let's extend the previous example to include a complete login and signup flow using Redux, Axios, and Redux Thunk.
// 1. **Create Redux Actions:**
// ```jsx
// // actions/authActions.js
// import axios from 'axios';
// export const login = (user) => ({
// type: 'LOGIN',
// payload: user,
// });
// export const signup = (user) => ({
// type: 'SIGNUP',
// payload: user,
// });
// export const loginUser = (credentials) => {
// return async (dispatch) => {
// try {
// const response = await axios.post('your-api-endpoint/login', credentials);
// dispatch(login(response.data));
// } catch (error) {
// // Handle login error
// }
// };
// };
// export const signupUser = (userData) => {
// return async (dispatch) => {
// try {
// const response = await axios.post('your-api-endpoint/signup', userData);
// dispatch(signup(response.data));
// } catch (error) {
// // Handle signup error
// }
// };
// };
// ```
// 2. **Update Redux Reducers:**
// ```jsx
// // reducers/authReducer.js
// const authReducer = (state = {}, action) => {
// switch (action.type) {
// case 'LOGIN':
// return { user: action.payload };
// case 'SIGNUP':
// return { user: action.payload };
// default:
// return state;
// }
// };
// export default authReducer;
// ```
// 3. **Create Signup and Login Components:**
// ```jsx
// // components/SignupForm.js
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { signupUser } from '../redux/actions/authActions';
// const SignupForm = () => {
// const dispatch = useDispatch();
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');
// const handleSignup = () => {
// const userData = { email, password };
// dispatch(signupUser(userData));
// };
// return (
// <div>
// <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
// <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
// <button onClick={handleSignup}>Sign Up</button>
// </div>
// );
// };
// export default SignupForm;
// ```
// ```jsx
// // components/          
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { loginUser } from '../redux/actions/authActions';
// const SigninForm = () => {
// const dispatch = useDispatch();
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');
// const handleLogin = () => {
// const credentials = { email, password };
// dispatch(loginUser(credentials));
// };
// return (
// <div>
// <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
// <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
// <button onClick={handleLogin}>Sign In</button>
// </div>
// );
// };
// export default SigninForm;
// ```
// 4. **Connect Components to Redux Store:**
// Make sure to connect your components to the Redux store. You can do this using the `connect` function from `react-redux` or using hooks like `useDispatch` and `useSelector`.
// 5. **Update Redux Store:**
// Ensure your Redux store is configured with `redux-thunk`:
// ```jsx
// // store.js
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers';
// const store = createStore(rootReducer, applyMiddleware(thunk));
// export default store;
// ```
// Now you have a complete setup with Redux, Axios, and Redux Thunk for handling login and signup in your React application. The components dispatch actions that trigger asynchronous operations and update the Redux store upon success.


<section className="vh-100" style="background-color: #508bfc;">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card shadow-2-strong" style="border-radius: 1rem;">
          <div className="card-body p-5 text-center">

            <h3 className="mb-5">Sign in</h3>

            <div className="form-outline mb-4">
              <input type="email" id="typeEmailX-2" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control form-control-lg" />
              <label className="form-label" for="typeEmailX-2">Email</label>
            </div>

            <div className="form-outline mb-4">
              <input type="password" id="typePasswordX-2" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control form-control-lg" />
              <label className="form-label" for="typePasswordX-2">Password</label>
            </div>

           
            <div className="form-check d-flex justify-content-start mb-4">
              <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
              <label className="form-check-label" for="form1Example3"> Remember password </label>
            </div>

            <button className="btn btn-primary btn-lg btn-block" onClick={handleLogin} type="submit">Login</button>

            <hr className="my-4">

            <button className="btn btn-lg btn-block btn-primary" style="background-color: #dd4b39;"
              type="submit"><i className="fab fa-google me-2"></i> Sign in with google</button>
            <button className="btn btn-lg btn-block btn-primary mb-2" style="background-color: #3b5998;"
              type="submit"><i className="fab fa-facebook-f me-2"></i>Sign in with facebook</button>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>