import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";

import Navbar from "../components/Navbar";
import Sidebar2 from "../components/Sidebar2";
import Footer from "../components/Footer";

const PatientInfo = () => {
    const { mail } = useParams();
    const [cookies, setCookie] = useCookies();

    

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
                        <h1 style={{ fontSize: '2rem' }}>Insurance</h1>
                        <table style={{ borderCollapse: "collapse" }}>
                            <thead>
                                <tr>
                                    <th className="">Company</th>
                                    <th className="">Policy No.</th>
                                    <th className="">Expiry</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cookies['temporary']["insurance"].map((d) => (
                                    (d !== 'undefined' &&
                                        <tr>
                                            <td>{d.company}</td>
                                            <td>{d.policyNo}</td>
                                            <td>{d.expiry}</td>
                                        </tr>)
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", padding: "1rem" }}>
                        <h1 style={{ fontSize: '2rem' }}>Allergies</h1>
                        <table style={{ borderCollapse: "collapse" }}>
                            <thead>
                                <tr>
                                    <th className="">Name</th>
                                    <th className="">Type</th>
                                    <th className="">Medication</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cookies['temporary']["allergies"].map((d) => (
                                    (d !== 'undefined' &&
                                        <tr>
                                            <td>{d.name}</td>
                                            <td>{d.type}</td>
                                            <td>{d.medication}</td>
                                        </tr>)
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", padding: "1rem" }}>
                        <h1 style={{ fontSize: '2rem' }}>Medical History</h1>

                        <table style={{ borderCollapse: "collapse" }}>
                            <thead>
                                <tr>
                                    <th className="">Disease</th>
                                    <th className="">Diagnosed Date</th>
                                    <th className="">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cookies['temporary']["medicalhistory"].map((d) => (
                                    (d !== 'undefined' &&
                                        <tr>
                                            <td>{d.disease}</td>
                                            <td>{d.time}</td>
                                            <td>{d.solved}</td>
                                        </tr>)
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", padding: "1rem" }}>
                        <h1 style={{ fontSize: '2rem' }}>Hospitalization History</h1>

                        <table style={{ borderCollapse: "collapse" }}>
                            <thead>
                                <tr>
                                    <th className="">Admitted On</th>
                                    <th className="">Discharged On</th>
                                    <th className="">Reason</th>
                                    <th className="">Surgery</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cookies['temporary']["hospitalizationhistory"].map((d) => (
                                    (d !== 'undefined' &&
                                        <tr>
                                            <td>{d.datefrom}</td>
                                            <td>{d.dateto}</td>
                                            <td>{d.reason}</td>
                                            <td>{d.surgery}</td>
                                        </tr>)
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", padding: "1rem" }}>
                    <h1 style={{ fontSize: '2rem' }}>Checkup History</h1>

                    <table style={{ borderCollapse: "collapse" }}>
                        <thead>
                            <tr>
                                <th className="">Name Of Professional</th>
                                <th className="">Date Of Visit</th>
                                <th className="">Reason?</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cookies['temporary']["visit"].map((d) => (
                                (d !== 'undefined' &&
                                    <tr>
                                        <td>{d.name}</td>
                                        <td>{d.date}</td>
                                        <td>{d.reason}</td>
                                    </tr>)
                            ))}
                        </tbody>
                    </table>
                </div>
                <Footer />
            </div>
        </div >

    )
}

export default PatientInfo;