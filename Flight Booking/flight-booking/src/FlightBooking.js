import React, {useState} from 'react'


function FlightBooking() {
    const [flightType, setFlightType]=useState("one-Way");
    const [departureDate, setDepartureDate]=useState(new Date().toISOString().split('T')[0])
    const [returnDate, setReturnDate]=useState(new Date().toISOString().split('T')[0])
    const [message,setMessage]=useState("");
const handleSubmit=()=>{
setMessage("you have booked flight");
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
<input type="date" value={departureDate} onChange={(e)=>{setDepartureDate(e.target.value)}}></input>
<input tyepe="date" value={returnDate} onChange={(e)=>{setReturnDate(e.target.value)}}></input>
<button type="submit"> Submit</button>
      </form>
      { message && <p> {message} </p>}
    </div>
  );
}

export default FlightBooking;
