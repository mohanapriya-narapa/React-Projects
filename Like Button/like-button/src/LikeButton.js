import React, {useEffect, useState} from 'react'
function LikeButton() {
    const[liked, setLiked]=useState(false);
    const[loading, setLoading]=useState(false);
    const[errorMessage, setErrorMessage]=useState(null);
    const  handleLikeOnclick=async ()=>{
try{
    setLoading(true)
    setErrorMessage(null)
    const response =await fetch('https://www.greatfrontend.com/api/questions/like-button',{
     method:"POST",
     headers:{
        'Content-Type':'application/json'
     },
     body:JSON.stringify({
        action:liked?"unlike":"like"
     })
    })
    if(!response.ok)
    {
        const res=await response.json();
        setErrorMessage(res.message)
        return;
    }setLiked(!liked)
}
finally{
    setLoading(false)
}
}

  return (
    <div >
     <button disabled = {loading} onClick={handleLikeOnclick}>
{liked? "Liked":"Like"}
     </button>
     {
        errorMessage && <div>{errorMessage} </div>
     }
    </div>
  );
}

export default LikeButton;
