import React,{useState} from 'react'
import AutoComplete from './AutoComplete';

function App() {
  const [selectedItem, setSelectedItem]=useState(null);
  const staticData=["Apple",
    "Banana",
    "Cherry",
    "Date",
    "Grape",
    "Kiwi",
    "Lemon",
    "Mango",
    "Orange",
    "Peach",
    "Pineapple",
    "Strawberry",
    "Watermelon",
]
const fetchSuggestions=()=>{

}
  return (
    <div className="App">
      <h1>Autocomplete Component</h1>
<AutoComplete staticData={staticData} fetchSuggestions={fetchSuggestions} placeholder="search fruits..." onSelect={(item)=>setSelectedItem(item)}>

</AutoComplete>
    </div>
  );
}

export default App;
