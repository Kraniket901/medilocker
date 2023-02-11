import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import './Signup.css'
import Web3 from "web3";
import contract from '../contracts/cruds.json';

const Signup = () => {
    const [reg, setReg] = useState({
        "type": "user",
        "name": "",
        "mail": "",
        "password": ""
    });

    function handle(e) {
        const newData = { ...reg };
        newData[e.target.name] = e.target.value;
        setReg(newData);
    }

    async function register() {
        var accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        var currentaddress = accounts[0];

        const web3 = new Web3(window.ethereum);
        const mycontract = new web3.eth.Contract(contract['abi'], contract['networks']['5777']['address']);
        // console.log(mycontract);
        mycontract.methods.addData(JSON.stringify(reg)).send({ from: currentaddress }).then(() => {
            alert("Account created");
        }).catch((err) => {
            console.log(err);
        })
    }

    return (

        <div className="login-container bg-gradient-to-r from-cyan-500 to-blue-500 via-teal-200 ">
      <form className="login-form backdrop-blur-lg
               [ p-8 md:p-10 lg:p-10 ]
               [ bg-gradient-to-b from-white/60 to-white/30 ]
               [ border-[1px] border-solid border-white border-opacity-30 ]
               [ shadow-black/70 shadow-2xl ]">
        <h2 className="login-form-title">Sign Up</h2>
        <div className="input-container">
          <div className="input-div">
            <div className="input-heading">
              <i className="fas fa-user"></i>
              <h5>Username</h5>
            </div>
            <input name="name" onChange={(e) => handle(e)} id="name" placeholder="Full Name" />

          </div>
          <div className="input-div">
            <div className="input-heading">
              <i className="fas fa-envelope"></i>
              <h5>Email</h5>
            </div>
            <input onChange={(e) => handle(e)} type="mail" placeholder="youremail@gmail.com" id="email" name="mail" />


          </div>
          <div className="input-div">
            <div className="input-heading">
              <i className="fas fa-lock"></i>
              <h5>Password</h5>
            </div>
            <input onChange={(e) => handle(e)} type="password" placeholder="********" id="password" name="password" />

          </div>

        </div>

        <input type="button" value="Sign Up" className="btn" onClick={register} />
        <p style={{ textAlign: "right"}}>Already a user? 
          <Link style={{marginLeft:"4px", color: "black", textDecoration: "underline"}} to='/login'>Log In.</Link>
          </p>

      </form>
    </div>
        
    )
}

export default Signup;