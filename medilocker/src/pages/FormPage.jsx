import React from "react";
import { useState } from 'react';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";


const FormPage = (props) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  // const [acceptedTerms, setAcceptedTerms] = React.useState(false);

  const handleSubmit = (event) => {
    console.log(`
      Email: ${email}
      Password: ${password}
      Accepted Terms: ${acceptedTerms}
    `);

    event.preventDefault();
  }


  const [disabled, setDisabled] = useState(true);

  function handleGameClick() {
    setDisabled(!disabled);
  }

  return (
    <div className="flex relative dark:bg-main-dark-bg">
        {/* <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
          <Sidebar />
        </div> */}
      <div
        className={
          "dark:bg-main-dark-bg  bg-main-bg ml-72 w-full  "
        }
      >
        <div className="flex justify-center">
        <form onSubmit={handleSubmit} className=" p-5">
      <h1 className="text-center text-lg">User Profile</h1>


      <div className="py-2">
        <label className="text-black">
        Name:
        <input
        id="inp"
        style={{padding:"10px", margin:"10px"}}
          name="email"
          type="email"
          value={name}
          onChange={e => setName(e.target.value)}
        //   disabled={disabled}
          required />
      </label>
      {/* <input type="button" value="✎" onClick={handleGameClick}></input> */}
        </div>

        <div className="py-2">
        <label className="text-black">
        Email:
        <input
        id="inp"
        style={{padding:"10px", margin:"10px"}}
          name="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        //   disabled={disabled}
          required />
      </label>
      {/* <input type="button" value="✎" onClick={handleGameClick}></input> */}
        </div>

     

        <div className="py-2">
        <label className="text-black">
        Password:
        <input
        style={{padding:"10px", margin:"10px"}}
          name="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        //   disabled={disabled}
          required />
      </label >
      {/* <input type="button" value="✎" onClick={handleGameClick}></input> */}
        </div>
      
    </form>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
