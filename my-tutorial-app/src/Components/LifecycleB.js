import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Hunter'
        }
        console.log('LifecycleB Constructor')
    }
    
    static getDerivedStateFromProps(props,state) {
        console.log('LifeCycleB Derived State From Props')
        return null
    }

    componentDidMount() {
        console.log('LifeCycleB didMount')
    }

    render() {
        console.log('LifeCycleB  render')
        return (
            <div>
                LifeCycleB
            </div>
        )
    }
}

export default LifecycleB
