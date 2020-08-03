import React from 'react'

function test() {
    alert('Test')
}

const Hello = () => {
   return(
       <div>
           <h1>
               Hello Hunter JSX
           </h1>
           <button onClick="test();">Test</button>
       </div>
   )
}

export default Hello