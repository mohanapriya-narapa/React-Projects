import React,{useState} from 'react'
function FlightBooking() {
    const [flightType, setFlightType]=useState("one-way");
    const [departureDate, setDepartureDate]=useState(new Date().toISOString().split('T')[0])
    const [returnDate, setReturnDate]=useState(new Date().toISOString().split('T')[0])
    const handleSubmit=async(e)=>{
e.preventDefault();
try{
const data={flightType,departureDate,returnDate}
const response=await fetch("https://your-backend-url.com/api/submit-flight", {
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(data)
})

    const result=await response.json()

}
catch{

}
    }
  return (
    <div className="App">
<form onSubmit={handleSubmit}>
    <select value={flightType} onChange={(e)=>{setFlightType(e.target.value)}}>
<option value="one-way">
One way Flight
</option>
<option value="return">
Return Flight
</option>
    </select>
    <input type="date" value={departureDate} onChange= {(e)=>{setDepartureDate(e.target.value)}}>
    </input>
    <input  type="date" value={returnDate} onChange={(e)=>{setReturnDate(e.target.value)}}>
    </input>
    <button type="submit">Submit</button>
</form>
    </div>
  );
}

export default FlightBooking;
