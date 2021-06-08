import React from "react";
import ReactDom from 'react-dom';
import  "./Hello.css"
import 'tachyons';
function Hello (props) {
    return(
        <div> 
            <h2 className="f1 tc">Hello Swapnil</h2>
        <p> Welcome to the React </p>
        <p className="tc">{props.position}</p>
        
        </div>
    );
}
export default Hello;
