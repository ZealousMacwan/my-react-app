import React from 'react'

function FunctionClick(props) {
    const {myname} = props
    console.log(myname);
    function clickHandler(){
        console.log("Button clicked by "+ myname);
    }
  return (
    <div>
        <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick