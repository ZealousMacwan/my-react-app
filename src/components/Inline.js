import React from 'react'

const heading = {
    // key must be camel case
    fontSize: '72px',
    color: 'blue'
}

function Inline() {
  return (
    <h1 style={heading}>Inline</h1>
  )
}

export default Inline