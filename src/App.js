import { Route, Routes } from 'react-router-dom';
import './App.css';
import Business from './components/business-activation/business/business';
// import Payment from './components/payments/payment/payment';
import Dashboard from './components/dashboard/dashboard';
import Login from './routes/login/login';
import OnboardPageOne from './routes/onboarding/onboard-pageone';
import OnboardPageTwo from './routes/onboarding/onboard-pagetwo';
import OnboardPageThree from './routes/onboarding/onboard-three/onboard-pagethree';
// import TransNav from './routes/trans-nav/trans-nav';  

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/'  element={<Login />} />
        <Route path='/login'  element={<Login />} />
        <Route path='/business-info' element={<Business/>} />
        <Route path='/verify-business' element={<Business/>} />
        <Route path='/owners-info' element={<Business/>} />
        <Route path='/directors-info' element={<Business/>} />
        <Route path='/onboarding-one' element={<OnboardPageOne/>}/>
        <Route path='/onboarding-two' element={<OnboardPageTwo/>}/>
        <Route path='/onboarding-three' element={<OnboardPageThree/>}/>
      </Routes>
      <Dashboard />
    </div>
  );
}

export default App;
