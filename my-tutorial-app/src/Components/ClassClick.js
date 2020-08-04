import React, { Component } from 'react'

export class ClassClick extends Component {
    clickHandler(){
        console.log('Click button!')
    }

    dubClickHandle(){
        console.log('Clicker button!')
    }

    render() {
        return (
            <div>
                <button onDoubleClick={this.dubClickHandle} onClick={this.clickHandler}>Click Me!</button>
            </div>
        )
    }
}

export default ClassClick
