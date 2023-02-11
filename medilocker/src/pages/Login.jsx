import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Web3 from "web3";
import contract from "../contracts/cruds.json";
import { useCookies } from "react-cookie";
import "./Login.css";

const Login = () => {
  const [log, setLog] = useState({
    mail: "",
    password: "",
  });

  const [cookies, setCookie] = useCookies();

  function handle(e) {
    const newData = { ...log };
    newData[e.target.name] = e.target.value;
    setLog(newData);
  }

  async function login() {
    console.log(log);
    var accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    var currentaddress = accounts[0];

    const web3 = new Web3(window.ethereum);
    const mycontract = new web3.eth.Contract(
      contract["abi"],
      contract["networks"]["5777"]["address"]
    );
    // console.log(mycontract);
    mycontract.methods
      .getdata()
      .call()
      .then((res) => {
        let flag = 0;
        for (let i = 0; i < res.length; i++) {
          const d = JSON.parse(res[i]);
          if (d["type"] === "user") {
            if (d["mail"] === log["mail"]) {
              flag = 1;
              if (d["password"] === log["password"]) {
                setCookie("index", i);
                setCookie("mail", d["mail"]);
                setCookie("name", d["name"]);
                setCookie("password", d["password"]);
                window.location.href = "/myprofile";
              } else {
                alert("wrong password");
                break;
              }
            }
          }
        }

        if (flag == 0) {
          alert("Please create your account first");
        }
      });
  }

  return (
    <div className="login-container">
      <form className="login-form">
        <h2 className="login-form-title">Log In</h2>
        <div className="input-container">
          <div className="input-div">
            <div className="input-heading">
              <i className="fas fa-user"></i>
              <h5>Email</h5>
            </div>
            <input
              onChange={(e) => handle(e)}
              type="email"
              placeholder="youremail@gmail.com"
              id="email"
              name="mail"
            />
          </div>
          <div className="input-div">
            <div className="input-heading">
              <i className="fas fa-lock"></i>
              <h5>Password</h5>
            </div>
            <input
              onChange={(e) => handle(e)}
              type="password"
              placeholder="********"
              id="password"
              name="password"
            />
          </div>
          <p style={{ textAlign: "right" }}>Forgot password?</p>
        </div>

        <input
          type="button"
          className="btn"
          value="Log In"
          onClick={login}
        />
      </form>
    </div>
  );
};

export default Login;
