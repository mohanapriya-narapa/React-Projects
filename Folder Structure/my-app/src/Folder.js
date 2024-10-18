import React, { useState } from 'react';
import { explorer } from './FolderData/FolderData'; 

function Folder({ explorer }) {
  const [expand, setExpand] = useState(false);
return(

    <div style={{ marginTop: '5px', textAlign: 'left' }}>
{
    explorer.isFolder?(
        <>
        <div onClick={()=>setExpand(!expand)}>
            <span>
            📁{explorer.name}
            </span>
        </div>
        {
            expand &&(
                <div  style={{ paddingLeft: '15px' }}>
                    {explorer.items.map((item)=>(
 <Folder explorer={item } key={item.id}></Folder>
                    ))
                   
}
                </div>
            )
        }
</>
    ):(
        <div>
            <span> {explorer.name}</span>
        </div>
    )
}
    </div>
);
}

export default Folder;
