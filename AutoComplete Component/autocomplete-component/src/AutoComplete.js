import React,{useEffect, useState} from 'react'
function debounce(fn,delay){
    let timer;
    return function(...args)
    {
clearTimeout(timer)
timer=setTimeout(() => {
    fn(...args)
}, delay);
    }
}
function AutoComplete({staticData=[], fetchSuggestions, placeholder, onSelect=()=>{}}) {
    const [inputValue, setInputValue]=useState("")
const [suggestions,setSuggestions]=useState([])
const [loading, setLoading]=useState(false)
const handleInputChange=(event)=>{
    const value=event.target.value;
setInputValue(value);
if(value.length>1)
{
    getSuggestionsDebounced(value)
}
else{
    setSuggestions([])
}

}
const getSuggestions=async (query)=>{
setLoading(true)
let result=[]
try{
if(staticData.length)
{
    result=staticData.filter((item)=>item.toLowerCase().includes(query.toLowerCase()))
}
else if(fetchSuggestions)
{
    result=await fetchSuggestions(query);
}
}
catch{
result=[]
}
setSuggestions(result)
setLoading(false)
}
const handleSuggestionClick=(suggestion)=>{
    setInputValue(suggestion);
    onSelect(suggestion)
    setSuggestions([])
}
const getSuggestionsDebounced=debounce(getSuggestions, 500);

  return (
    <div>
<input type="text" value={inputValue} placeholder={placeholder} onChange={handleInputChange}></input>
{loading && <div>Loading ...</div>}
{
    suggestions.length>0 && (
        <ul>
            {
                suggestions.map((suggestion,index)=>(
                    <li key={index} onClick={()=>handleSuggestionClick(suggestion)}>
{suggestion}
                    </li>
                ))
            }
        </ul>
    )
}
    </div>
  );
}

export default AutoComplete;
