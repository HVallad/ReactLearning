import React from 'react'

function Person(props) {
    const {person} = props
    return (
        <div>
            <h2 key={person.id}>I am {person.name}</h2>
        </div>
    )
}

export default Person
