import React,{Component} from "react";
class MyAppWithProp extends React.Component{
    constructor(props){
        super (props);
        this.state ={
            name:"fpt-Aptech",
            email:"fpt-Tech@gmail.com"
        }
    }
render(){
    return(
        <div>
            <h1>Demo State and Props</h1>
            <h3>Welcome to {this.state.name}</h3>
            <h3>email: {this.state.email}</h3>
        </div>
    );
}
}
export default MyAppWithProp;