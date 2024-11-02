import React, {useEffect, useState} from 'react'

function ContentTabs({contents}) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      <div>
{contents.map((content, index)=>(
    <button key ={index} onClick ={()=>setActiveTab(index)}>
{content.title}
    </button> 
))}
      </div>
      <div>
      <p>{contents[activeTab].contents}</p>
      </div>
    </div>
  );
}

export default ContentTabs;

