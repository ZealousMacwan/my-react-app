import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Bruce', 'Clerk', 'Diana', 'Bruce']
    const persons = [
        {
            id: 1,
            name: 'A',
            age:'18',
            skill: 'A'
        },
        {
            id: 2,
            name: 'B',
            age:'18',
            skill: 'B'
        },
        {
            id: 3,
            name: 'C',
            age:'18',
            skill: 'C'
        }
    ]
    const nameList =  names.map((name, index) => (
        // Index as key can create problem in sorting or inserting at start
        // avoid using index and better to use unique id
        <h2 key={index}>{index} {name}</h2>
    ))

  return (

    <div>
        {nameList}
    </div>
    // <div>
    //     <h2>{names[0]}</h2>
    //     <h2>{names[1]}</h2>
    //     <h2>{names[2]}</h2>
    // </div>
  )
}

export default NameList