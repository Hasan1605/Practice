import React from "react";
import Input from "../../Input/input";
import "./form.css"
import {HiMail,HiUser,HiUserCircle,HiLockClosed,HiPhone} from "react-icons/hi";
import Button from "../../Button/button";

// whole app input remains const
export default function Form(props) {
    return(<>
        {
            props.type==="signup"?(<div className="form-container" >
            <h1>Sign Up</h1>
            <Input title="Name" type="text" icon={<HiUser/>}/>
            <Input title="Email" type="email" icon={<HiMail/>}/>
            <Input title="Username" type="text" icon={<HiUserCircle/>}/>
            <Input title="Password" type="password" icon={<HiLockClosed/>}/>
            <Input title="Phone Number" type="number" icon={<HiPhone/>}/>
            <Button title="Sign Up" onSubmit={props.changeStatus}/>
        </div>):(
            <div className="form-container" >
            <h1>Sign In</h1>
            <Input title="Username" type="text" icon={<HiUserCircle/>}/>
            <Input title="Password" type="password" icon={<HiLockClosed/>}/>
            <Button title="Sign In" />
        </div>
        )
        }
    </>
    );
}


