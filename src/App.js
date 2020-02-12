import React, { useState, useEffect } from 'react';
import LoginForm from "./components/LoginForm"
import SignUpForm from "./components/SignUpForm";
import API from "./utils/API.js"

function App() {
  const [loginState, setLoginState] = useState({
    name: "",
    password: ""
  })
  const [signUpState, setSignUpState] = useState({
    name: "",
    password: ""
  })
  const [userState, setUserState] = useState({
    name: "",
    id: 0,
    loggedIn: false
  })

  useEffect(()=>{
    API.readsessions().then(res=>{
      if(res.data){
        setUserState({
          name:res.data.name,
          id:res.data.id,
          loggedIn:true
        })
      }
    })
  },[])

  const handleLoginInputChange = event => {
    const { name, value } = event.target;
    setLoginState({
      ...loginState,
      [name]: value
    })
  }
  const handleLoginFormSubmit = event => {
    event.preventDefault();
    API.login(loginState).then(res => {
      if (res.data) {

        setUserState({
          name: res.data.name,
          id: res.data.id,
          loggedIn: true
        });
        setLoginState({
          name: "",
          password: ""
        })
      } else {
        setUserState({
          name: "",
          id: 0,
          loggedIn: false
        })
      }
    }).catch(err => {
      console.log(err)
    })
  }
  const handleSignUpInputChange = event => {
    const { name, value } = event.target;
    setSignUpState({
      ...signUpState,
      [name]: value
    })
  }
  const handleSignUpFormSubmit = event => {
    event.preventDefault();
    //TODO:Signup user, then log them in
    API.signUp(signUpState).then(res => {
      API.login(signUpState).then(res => {
        if (res.data) {

          setUserState({
            name: res.data.name,
            id: res.data.id,
            loggedIn: true
          });
          setSignUpState({
            name: "",
            password: ""
          })
        } else {
          setUserState({
            name: "",
            id: 0,
            loggedIn: false
          })
        }
      }).catch(err => {
        console.log(err)
      })
    }).catch(err => {
      console.log(err);
    })
  }
  const logout = () => {
    API.logout().then(res => {
      setUserState({
        name: "",
        id: 0,
        loggedIn: false
      })
    })
  }
  const getSecretStuff = () => {
    API.secrets().then(data => {
      console.log(data)
    })
  }

  return (
    <div>
      {userState.loggedIn && <h1>{userState.name}</h1>}
      {userState.loggedIn && <button onClick={logout}>Logout</button>}
      <h3>Login</h3>
      <LoginForm loginState={loginState} changeHandler={handleLoginInputChange} submitHandler={handleLoginFormSubmit} />
      <h3>Signup</h3>
      <SignUpForm signUpState={signUpState} changeHandler={handleSignUpInputChange} submitHandler={handleSignUpFormSubmit} />
      <button onClick={getSecretStuff}>secret data!</button>
    </div>
  );
}

export default App;
