import React from "react";
import "./input.css";

// one line javascript and inside {}
// ...props
export default function Input(props) {
    return(
        <div className="input-component">
            <p>{props.title}</p>
            <div className="inner-input-component">
                <span>
                    {props.icon}
                </span>
                <input type={props.type}/>
            </div>
        </div>
    );
}