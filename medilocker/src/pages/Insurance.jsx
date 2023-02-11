import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import styles from "./MyForm.module.css";
// import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";
import Web3 from "web3";
import contract from "../contracts/cruds.json";
import { useCookies } from "react-cookie";

const Insurance = () => {
  const [cookies, setCookie] = useCookies();

  const [addFormData, setAddFormData] = useState({
    company: "",
    policyNo: "",
    expiry: ""
  });

  const [editFormData, setEditFormData] = useState({
    company: "",
    policyNo: "",
    expiry: ""
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    const newFormData = { ...addFormData };
    newFormData[event.target.name] = event.target.value;
    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };


  async function submit() {
    var accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    var currentaddress = accounts[0];

    const web3 = new Web3(window.ethereum);
    const mycontract = new web3.eth.Contract(contract['abi'], contract['networks']['5777']['address']);
    // console.log(mycontract);

    mycontract.methods.getdata().call().then(res => {
      for (let i = 0; i < res.length; i++) {
        var data = JSON.parse(res[i]);
        // console.log(data['mail']);
        if (data['mail'] === cookies['mail']) {
          data['insurance'].push(addFormData)

          mycontract.methods.updateData(parseInt(cookies['index']), JSON.stringify(data)).send({ from: currentaddress }).then(() => {
            alert("Insurance Saved");
            var data = cookies['insurance'];
            data.push(addFormData);
            setCookie('insurance', data);
          }).catch((err) => {
            console.log(err);
          })

          break;
        }
      }
    })

  }

  async function show() {
    cookies['insurance'].map(data => {
      console.log(data);
    })
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "1rem" }}>
      <form>
        <table style={{ borderCollapse: "collapse", width: "10%" }}>
          <thead>
            <tr>
              <th className={styles.thh}>Policy Number</th>
              <th className={styles.thh}>Company</th>
              <th className={styles.thh}>Expiry</th>
              {/* <th className={styles.thh}>Email</th>
              <th className={styles.thh}>Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {cookies['insurance'].map((contact) => (
              <tr>
                <td>{contact.policyNo}</td>
                <td>{contact.company}</td>
                <td>{contact.expiry}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </form>

      <h2>Add a Contact</h2>
      <form>
        <input
          type="text"
          name="company"
          required="required"
          placeholder="Taken from which company?"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="policyNo"
          required="required"
          placeholder="Policy No."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="expiry"
          required="required"
          placeholder="Expiry Date"
          onChange={handleAddFormChange}
        />
        {/* <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter an email..."
          onChange={handleAddFormChange}
        /> */}
        <input type="button" value="Save" onClick={submit} />
        {/* <input type="button" value="Show" onClick={show} /> */}
      </form>
    </div>
  );
};

export default Insurance;