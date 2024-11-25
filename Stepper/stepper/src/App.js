import logo from './logo.svg';
import './App.css';
import Stepper from './Stepper'
import { Component } from 'react';

function App() {
  const CHECKOUT_STEPS=[
    {
      name:"Customer Info",
      Component:()=><div>Provide your contact details</div>
    },
    {
      name:"Shipping Info",
      Component:()=><div>Provide your shipping details</div>
    },
    {
      name: "Payment",
      Component: () => <div>Complete payment for your order.</div>
    }
  ]
  return (
    <div >
      <Stepper stepsConfig={CHECKOUT_STEPS}>

      </Stepper>
    </div>
  );
}

export default App;
