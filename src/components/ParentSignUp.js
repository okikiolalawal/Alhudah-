import React from 'react'
import Image from 'next/image'
import logo from '../logo-removebg-preview.png'
import Link from 'next/link'
import style from '../styles/SignUp.module.css'
const ParentSignUp = () => {
  return (
    <div className={style.page}>
      {/* <div className="d-flex justify-content-between p-1 bg-success text-white align-items-center">
        <div>
          <div className="d-flex g-1">
            <Image src={logo} width={90} className="ms-5" />
            <div className="fs-5 d-flex align-items-center ms-3 ">
              Al-Hudah Model College
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-around ">
          <div className="me-5 fs-5 ">
            <Link href={"/"} className="btn text-light fs-5">
              Sign Up
            </Link>
          </div>
          <div className="me-5 fs-5">
            <Link href={"/"} className="btn text-light fs-5">
              Sign In
            </Link>
          </div>
        </div>
      </div> */}
      <div className={style.body}>
        <div className="col-6 mx-auto border rounded-3 my-5 bg-light">
          <h1 className="text-center my-5 border-bottom">Login</h1>
          <div className="col-11 mx-auto">
            <div className="mb-3 p-1">
              <label className="form-label">Email</label>
              <input className="form-control" placeholder="Email"></input>
            </div>
            <div className="mb-3 p-3">
              <label className="form-label">Password</label>
              <input className="form-control" placeholder="Password"></input>
            </div>
            <div className="mb-3 p-3">
              <button className="btn btn-success form-control">Login</button>
            </div>
            <div className='d-flex justify-content-between mb-3'>
              <Link href={"/"} className='btn'>If you don't have an account SignUp</Link>
              <Link href={"/"} className='btn'>forgot Password</Link>
            </div>
          </div>
        </div>
        
      </div>
      
    </div>
  );
}

export default ParentSignUp