import React from "react";
import "./singlepage.scss";
import Chart from "../chart/chart";
import Table from "../table/table";
export default function Singlepage({ name, email }) {
  console.log(name, email);
  return (
    <>
      <div className="singlePage">
        <div className=" row singlePage-info">
          <div className="information col-md-5 position-relative">
            <div
              className="edit  position-absolute end-0 p-2 fs-5"
              style={{ backgroundColor: "#F3E5F5", color: "#6A1B9A" }}
            >
              Edit
            </div>
            <span className="title">Information</span>
            <div className="main-content ">
              <div className="profile-picture ">
                <img
                  className="profile-photo"
                  src="https://th.bing.com/th?id=OIP.AaziJpzVnHFJ5rRsZHK5KAHaNK&w=187&h=333&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                  alt="photo"
                />
              </div>
              <div className="content">
                <h1>{name}</h1>
                <div className="content-info">
                  <span>Email:{email}</span>
                  <span>Phone:+91 9347562927</span>
                  <span>
                    Address:Thavvaripalle,khajipet, kadapa Andhrapradesh-516203
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7 singlePage-chart">
            <Chart height={260} />
          </div>
        </div>

        <div className="data-container mt-3">
          <div>
            <span className="info">Latest Transactions</span>
          </div>
          <Table></Table>
        </div>
      </div>
    </>
  );
}
