import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Web3 from "web3";
import contract from '../contracts/cruds.json';
import { useCookies } from 'react-cookie';
import './Login.css'

const Login = () => {

    const [log, setLog] = useState({
        "mail": "",
        "password": ""
    });

    const [cookies, setCookie] = useCookies();

    function handle(e) {
        const newData = { ...log };
        newData[e.target.name] = e.target.value;
        setLog(newData);
    }

    async function login() {
        console.log(log);
        var accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        var currentaddress = accounts[0];

        const web3 = new Web3(window.ethereum);
        const mycontract = new web3.eth.Contract(contract['abi'], contract['networks']['5777']['address']);
        // console.log(mycontract);
        mycontract.methods.getdata().call().then(res => {
            let flag = 0;
            for (let i = 0; i < res.length; i++) {
                const d = JSON.parse(res[i]);
                if (d['type'] === 'user') {
                    if (d['mail'] === log['mail']) {
                        flag = 1;
                        if (d['password'] === log['password']) {
                            setCookie('index', i);
                            setCookie('mail', d['mail']);
                            setCookie('name', d['name']);
                            setCookie('password', d['password']);
                            window.location.href = "/myprofile";
                        }
                        else {
                            alert("wrong password");
                            return;
                        }
                    }
                }
            }

            if (flag == 0) {
                alert("Please create your account first");
            }
        })
    }

    return (
        <div  className="parent-form">
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form">
                <label htmlFor="email">email</label>
                <input onChange={(e) => handle(e)} type="email" placeholder="youremail@gmail.com" id="email" name="mail" />
                <label htmlFor="password">password</label>
                <input onChange={(e) => handle(e)} type="password" placeholder="********" id="password" name="password" />
                <input className="log-btn" type="button" value="Log In" onClick={login} />
            </form>

            <a className="yo" href="/signup">Don't have an account? Register here.</a>
        </div>
        </div>
    )
}

export default Login;