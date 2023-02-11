import React, { useState } from "react";
import ReactDOM from "react-dom";
import FormPage from "./FormPage";

const Input = () => {
  return <input placeholder="Your input here" />;
};

const Insurance = () => {
  const [inputList, setInputList] = useState([]);

  const onAddBtnClick = event => {
    setInputList(inputList.concat(<FormPage />));
  };

  return (
    <div>
      <FormPage/>
      {inputList}
      <div className="flex justify-center">
      <button className="text-black" onClick={onAddBtnClick}>Add input</button>
      {/* <button className="text-black" onClick={onDeleteBtnClick}>Delete input</button> */}
      </div>
      
      <div className="py-2 text-center">
        <button className="bg-cyan-400 text-white font-medium p-3">Submit</button>
        </div>
    </div>
    
  );
};

export default Insurance;