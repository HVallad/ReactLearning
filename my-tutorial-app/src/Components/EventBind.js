import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
        

        this.state = {
             message: 'Hello'
        }

        // this.clickHandler = this.clickHandler.bind(this)
    }
    
    // clickHandler(){
    //     this.setState({
    //         message: 'Goodbye'
    //     })

    //     console.log(this)
    // }

    // clickHandler = () =>{
    //     this.setState({
    //         message: 'Goodbye'
    //     })

    //     console.log(this)
    // }

    render() {
        return (
            <div>
            <div>{this.state.message}</div>
                {/*Performance potentional problem <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/*viable, especially for params, and simple: <button onClick={() => this.clickHandler()}>Click</button> */}
                {/* RECOMMENDED METHOD: <button onClick={this.clickHandler}>Click</button> */}
                {/* Experiemental Arrow Fxn: <button onClick={this.clickHandler}>Click</button> */}
            </div>
        )
    }
}

export default EventBind
