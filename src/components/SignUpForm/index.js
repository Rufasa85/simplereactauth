import React from 'react'

export default function SignUpForm(props) {

    return (
        <div>
            <form onSubmit={props.submitHandler}>
                <input type="input" value={props.signUpState.name} name="name" onChange={props.changeHandler} placeholder="name" />
                <input type="password" value={props.signUpState.password} name="password" onChange={props.changeHandler} placeholder="password" />
                <input type="submit" value="signup"/>
            </form>
        </div>
    )
}
