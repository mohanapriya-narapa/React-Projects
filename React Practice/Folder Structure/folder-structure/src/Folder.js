import React, {useState} from 'react'

function Folder({explorer}) {
    const [expand, setExpand]=useState(false)
  return (
    <div>
{
    explorer.isFolder?(
        <>
<div onClick={()=>setExpand(!expand)}>
<span style={{cursor:'pointer'}}>
📁{explorer.name}
</span>
</div>
{
    expand && (
        <div>
            {
                explorer.items.map((item)=>(
                    <Folder explorer={item} key={item.id}>

                    </Folder>
                ))
            }
        </div>
    )
}
        </>
    ):(
<>
<div>
    <span>{explorer.name}</span>
</div>
</>
    )
}
    </div>
  );
}

export default Folder;
