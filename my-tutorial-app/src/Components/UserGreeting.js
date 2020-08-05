import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render(){

        return(
            this.state.isLoggedIn && <div>Welcome Hunter</div>
        )

            // return(
            //     this.state.isLoggedIn ? 
            //         <div>Welcome Hunter</div> : 
            //     this.state.isLoggedIn2 ?
            //         <div>Welcome Guest 1</div> :
            //         <div>Welcome Guest 2</div>
            // )



        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Hunter</div>
        // }
        // else{
        //     message = <div>Welcome Guest</div>
        // }

        // return message
    }

    
    // render() {
    //     if(this.state.isLoggedIn){
    //         return(
    //             <div>
    //                 Welcome Hunter
    //             </div>
    //         )
    //     }
    //     else {
    //         return (
    //             <div>

    //                 <div>
    //                     Welcome Guest
    //                 </div>
    //             </div>
    //         )
    //     }
    // }
}

export default UserGreeting
