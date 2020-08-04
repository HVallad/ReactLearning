import React, {Component} from 'react'

//Functional Component
class Welcome extends Component {
    render() {
        return <div>
                <h1>Welcome {this.props.firstName} {this.props.lastName}</h1>
                {this.props.children}
                </div>

        
    }
}

export default Welcome