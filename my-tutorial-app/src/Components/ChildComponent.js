import React from 'react'

function ChildComponent(props) {
    const {greetHandler} = props

    return (
        <div>
            <button onClick={() => greetHandler('NEW CHILD')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent