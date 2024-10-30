import React from 'react'

function JobPosting({title, url}) {
  return (
    <a href={url}>
    <div>{title}</div>
    </a>
  )
}

export default JobPosting