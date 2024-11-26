import React,{useState, useEffect} from 'react'
import JobPosting from './JobPosting';
const ITEMS_PER_PAGE = 6;
const API_ENDPOINT = "https://hacker-news.firebaseio.com/v0";
function JobBoard() {
    const [loading, setLoading] =useState(false)
    const [itemIds, setItemIds]=useState([])
    const [items, setItems]=useState([])
    const [currentPage, setCurrentPage]=useState(0)
    useEffect(()=>{
const intializeJobBoard=async ()=>{
setLoading(true)
const response= await fetch(`${API_ENDPOINT}/jobstories.json`)
const jobIds=await response.json()
setItemIds(jobIds)
const intialItems=await fetchItems(jobIds,0)
setItems(intialItems)
setLoading(false)
}
intializeJobBoard();
    },[])
    const fetchItems=(jobIds, page)=>{
        const start=page*ITEMS_PER_PAGE;
        const end=start+ITEMS_PER_PAGE;
        const itemIdsOfPage=jobIds.slice(start,end)
        return Promise.all(
            itemIdsOfPage.map((itemId)=>
            fetch(`${API_ENDPOINT}/item/${itemId}.json`).then((response)=>response.json()))
        )
    }
    const handleLoadButton=async ()=>{
        setLoading(true)
        const newItems=await fetchItems(itemIds, currentPage+1)
        setItems((prevItems)=>[...prevItems, ...newItems])
        setCurrentPage((prevPage)=>prevPage+1)
        setLoading(false)

    }
  return (
    <div>
<h1> Job Board</h1>
<div>
    {
        items.map((item)=>(
            <JobPosting key ={item.id} item ={item}></JobPosting>
        ))
    }
</div>
{
    loading?(<p>loading..</p>):(
<button onClick={handleLoadButton}>Load More</button>
    )

}
    </div>
  );
}

export default JobBoard;
