import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import './Signup.css'
import Web3 from "web3";
import contract from '../contracts/cruds.json';

const Signup = () => {
    const [reg, setReg] = useState({
        "filled": "0",
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
        <div  className="parent-form">
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form">
                <label htmlFor="name">Full name</label>
                <input name="name" onChange={(e) => handle(e)} id="name" placeholder="full Name" />
                <label htmlFor="email">email</label>
                <input onChange={(e) => handle(e)} type="mail" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input onChange={(e) => handle(e)} type="password" placeholder="********" id="password" name="password" />
                <Link to="/myprofile">
                <button className="signin-btn" type="submit" onClick={register}>Register</button>
                </Link>
            </form>
            {/* <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button> */}
        </div>
        </div>
    )
}

export default Signup;