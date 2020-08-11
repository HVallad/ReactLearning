import React, {Component} from 'react'

//Functional Component
class Welcome extends Component {
    render() {
        const {firstName, lastName} = this.props

        return  (
            <div>
                <h1>
                    Welcome {firstName} {lastName}!
                </h1>
                {this.props.children}
            </div>
        )
    }
}

export default Welcome