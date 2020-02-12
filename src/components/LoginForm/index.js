import React from 'react'

export default function LoginForm(props) {

    return (
        <div>
            <form onSubmit={props.submitHandler}>
                <input type="input" value={props.loginState.name} name="name" onChange={props.changeHandler} placeholder="name" />
                <input type="password" value={props.loginState.password} name="password" onChange={props.changeHandler} placeholder="password" />
                <input type="submit" value="login"/>
            </form>
        </div>
    )
}
