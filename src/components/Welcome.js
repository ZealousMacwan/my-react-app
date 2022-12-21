import React, { Component  } from 'react'

class Welcome extends Component {
    
    //must have render which returns html or atleast NULL
    render(){
        return(
            <div>
                <h1> Welcome {this.props.name} from Class componenet</h1>
                {this.props.children}            
            </div>
        )
    }
}
export default Welcome