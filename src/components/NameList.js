import React from 'react'
import Person from './Person'

function NameList() {
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
    const personsList =  persons.map(person => (
        <Person key={person.id} person={person}></Person>
    ))

  return (

    <div>
        {personsList}
    </div>
    // <div>
    //     <h2>{names[0]}</h2>
    //     <h2>{names[1]}</h2>
    //     <h2>{names[2]}</h2>
    // </div>
  )
}

export default NameList