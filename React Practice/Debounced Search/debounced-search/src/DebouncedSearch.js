import React, {useState, useEffect}from 'react'
import './App.css';
const debounce =function(fn,delay){
    let timer;
    return function(...args)
    {
clearTimeout(timer)
timer =setTimeout(()=>{
    fn(...args)
}, delay)
    }
}
function DebouncedSearch() {
    const [searchTerm, setSetSearchTerm]=useState("")
    const [results,setResults]=useState([])
    const [loading, setLoading]=useState(false)
    const fetchData=async(searchTerm)=>{
if(!searchTerm)
{
    setResults([])
    return;
}
setLoading(true)
try{
const response=await fetch(`https://jsonplaceholder.typicode.com/users?name_like=${searchTerm}`)
const data=await response.json()
setResults(data)
}
catch(error){

}
finally{
setLoading(false)
}
    }
const debouncedSearch=debounce(fetchData,500)
useEffect(()=>{
    debouncedSearch(searchTerm) 
},[searchTerm])
  return (
    <div>
<h1>Debounced Search</h1>
<input value={searchTerm} onChange={(e)=>setSetSearchTerm(e.target.value)}></input>
{loading && <p>Loading...</p>}
<ul>
{results.map((user)=>(
<li key={user.id}>{user.name}</li>
))}
</ul>
    </div>
  );
}

export default DebouncedSearch;
