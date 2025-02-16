import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import PersonalInfoForm from './components/PersonalInfoForm';
import "./app.css";
import PlanSelector from './components/PlanSelector';
import Addons from './components/Addons';
import Summary from './components/Summary';
import ThankYou from './components/Thankyou';

function App() {
  return (
    <Router>
   <Routes>
    <Route path='/' exact Component={PersonalInfoForm}/>
    <Route  path='/plan-selector' Component={PlanSelector}/>  
    <Route path='/Addons' Component={Addons}/>
    <Route path='/Summary' Component={Summary}/>
    <Route path='/ThankYou' Component={ThankYou}/>
   </Routes>
    </Router>
  );
}

export default App;