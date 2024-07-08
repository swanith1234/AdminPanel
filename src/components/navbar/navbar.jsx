import React from "react";
import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import CropFreeOutlinedIcon from "@mui/icons-material/CropFreeOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import InsertEmoticonOutlinedIcon from "@mui/icons-material/InsertEmoticonOutlined";
import Badge from "@mui/material/Badge";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { blue } from "@mui/material/colors";

export default function Navbar() {
  return (
    <>
      <div className="Navbar position-fixed end-0 top-0  w-75 ">
        <div className="placeholder">
          <input type="text" placeholder="search.." id="input" />
          <SearchIcon className="icon fs-2" />
        </div>
        <div className="nav-right-icons">
          <div className="icon">
            <LanguageIcon />
            English
          </div>
          <div className="icon">
            <DarkModeOutlinedIcon />
          </div>
          <div className="icon">
            <CropFreeOutlinedIcon />
          </div>
          <div className="icon">
            <Badge badgeContent={4} color="error">
              <NotificationsActiveOutlinedIcon />
            </Badge>
          </div>
          <div className="icon">
            <Badge badgeContent={4} color="error">
              <ChatBubbleOutlineOutlinedIcon />
            </Badge>
          </div>

          <div className="icon">
            <ListOutlinedIcon />
          </div>
          <div className="icon">
            <img
              src="https://www.filmfare.com/awards/filmfare-awards-south-2017/images/nominations/allu-arjun.jpg"
              alt="profile"
            />
          </div>
        </div>
      </div>{" "}
    </>
  );
}
