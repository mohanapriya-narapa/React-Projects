import React,{useState} from 'react'
import './stepper.css'
function CheckoutStepper({stepsConfig}) {
    const [currentStep, setCurrentStep]=useState(1); 
    let ActiveComponent = null;
    if (stepsConfig[currentStep - 1]) {
      ActiveComponent = stepsConfig[currentStep - 1].Component;
    }
  
    const [isComplete, setComplete]=useState(false);
    if(!stepsConfig.length){
        return <></>
    }
    const handleNext=()=>{
setCurrentStep((prevStep)=>{
    if(prevStep===stepsConfig.length)
    {
        setComplete(true)
        return prevStep
    }
    return prevStep+1
})
    }

  return (
    <>
    <div className='stepper'>
   { stepsConfig.map((step,index)=>(
  <div className={`step ${currentStep==index+1?"active":""}`} key={step.name}>
  <div className='step-number'>{index+1} </div>
  <div className='step-name'> {step.name} </div>
    </div>  
   ))
}

<div className='progress-bar'></div>
    </div>
    <div className='activeComp'>
    <div >
        <ActiveComponent></ActiveComponent>
    </div>
    <button className='next-button' onClick={handleNext}>Next</button>
    </div>
    </>
  );
}

export default CheckoutStepper;
