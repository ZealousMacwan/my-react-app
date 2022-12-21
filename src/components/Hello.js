import React from 'react'

const Hello = () => {
    return(
        <h1>Hello</h1>
    )

    //above using jsx

    //below not using jsx complex
    //return React.createElement('div', {id: 'hello', className: 'dummy'}, React.createElement('h1', null, 'Hello'))

}
export default Hello