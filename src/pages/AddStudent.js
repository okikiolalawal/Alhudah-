import React from 'react'
import style from '../styles/SignUp.module.css'
import Link from 'next/link';

const AddStudent = () => {
  return (
    <div className={style.page}>

    
    <div className={`${style.body}`}>
      <div className={`${style.shadow}${style.padded} my-5 col-10 mx-auto p-4 border rounded-3 bg-light`}>
        <h2 className="text-center border-bottom p-3">Add New Student</h2>
        <div className="d-flex justify-content-between text-success">
          <div className="col-4 p-3">
            <label htmlFor="" className="form-label ">
              First Name
            </label>
            <input
              type="text"
              className="form-control text-success"
              placeholder="First Name"
            />
          </div>
          <div className="col-4 p-3">
            <label htmlFor="" className="form-label ">
              Middle Name
            </label>
            <input
              type="text"
              className="form-control text-success"
              placeholder="Middle Name"
            />
          </div>
          <div className="col-4 p-3">
            <label htmlFor="" className="form-label ">
              Last Name
            </label>
            <input
              type="text"
              className="form-control text-success"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="d-flex justify-content-between text-success">
          <div className="col-4 p-3">
            <label htmlFor="" className="form-label">
              Gender
            </label>
            <select className="form-select">
              <option value="Male" className="form-control">
                Male
              </option>
              <option value="Female" className="form-control">
                Female
              </option>
            </select>
          </div>
          <div className="col-4 p-3">
            <label htmlFor="" className="form-label">
              Class From
            </label>
            <select className="form-select">
              <option value="Male" className="form-control">
                JSS1
              </option>
              <option value="Female" className="form-control">
                JSS2
              </option>
              <option value="Female" className="form-control">
                JSS3
              </option>
              <option value="Female" className="form-control">
                SSS1
              </option>
              <option value="Female" className="form-control">
                SSS2
              </option>
              <option value="Female" className="form-control">
                SSS3
              </option>
            </select>
          </div>
          <div className="col-4 p-3">
            <label htmlFor="" className="form-label">
              Class To
            </label>
            <select className="form-select">
              <option value="Male" className="form-control">
                JSS1
              </option>
              <option value="Female" className="form-control">
                JSS2
              </option>
              <option value="Female" className="form-control">
                JSS3
              </option>
              <option value="Female" className="form-control">
                SSS1
              </option>
              <option value="Female" className="form-control">
                SSS2
              </option>
              <option value="Female" className="form-control">
                SSS3
              </option>
            </select>
          </div>
        </div>
        <div className="row text-success">
          <div className="col-5 p-4">
            <label htmlFor="" className="form-label">
              Age
            </label>
            <input type="text" className="form-control" placeholder="Age" />
          </div>
          <div className="col-7 p-4">
            <label htmlFor="" className="form-label">
              Address
            </label>
            <input type="text" className="form-control" placeholder="Address" />
          </div>
        </div>
        <div className='col-12 p-3'>
            <Link className='btn btn-success form-control' href={"/DashBoard"}>Add Student</Link>
        </div>
      </div>
    </div>
    </div>
  );
}

export default AddStudent;