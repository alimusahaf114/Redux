import React from 'react'

const Container = ({children}) => {
  return (
    <div className="card card-layer" style={{width: "60%"}}>
  <div className="card-body">
    {children}    
  </div>
</div>
  )
}

export default Container
