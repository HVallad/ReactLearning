import React from 'react'

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Clark'
        },
        {
            id: 2,
            name: 'Diana'
        },
        {
            id: 3,
            name: 'Bruce'
        }
    ]
    const nameList = persons.map(person => <h2 key={person.id}>I am {person.name}</h2>)
    return (
        <div>
                {nameList}
        </div>
    )
}

export default NameList

