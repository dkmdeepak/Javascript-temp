import React,{Component} from "react";

class User extends Component{
    constructor(){
        super();
        console.log('Constructor');
    }
    render(){
        return(
            <>
            <h1>Class Component</h1>
            </>
        )
    }
    componentDidMount(){
        console.log('cdidmount');
        
    }
}
export default User;