import React, {useState, useEffect} from 'react'
import './Pagination.css'
function Pagination() {
    
    const [products, setProducts]=useState([])
    const [page, setPage]=useState(1)
const PRODUCTS_PER_PAGE=10;
useEffect(()=>{
const fetchProducts=async ()=>{
try{
const response=await fetch("https://dummyjson.com/products?limit=100");
const data=await response.json()
setProducts(data.products || [])
}
catch(error){
    console.error("Fetch failed", error);
}
}
fetchProducts()
})
const start_index=(page-1)*PRODUCTS_PER_PAGE;
const end_index=start_index+PRODUCTS_PER_PAGE;
const total_pages=Math.ceil(products.length/PRODUCTS_PER_PAGE)
const pageNumbers=[]
for(let i=0;i<total_pages;i++)
{
    pageNumbers.push(i);
}
  return (
<div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
<div >
    {
        products.slice(start_index, end_index).map((image)=>(
            <div>
<img src={image.thumbnail} alt={image.title}></img>
<p>{image.title}</p>
</div>
        ))
    }

</div>
< div className='pagination'>
    <button onClick={()=>setPage(page-1)}>
        Previous
    </button>
    <div>
    {
        pageNumbers.map((num)=>(
<button key={num+1} onClick={()=>setPage(num+1)}>{num+1}</button>
        ))
    }
    </div>
    <button onClick={()=>setPage(page+1)}>
        Next
    </button>
</div>
    </div>
  );
}

export default Pagination;
