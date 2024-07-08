import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import StoreIcon from "@mui/icons-material/Store";
import PaymentIcon from "@mui/icons-material/Payment";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import SystemSecurityUpdateGoodIcon from "@mui/icons-material/SystemSecurityUpdateGood";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className="sidebar ">
      <div className="menu"></div>

      <div className="top ">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">lamaadmin</span>
        </Link>
      </div>

      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>

          <li>
            <Link to="/" style={{ textDecoration: "none" }}>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </Link>
          </li>
          <p className="title">LISTS</p>
          <li>
            <Link to="/users" style={{ textDecoration: "none" }}>
              <PersonIcon className="icon" />
              <span>Users</span>{" "}
            </Link>
          </li>
          <li>
            <Link to="/products" style={{ textDecoration: "none" }}>
              <StoreIcon className="icon" />
              <span>Products</span>
            </Link>
          </li>
          <li>
            <PaymentIcon className="icon" />
            <span>orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>delivery</span>
          </li>
          <p className="title">USEFUL</p>

          <li>
            <QueryStatsIcon className="icon" />
            <span>stats</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SystemSecurityUpdateGoodIcon className="icon" />
            <span>system health</span>
          </li>
          <li>
            <PsychologyIcon className="icon" />
            <span>logs</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleIcon className="icon" />
            <span>profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="coloroption"></div>
        <div className="coloroption"></div>
      </div>
    </div>
  );
}
