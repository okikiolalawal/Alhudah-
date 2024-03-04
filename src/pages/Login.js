import React, { useState } from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import style from '../styles/SignUp.module.css'
import axios from 'axios'
const ParentSignUp = () => {
  const router = useRouter();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("")
  const LoginUser = () =>
  {
    const userObj = { email, password, role }
    console.log(userObj);
    if(userObj.role == 'parent')
    {
      axios.post("http://localhost:9500/parent/login")
      .then((response)=>
      {
        console.log(response)
      })
      .catch()
    }
    else
    {

    }
  }
  return (
    <div className={style.page}>
      <div className={style.body}>
        <div className="col-6 mx-auto border rounded-3 my-5 bg-light">
          <h1 className="text-center my-5 border-bottom">Login</h1>
          <div className="col-11 mx-auto">
            <div className="mb-3 p-1">
              <label className="form-label">Email</label>
              <input className="form-control" placeholder="Email"
              onChange={(e) =>{setEmail(e.target.value)}}></input>
            </div>
            <div className="mb-3 p-1">
              <label className="form-label">Password</label>
              <input className="form-control" placeholder="Password"onChange={(e) =>{setPassword(e.target.value)}}></input>
            </div>
            <div className="mb-3 p-1">
              <label htmlFor="" className="form-label">
                Login As:
              </label>
              <select className="form-select" onChange={(e) =>{setRole(e.target.value)}}>
                <option value="parent" className="form-control">
                  Parent
                </option>
                <option value="principal" className="form-control">
                  Principal
                </option>
                <option value="teacher" className="form-control">
                  Teacher
                </option>
              </select>
            </div>
            <div className="mb-3 p-3">
            <button
                  type="button"
                  onClick={LoginUser}
                  className="btn-success form-control btn text-light"
                >
                  Login
                </button>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <Link href={"/"} className="btn">
                If you don't have an account SignUp
              </Link>
              <Link href={"/"} className="btn">
                forgot Password
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParentSignUp