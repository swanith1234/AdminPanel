import React from "react";
import "./widgets.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PersonPinTwoToneIcon from "@mui/icons-material/PersonPinTwoTone";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
export default function Widgets({ type }) {
  var data;
  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "see all users",
        icon: (
          <PersonPinTwoToneIcon
            className="icon"
            style={{
              backgroundColor: "#D5939C",
              fontSize: "2rem",
              color: "#D42038",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "#58B960",
              fontSize: "2rem",
              color: "green",
            }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "see details",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            style={{
              backgroundColor: "#baaed5",
              fontSize: "2rem",
              color: "#972A57",
            }}
            className="icon"
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDER",
        isMoney: false,
        link: "view all orders",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "#E8D754",
              fontSize: "2rem",
              color: "yellow",
            }}
          />
        ),
      };
  }

  return (
    <>
      <div className="widget mt-3">
        <div className="left">
          <div className="widget-title">{data.title}</div>
          <div className="counter">
            {data.isMoney && "$"}
            {amount}
          </div>
          <div className="link">{data.link}</div>
        </div>
        <div className="right">
          <div className="percentage positive">
            <KeyboardArrowUpIcon />
            20%
          </div>
          <div className="icon">{data.icon}</div>
        </div>
      </div>
    </>
  );
}
