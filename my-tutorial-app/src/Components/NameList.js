import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana', 'Bruce']

    const persons = [
        {
            id: 1,
            name: 'Barry'
        },
        {
            id: 2,
            name: 'Diana'
        },
        {
            id: 3,
            name: 'Bruce'
        },
        {
            id: 4,
            name: 'Legend'
        }
    ]
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
    return (
        <div>
            {nameList}
        </div>
    )
}

export default NameList

