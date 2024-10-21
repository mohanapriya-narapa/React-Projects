import React , {useEffect, useState} from 'react'
import axios from 'axios';

const debounce=function(fn, delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer=setTimeout(()=>{
            fn(...args);
        }, delay)
    };
};
function DebouncedSearchComponent() {
    const [searchTerm, setSearchTerm]=useState("");
    const [results, setResults]=useState([]);
    const [loading, setLoading]=useState(false);

const fetchData = async (searchTerm) => {
    if (!searchTerm) {
      setResults([]); // Clear results if searchTerm is empty
      return;
    }

    setLoading(true); // Show loading state
    try {
      // Await the Axios request to fetch data
      const response = await axios.get('https://jsonplaceholder.typicode.com/users', {
        params: { name_like: searchTerm }, // Pass searchTerm as a query parameter
      });

      setResults(response.data); // Set the results from the API response
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false); // Set loading to false after fetching completes
    }
  };
    const debouncedFetchData = debounce(fetchData, 500);
    useEffect(()=>{
        debouncedFetchData(searchTerm);
    },[searchTerm]);
  return (
    <div>
        <h1>Debounced Search</h1>
        <input type="text" placeholder="Search for users..." value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} >
        </input>
       {loading && <p> Loading...</p>}
       <ul>
        {
            results.map((user)=>(<li key={user.id}>{user.name}</li>))
        }
       </ul>
    </div>
  )
}

export default DebouncedSearchComponent