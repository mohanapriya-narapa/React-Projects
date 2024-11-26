import React,{useState} from 'react'

function JobPosting({item}) {
    const {title, url}=item;
  return (
 <a href={url}><div>{title}</div>

 </a>
  );
}

export default JobPosting;
