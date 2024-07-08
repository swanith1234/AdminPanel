import React from "react";
import "./home.scss";

import Widgets from "../../components/widgets/widgets";
import "bootstrap/dist/css/bootstrap.min.css";
import Featured from "../../components/featured/featured";
import Chart from "../../components/chart/chart";
import Table from "../../components/table/table";
export const Home = () => {
  return (
    <>
      <div className="container  ">
        <div className=" row widgets">
          <div className="col-md-3">
            <Widgets type="user"></Widgets>
          </div>
          <div className="col-md-3">
            <Widgets type="order"></Widgets>
          </div>
          <div className="col-md-3">
            <Widgets type="earning"></Widgets>
          </div>
          <div className="col-md-3">
            <Widgets type="balance"></Widgets>
          </div>
          <div className="charts row mt-3">
            <div className="col-md-5">
              <Featured></Featured>
            </div>
            <div className="col-md-7">
              <Chart height={500}></Chart>
            </div>
          </div>
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table></Table>
        </div>
      </div>
    </>
  );
};
