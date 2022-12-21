import React from 'react'

// function Greet(params) {
//     return <h1>Hello Zealous</h1>
// }

//below function is using es6 arror function syntax
const Greet = () => <h1>Hello Zealous from new syntax</h1>

//adding default name will always export this so that during import you can give any name which by
//default refers to the default componenet 
//also you can comment below and use named export directly
export default Greet