import React from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';
import './App.css';

function App() {
  const { register, handleSubmit } = useForm();
  const submit = (data) => {
    axios
      .post("https://dummyjson.com/auth/login", data)
      .then(res => console.log(res.data))
      .catch(err => { });
  }

  return(

  <form onSubmit={handleSubmit(submit)}>
    <div>
      <label
        htmlFor="username"
      >
        Username
      </label>
      <input
        {...register("username")}
        id="username"
        defaultValue="kminchelle"
      />
    </div>
    <div>
      <label
        htmlFor="password"
      >
        Password
      </label>
      <input
        {...register("password")}
        id="password"
        type="password"
        defaultValue="0lelplR"
      />
    </div>
    <button onClick={submit}>submit</button>
  </form>

  )
}
export default App
