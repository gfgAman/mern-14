import axios from 'axios';
import React, { useState } from 'react'

const Signup = () => {
  const [registerUser, setRegister] = useState({
    username: "",
    email: "",
    contact: null,
    password: ""
  })

  const signupHandler = async () => {
    // console.log(registerUser,'registr');
    try {

      // const response = await axios.post(API,Payload)
      const res = await axios.post('http://localhost:3000/signup', registerUser)

      console.log(res);
    }
    catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="max-w-4xl max-sm:max-w-lg mx-auto p-6 mt-6">
      <div className="text-center mb-12 sm:mb-16">



        <h4 className="text-slate-600 text-base mt-6">Sign up into your account</h4>
      </div>
      <div>
        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <label className="text-slate-900 text-sm font-medium mb-2 block">
              First Name
            </label>
            <input
              name="name"
              type="text"
              className="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all"
              placeholder="Enter name"
              onChange={(e) => setRegister(prev => ({ ...prev, username: e.target.value }))}
            />
          </div>

          <div>
            <label className="text-slate-900 text-sm font-medium mb-2 block">
              Email Id
            </label>
            <input
              name="email"
              type="text"
              className="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all"
              placeholder="Enter email"
              onChange={(e) => setRegister(prev => ({ ...prev, email: e.target.value }))}
            />
          </div>
          <div>
            <label className="text-slate-900 text-sm font-medium mb-2 block">
              Mobile No.
            </label>
            <input
              name="number"
              type="number"
              className="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all"
              placeholder="Enter mobile number"
              onChange={(e) => setRegister(prev => ({ ...prev, contact: e.target.value }))}
            />
          </div>
          <div>
            <label className="text-slate-900 text-sm font-medium mb-2 block">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all"
              placeholder="Enter password"
              onChange={(e) => setRegister(prev => ({ ...prev, password: e.target.value }))}
            />
          </div>

        </div>
        <div className="mt-12">
          <button
            type="button"
            className="mx-auto block min-w-32 py-3 px-6 text-sm font-medium tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer"
            onClick={signupHandler}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>

  )
}

export default Signup