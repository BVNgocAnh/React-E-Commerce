import "./newUser.css";
import { useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { addCustomers } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
import app from "../../firebase";
export default function NewUser() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  console.log(inputs);

  const handleClick = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const customer = { ...inputs, image: downloadURL };
          addCustomers(customer, dispatch);
        });
      }
    );
    alert("Customer was added successfully");
  };
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Avatar</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className="newUserItem">
          <label>Username</label>
          <input
            name="username"
            type="text"
            placeholder="john"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input
            name="nameCus"
            type="text"
            placeholder="John Smith"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input
            name="emailCus"
            type="email"
            placeholder="john@gmail.com"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input
            name="password"
            type="password"
            placeholder="password"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input
            name="phoneCus"
            type="text"
            placeholder="+1 123 456 78"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input
            name="addressCus"
            type="text"
            placeholder="New York | USA"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <select name="sex" onChange={handleChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button onClick={handleClick} className="newUserButton">
          Create
        </button>
      </form>
    </div>
  );
}
