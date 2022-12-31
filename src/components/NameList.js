import React from 'react'

function NameList() {
    const names = ['Bruce', 'Clerk', 'Diana', 'Zealous']
    const namelist =  names.map(name => (
        <h2>{name}</h2>
    ))

  return (

    <div>
        {namelist}
    </div>
    // <div>
    //     <h2>{names[0]}</h2>
    //     <h2>{names[1]}</h2>
    //     <h2>{names[2]}</h2>
    // </div>
  )
}

export default NameList