import React, { Component  } from 'react'

class Welcome extends Component {
    
    //must have render which returns html or atleast NULL
    render(){
        const {name, heroName} = this.props
        //const {state1, state2} = this.state
        return(
            <div>
                <h1> Welcome {name} from Class componenet {heroName}</h1>
                {this.props.children}            
            </div>
        )
    }
}
export default Welcome