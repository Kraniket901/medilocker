import React, { useState, Fragment, useEffect, useRef } from "react";
import { nanoid } from "nanoid";
import Web3 from "web3";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import contract from "../contracts/cruds.json";
import { useCookies } from "react-cookie";

const Doctors = () => {
    const [cookies, setCookie] = useCookies();
    const [doctors, setDoc] = useState([]);

    // const dataFetchedRef = useRef(false);
    // useEffect(async () => {
    //     if (dataFetchedRef.current) return;
    // dataFetchedRef.current = true;
    //     var accounts = await window.ethereum.request({
    //         method: "eth_requestAccounts",
    //     });
    //     var currentaddress = accounts[0];

    //     const web3 = new Web3(window.ethereum);
    //     const mycontract = new web3.eth.Contract(
    //         contract["abi"],
    //         contract["networks"]["5777"]["address"]
    //     );
    //     // console.log(mycontract);

    //     mycontract.methods
    //         .getdata()
    //         .call()
    //         .then(res => {
    //             res.map(data => {
    //                 data = JSON.parse(data);
    //                 if (data['type'] === 'doctor') {
    //                     // var newData = {...doctors};
    //                     doctors.push(data);
    //                     // setDoc(data);
    //                 }
    //             })
    //             setCookie('doctors', doctors);
    //         })
    // }, []);


    // to show data of current logged in patient
    async function show() {
        var accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        var currentaddress = accounts[0];

        const web3 = new Web3(window.ethereum);
        const mycontract = new web3.eth.Contract(contract['abi'], contract['networks']['5777']['address']);
        // console.log(mycontract);
        mycontract.methods.getdata().call()
            .then(res => {
                res.map(data => {
                    data = JSON.parse(data);
                    if (data['type'] === 'patient' && data['mail'] === cookies['mail']) {
                        console.log(data);
                    }
                })
            })
    }

    async function add(mail) {
        var accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        var currentaddress = accounts[0];

        const web3 = new Web3(window.ethereum);
        const mycontract = new web3.eth.Contract(contract['abi'], contract['networks']['5777']['address']);
        // console.log(mycontract);
        mycontract.methods.getdata().call()
            .then(res => {
                res.map(data => {
                    data = JSON.parse(data);
                    if (data['mail'] === cookies['mail'] && data['type'] === 'patient') {
                        console.log(data);
                        var drs = data['selectedDoctors'];
                        drs.push(mail);
                        data['selectedDoctors'] = drs;
                        console.log(data);

                        mycontract.methods.updateData(parseInt(cookies['index']), JSON.stringify(data)).send({ from: currentaddress }).then(() => {
                            alert("Doctor added");
                        }).catch((err) => {
                            console.log(err);
                        })

                        return;
                    }
                })
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
                <div
                    style={{ display: "flex", flexDirection: "column", padding: "1rem" }}
                >
                    <div style={{ display: "flex", flexDirection: "column", padding: "1rem" }}>
                        <table style={{ borderCollapse: "collapse" }}>
                            <thead>
                                <tr>
                                    <th className="">Name</th>
                                    <th className="">Email</th>
                                    <th className="">Speciality</th>
                                    <th className="">Book Doctor</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cookies['doctors'].map((data) => (
                                    <tr>
                                        <td>{data.name}</td>
                                        <td>{data.mail}</td>
                                        <td>{data.speciality}</td>
                                        <td><input type="button" value="Add" onClick={() => add(data.mail)} /></td>
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

export default Doctors;
