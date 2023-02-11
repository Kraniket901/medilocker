import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { IoIosMore } from "react-icons/io";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { Stacked, Pie, Button, LineChart, SparkLine } from "../components";
import {
  earningData,
  medicalproBranding,
  recentTransactions,
  weeklyStats,
  dropdownData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import product9 from "../data/product9.jpg";

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent
      id="time"
      fields={{ text: "Time", value: "Id" }}
      style={{ border: "none", color: currentMode === "Dark" && "white" }}
      value="1"
      dataSource={dropdownData}
      popupHeight="220px"
      popupWidth="120px"
    />
  </div>
);

const MyProfile = () => {
  const { currentColor, currentMode } = useStateContext();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [acceptedTerms, setAcceptedTerms] = React.useState(false);

  const handleSubmit = (event) => {
    console.log(`
      Email: ${email}
      Password: ${password}
      Accepted Terms: ${acceptedTerms}
    `);

    event.preventDefault();
  }

  return (
    <div className="flex relative dark:bg-main-dark-bg">
        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
          <Sidebar />
        </div>
      <div
        className={
          "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
        }
      >
        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
          <Navbar />
        </div>
        <div className="mt-24">
          <div className="flex justify-center ">
            <h1>My Profile</h1>
            <form onSubmit={handleSubmit} className=" p-5">
      <h1 className="text-center text-lg">User Profile</h1>
        <div className="py-2">
        <label>
        Email:
        <input
        id="inp"
        style={{padding:"10px", margin:"10px"}}
          name="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          disabled
          required />
      </label>
      <input id="edit" type="button" value="Edit"></input>
        </div>

        <div className="py-2">
        <label>
        Password:
        <input
        style={{padding:"10px", margin:"10px"}}
          name="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required />
      </label>
        </div>

        <div className="py-2">
        <label>
        Field 1:
        <input
        id="readonlyy"
        style={{padding:"10px", margin:"10px"}}
          name="password"
          type="text"
          value="3"
          class="field left"
          readOnly
          onChange={e => setPassword(e.target.value)}
          required />
      </label>
        </div>

        <div className="py-2">
        <label>
        Field 2:
        <input
        style={{padding:"10px", margin:"10px"}}
          name="password"
          type="text"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required />
      </label>
        </div>

        <div className="py-2">
        <label>
        Field 3:
        <input
        style={{padding:"10px", margin:"10px"}}
          name="password"
          type="text"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required />
      </label>
        </div>

        <div className="py-2">
        <label>
        Field 4:
        <input
        style={{padding:"10px", margin:"10px"}}
          name="password"
          type="text"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required />
      </label>
        </div>

        <div className="py-2">
        <label>
        Field 5:
        <input
        style={{padding:"10px", margin:"10px"}}
          name="password"
          type="text"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required />
      </label>
        </div>

        <div className="py-2">
        <label >
        <input
          
          name="acceptedTerms"
          type="checkbox"
          onChange={e => setAcceptedTerms(e.target.value)}
          required 
          />
        &nbsp; I accept the terms of service
      </label>
        </div>

        <div className="py-2">
        <button className="bg-cyan-400 text-white font-medium p-3">Submit</button>
        </div>
      
    </form>
        
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MyProfile;
