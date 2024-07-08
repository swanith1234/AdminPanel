import React from "react";
import "./newpage.scss";
function displayImage(event) {
  console.log("hi");
  console.log(event.target.files[0]);
  let url = URL.createObjectURL(event.target.files[0]);
  console.log(url);
  document.querySelector(".photo-upload").src = url;
}
export default function Newpage() {
  return (
    <div className="newpage">
      <div className="newpage-top">
        <h1>Add New User</h1>
      </div>
      <div className="newpage-bottom">
        <div className="newpage-left">
          <input
            type="file"
            id="file"
            onChange={() => {
              displayImage(event);
            }}
          />
          <label htmlFor="file">
            <img
              className="photo-upload"
              src="https://static.thenounproject.com/png/625182-200.png"
              alt=""
            />
          </label>
        </div>
        <div className="newpage-right">
          <form action="" className="form">
            <label htmlFor="userName">Username</label>
            <input type="text" id="userName" />
            <label htmlFor="FullName">Fullname</label>
            <input type="text" id="FullName" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
            <label htmlFor="address">Address</label>
            <textarea id="adderess" />
            <label htmlFor="country">Country</label>
            <input type="input" id="country" />
            <div className="btn btn-primary w-25 mt-3">Submit</div>
          </form>
        </div>
      </div>
    </div>
  );
}
