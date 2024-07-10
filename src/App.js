import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CardsDetails from './components/CardsDetails';
//import Cards from './components/Cards';
import {Routes,Route} from "react-router-dom";
// import Home  from './components/Home';
// import EmpListing from './components/EmpListing';
// import EmpDetail from './components/EmpDetail';
// import EmpEdit from './components/EmpEdit';
//import EmpCreate from './components/EmpCreate';
//import LoginForm from './components/LoginForm';
//import SignupForm from './components/SignUpForm';
import { Profile } from './components/Profile';
import React, {lazy ,Suspense} from 'react';
const Cards=lazy(()=>import('./components/Cards'))
const LoginForm=lazy(()=> import('./components/LoginForm'))
const SignupForm=lazy(()=> import('./components/SignUpForm'))
const EmpCreate=lazy(()=> import('./components/EmpCreate'))
const EmpEdit=lazy(()=> import('./components/EmpEdit'))
const Home=lazy(()=> import('./components/Home'))
const EmpDetail=lazy(()=> import('./components/EmpDetail'))
const EmpListing=lazy(()=> import('./components/EmpListing'))


const loggedIn = window.sessionStorage.getItem("login") == 'true';
function App() {
  return (
  <>
   <Header />
   <Suspense fallback={<h1>Loading....</h1>}>
   <Routes>
   <Route path='/profile' element={<Profile/>}/>
      <Route path='/login' element={<LoginForm/>}/>
      <Route path='/signup' element={<SignupForm/>}/>
      {
        loggedIn ? (
        <>

           <Route path='/cart/:id' element={<CardsDetails />} />
           <Route path='/Product' element={<Cards />} />
           <Route path='/employee/listing' element={<EmpListing />}></Route>
           <Route path='/employee/create' element={<EmpCreate />}></Route>
           <Route path='/employee/detail/:empid' element={<EmpDetail />}></Route>
           <Route path='/employee/edit/:empid' element={<EmpEdit />}></Route>
        </>
        ) : (<></>)
      }
     {/* <Route path='/Product' element={<Cards />} /> */}
     <Route path='/' element={<Home />} />
    
   </Routes>
   </Suspense>
  </>
  );
}

export default App;
