import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Button, Box, Grid2, Typography} from '@mui/material';

function App() {
  const [products, setProducts]=useState([]);
  const [page, setPage]=useState(1);
  const PRODUCTS_PER_PAGE=10;

useEffect(()=>{
axios.get('https://dummyjson.com/products?limit=100')
.then(res=>setProducts(res.data.products || []))
.catch(err=>console.error("fetch failed",err));
},[])
const start_index=(page-1)*PRODUCTS_PER_PAGE;
const end_index=start_index+PRODUCTS_PER_PAGE;
const total_pages=Math.ceil(products.length/PRODUCTS_PER_PAGE);
const pageNumbers=[];
for(let i=1;i<=total_pages;i++)
{
  pageNumbers.push(i);
}

  return (
   <Box sx={{p:3, display: 'flex', justifyContent: 'center',  flexDirection:"column", alignItems:"center"}}>
    <Box sx={{ width: '60%' }}>
<Grid2 Container justifyContent="center">
{
  products.slice(start_index, end_index).map(
    (prod)=>(
      <Grid2 item key={prod.id} xs={12} sm={6} md={4} lg={3}>
<Box sx={{ borderRadius: 2, boxShadow: 3,  display: 'flex', flexDirection: 'column',alignItems: 'center',}}>
<img src={ prod.thumbnail} alt={prod.title}    style={{ height: '150px', width: 'auto', borderRadius: '8px' }}>
</img>
<Typography>
  {prod.title}
</Typography>
</Box>
        </Grid2>
    )
  )
}
</Grid2>
   </Box>
   <Box sx={{display:'flex',  justifyContent:'center' }}>
   <Button disabled={page === 1} onClick={()=>setPage(page-1)}>
  Previous
  </Button>
{pageNumbers.map((num)=>(
<Button key={num} onClick={()=>setPage(num)}>
{num}
</Button>
))}

<Button disabled={page === total_pages} onClick={()=>setPage(page+1)}>
  Next
</Button>
   </Box>
   </Box>
  );
}

export default App;
