//Making a class based component
//It is a earlier way which was used to describe the functional component
//Used Less Now a days but still not ded :) and is primarly asked in the interviews

import React from "react";


class UserClass extends React.Component{
    constructor(props){
        //Super is important without it will not be accsesible throughout the function
        super(props);
         //like we create state variables using useState in functional component here we can create it using:-
        this.state={
            //We can create more than one state variables also in the same object
            count:0,
            count2:1

        }
    }
    //Can be accessed by using this variable

   

    render(){
        return(
            <div className="user-card">
               
            <h2>{this.props.name}</h2>
            <h3>Contact me at My home :)</h3>
            <h4>Count:{this.state.count}</h4>
            <button onClick={
                ()=>{
                    //Never Update the state variables directly
                    this.setState({
                        count:this.state.count+1
                    });
                }
            }>Increase</button>
        </div>
        );
       
    }
}
export default UserClass;