import React from "react";
import "./button.css"
export default function Button(props){
    return(
       <div>
         <button type="submit" onClick={
            ()=>{
                props.onSubmit("signin");
            }
         }>
            {props.title}
        </button>
       </div>
    )
}