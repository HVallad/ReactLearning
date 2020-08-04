import React from 'react'

//Functional Componenet
const Greet = props => {
    console.log(props)
    return <div>
        <h1>Hello {props.firstName} {props.lastName}!</h1>
        {props.children}
    </div>
}


export default Greet
