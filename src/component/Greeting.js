import React from "react";

function Greeting(props){

    return(
        <div className="greet-div custom">
            <h2> Hi {props.name} 👋🏼</h2>
        </div>
    )
}

export default Greeting;