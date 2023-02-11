import React from "react";
import { useState } from 'react';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useCookies } from 'react-cookie';
import Web3 from "web3";
import contract from '../contracts/cruds.json';

const MyProfile = () => {
  const [cookies, setCookie] = useCookies();
  const [name, setName] = React.useState(cookies['name']);
  const [email, setEmail] = React.useState(cookies['mail']);
  const [password, setPassword] = React.useState(cookies['password']);
  // const [acceptedTerms, setAcceptedTerms] = React.useState(false);

  const [auth, setAuth] = useState({
    "type": "user",
    "name": name,
    "mail": email,
    "password": password
  })

  const [disabled, setDisabled] = useState(true);

  function handleGameClick() {
    setDisabled(!disabled);
  }

  async function save() {
    setCookie("name", name);
    setCookie("mail", email);
    setCookie("password", password);
    var accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    var currentaddress = accounts[0];

    const web3 = new Web3(window.ethereum);
    const mycontract = new web3.eth.Contract(contract['abi'], contract['networks']['5777']['address']);
    // console.log(mycontract);
    mycontract.methods.updateData(parseInt(cookies['index']) ,JSON.stringify(auth)).send({ from: currentaddress })
    .then(res => {
      console.log(res);
    })
  }

  return (
    <div className="flex relative dark:bg-main-dark-bg">
      <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
        <Sidebar />
      </div>

      <div
        className={
          "dark:bg-main-dark-bg  bg-main-bg min-h-screen ml-72 w-full  "
        }
      >
        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
          <Navbar />
        </div>
        <div className="flex justify-center m-10 ">
          <form className=" p-5 ">
            <h1 className="text-center text-lg">User Profile</h1>


            <div className="py-2">
              <label className="text-black">
                Name:
                <input
                  id="inp"
                  style={{ padding: "10px", margin: "10px", color: "black" }}
                  name="email"
                  type="email"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  disabled={disabled}
                  required />
              </label>
              <input type="button" value="✎" onClick={handleGameClick}></input>
            </div>

            <div className="py-2">
              <label className="text-black">
                Email:
                <input
                  id="inp"
                  style={{ padding: "10px", margin: "10px" }}
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={disabled}
                  required />
              </label>
              <input type="button" value="✎" onClick={handleGameClick}></input>
            </div>



            <div className="py-2">
              <label className="text-black">
                Password:
                <input
                  style={{ padding: "10px", margin: "10px" }}
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={disabled}
                  required />
              </label >
              <input type="button" value="✎" onClick={handleGameClick}></input>
            </div>

            <div className="py-2">
              <input type="button" value="Save" onClick={save} className="bg-cyan-400 text-white font-medium p-3" />
            </div>

          </form>
        </div>

        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default MyProfile;
