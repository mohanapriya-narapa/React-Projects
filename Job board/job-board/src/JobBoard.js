import React, { useEffect, useState } from 'react'
import JobPosting from './JobPosting'

const ITEMS_PER_PAGE = 6;
const API_ENDPOINT = "https://hacker-news.firebaseio.com/v0";

function JobBoard() {
    const [items, setItems] = useState([]);    
    const [itemIds, setItemIds] = useState([]);    
    const [currentPage, setCurrentPage] = useState(0);
    const [loading, setLoading] = useState(false);  
    useEffect(() => {
        async function fetchJobIds() {
          const response = await fetch(`${API_ENDPOINT}/jobstories.json`); // API call to get job IDs
          const data = await response.json();        // Convert response to JSON
          setItemIds(data);                          // Store job IDs in state for pagination
        }
        fetchJobIds();
      }, []);   
      async function fetchItems() {
        setLoading(true);                           
        const start = currentPage * ITEMS_PER_PAGE; 
        const end = start + ITEMS_PER_PAGE;   
        const itemIdsForPage = itemIds.slice(start, end); 
        const itemsForPage = await Promise.all(
          itemIdsForPage.map((itemId) =>
            fetch(`${API_ENDPOINT}/item/${itemId}.json`).then((response) => response.json())
          )
        );
        setItems((prevItems) => [...prevItems, ...itemsForPage]); 
        setLoading(false);                        
        setCurrentPage((prevPage) => prevPage + 1);
        console.log(items)
      }
      useEffect(() => {
        if (itemIds.length > 0) fetchItems(); 
        console.log(itemIds)
      }, [itemIds]);

return (<div>

<h1>Hacker News Job Board</h1>
    <div>
        {
            items.map((item)=>(<>
              <JobPosting key={item.id} {...item} ></JobPosting>
         
              </>
            ))
        }
    </div>
    {loading ? <p>Loading...</p> : (
                <button onClick={fetchItems} disabled={loading}>
                    Load More
                </button>
            )}

</div>);
}

export default JobBoard;