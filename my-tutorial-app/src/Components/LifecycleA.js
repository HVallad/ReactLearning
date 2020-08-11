import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Hunter'
        }
        console.log('LifecycleA Constructor')
    }
    
    static getDerivedStateFromProps(props,state) {
        console.log('LifeCycleA Derived State From Props')
        return null
    }

    componentDidMount() {
        console.log('LifeCycleA didMount')
    }

    render() {
        console.log('LifeCycleA  render')
        return (
            <div>
                LifeCycleA
                <LifecycleB/>
            </div>
        )
    }
}

export default LifecycleA
