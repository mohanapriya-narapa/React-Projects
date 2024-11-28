import React, {useState} from 'react'

function ContentsTabs({contents}) {
    const [active, setActive]=useState(0);
  return (
    <div>
<div>
    {
        contents.map((content, index)=>(
            <button onClick={()=>setActive(index)}>{content.title}  </button>
        ))
    }
</div>
<div>
    <p>{contents[active].contents}</p>
</div>
    </div>
  );
}

export default ContentsTabs;
