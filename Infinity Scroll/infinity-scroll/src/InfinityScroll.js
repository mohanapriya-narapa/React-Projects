import React, {useEffect,useState} from 'react'
const ACCESS_KEY = "YOUR_UNSPLASH_ACCESS_KEY";
const ITEMS_PER_PAGE = 10;
function InfinityScroll() {
    const [images, setImages]=useState([]);
    const [page, setPage]=useState([]);
    const [loading, setLoading]=useState(false);

 const fetchImages = async ()=>{
    setLoading(true);
    try{
const response=await fetch(`https://api.unsplash.com/photos?page=${page}&per_page=${ITEMS_PER_PAGE}&client_id=${ACCESS_KEY}`)
const data= await response.json();
setImages((prevImages)=>[...prevImages, data]);
    }
    catch(error){
console.log(error)
    }
    finally{
        setLoading(false); 
    }
 }   

 useEffect(()=>{
    fetchImages();
 },[page])

 const handScroll=()=>{
    if(window.innerHeight + window.scrollY>= document.body.offsetHeight-500 && !loading)
    {
        setPage((prevPage)=>prevPage+1);
    }
 }
 useEffect(()=>{
    window.addEventListener("scroll", handScroll)
    return ()=>window.removeEventListener("scroll", handScroll);

 },[loading])


  return (
    <div className="App">
     <h1>Image Gallery</h1>
     <div>
        {
            images.map((image)=>(
                <div key ={image.id}>
                    <image src={image.urls.small}  alt={image.alt_description} ></image>
                     </div>
            )

            )
        }
     </div>
    </div>
  );
}

export default InfinityScroll;
