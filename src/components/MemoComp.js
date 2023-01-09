import React from 'react'
function MemoComp({name}){
    console.log('Rendering memo component');
    return(
        <div>
            {name}
        </div>
    )
}
// Memo works only in react and react dom 16.6 or above
export default React.memo(MemoComp)