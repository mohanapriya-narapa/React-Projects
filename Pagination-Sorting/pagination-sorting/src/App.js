import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, {useEffect,useState} from 'react'

function App() {
  const [data, setData]=useState([]);
  const[currentPage, setCurrentPage]=useState('1');
  const[loading, setLoading]=useState(false);
  const[error, setError]=useState(null);
  const [sortOrder, setSortOrder]=useState('asc');

useEffect(()=>{
  const fetchData = async ()=>{
setLoading(true);
try{
const response=await axios.get('https://jsonplaceholder.typicode.com/posts');
setData(response.data);
}
catch{
  setError("Error fetching data")
}setLoading(false);
  }
  fetchData();
},[])
const PRODUCTS_PER_PAGE=10;
const start_index= (currentPage-1)*PRODUCTS_PER_PAGE;
const end_index=start_index+PRODUCTS_PER_PAGE;
const total_pages=Math.ceil(data.length/PRODUCTS_PER_PAGE);
const pageNumbers=[];
for(let i=1;i<=total_pages;i++)
{
  pageNumbers.push(i);
}
const currentRows=data.slice(start_index,end_index );
const sortByTitle=()=>{
const sortData=[...data].sort((a,b)=>{
  if(sortOrder==='asc')
  {
    return a.title>b.title?1:-1;
  }
  else{
    return a.title<b.title?1:-1;
  }
})
setData(sortData)
setSortOrder(sortOrder==='asc'?'desc':'asc');

}

if (loading) return <div>Loading...</div>;
if (error) return <div>{error}</div>;
  return (
    <div className="App">
     <table>
<thead>
  <tr>
    <th>ID</th>
    <th onClick={sortByTitle}>
              Title {sortOrder === 'asc' ? '🔼' : '🔽'}
            </th>
    <th>Body</th>
  </tr>
</thead>
<tbody>
  {
    currentRows.map((item)=>(
      <tr key={item.id}>
<td>
{item.id}
</td>
<td>
  {item.title}
</td>
<td>
  {item.body}
</td>
      </tr>
    ))
  }
</tbody>
     </table>
     <div>
      {
        pageNumbers.map((number)=>{
          return <button key={number} onClick={()=>setCurrentPage(number)}>
            {number}
          </button>
        }

        )
      }
     </div>
    </div>
  );
}

export default App;
