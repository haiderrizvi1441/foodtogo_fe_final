import React from 'react'

function Footer() {
  
  let mytime = new Date().getFullYear();

  return (
    <div style={{backgroundColor:"grey"}}>
        <p>
          © {mytime} Copyright: Haider Rizvi 
        </p>
    </div>
  )
}

export default Footer