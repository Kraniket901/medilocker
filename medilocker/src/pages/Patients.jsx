import React, { useState, Fragment, useEffect, useRef } from "react";
import Web3 from "web3";
import Navbar from "../components/Navbar";
import Sidebar2 from "../components/Sidebar2";
import contract from "../contracts/cruds.json";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

const Patients = () => {
    const [cookies, setCookie] = useCookies();
    const [patients, setPat] = useState([]);

    // to list all patients assigned
    async function show() {
        cookies['patients'].map(data => {
            console.log(data);
        })
    }

    function view(mail) {
        const url = `/patientData/${mail}`

        cookies['patients'].map(d => {
            if (d['mail'] === mail) {
                console.log(d);
                setCookie('temporary', d);
            }
        })

        window.location.href = url;
    }

    async function treated(mail) {
        var accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        var currentaddress = accounts[0];

        const web3 = new Web3(window.ethereum);
        const mycontract = new web3.eth.Contract(contract['abi'], contract['networks']['5777']['address']);
        mycontract.methods.getdata().call()
            .then(res => {
                for (let i = 0; i < res.length; i++) {

                    var d = JSON.parse(res[i]);
                    if (d['type'] === 'patient' && d['mail'] === mail) {
                        var list = d['selectedDoctors'];
                        var newList = [];
                        list.map(j => {
                            if (j !== cookies['mail']) {
                                newList.push(j);
                            }
                        })
                        d['selectedDoctors'] = newList;
                        mycontract.methods.updateData(i, JSON.stringify(d)).send({ from: currentaddress }).then(() => {
                            alert("Patient removed");

                            var tmp = cookies['patients'];
                            var newTmp = [];

                            for (let j = 0; j < tmp.length; j++) {
                                if (tmp[j]['mail'] !== mail) {
                                    newTmp.push(tmp[j]);
                                }
                            }
                            console.log(newTmp);
                            setCookie('patients', newTmp);
                            
                        }).catch((err) => {
                            console.log(err);
                        })
                    }
                }
            })
    }

    return (
        <div className="flex relative dark:bg-main-dark-bg">
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                <Sidebar2 />
            </div>

            <div
                className={
                    "dark:bg-main-dark-bg  bg-main-bg min-h-screen ml-72 w-full  "
                }
            >
                <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                    <Navbar />
                </div>
                <div
                    style={{ display: "flex", flexDirection: "column", padding: "1rem" }}
                >
                    <div style={{ display: "flex", flexDirection: "column", padding: "1rem" }}>
                        <table style={{ borderCollapse: "collapse" }}>
                            <thead>
                                <tr>
                                    <th className="">Name</th>
                                    <th className="">Email</th>
                                    <th className="">Details</th>
                                    <th className="">Treated?</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cookies['patients'].map((data) => (
                                    <tr>
                                        <td>{data.name}</td>
                                        <td>{data.mail}</td>
                                        <td>
                                            {/* <Link to={`/patientData/${data.mail}`} > */}
                                            <input type="button" value="View" onClick={() => view(data.mail)} />
                                            {/* </Link> */}
                                        </td>
                                        <td>
                                            <input type="button" value="Treated" onClick={() => treated(data.mail)} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* <input type="button" value="Show" onClick={show} /> */}
                </div>
                {/* <Footer /> */}
            </div>
            {/* <input type="button" value="Show" onClick={show} /> */}

        </div>
    );
};

export default Patients;
