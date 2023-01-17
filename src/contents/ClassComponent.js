import React from "react";
import './contents.css'


class ClassComponent extends React.Component{
    render(){

        return(
            <div className="contents" id="content1">
                <h3>I was made using Class Component</h3>
                <p>This is done by using external CSS</p>
                <p style={{color:'red'}}>This is done by using inline CSS</p>
            </div>
        )
    }
}

export default ClassComponent