import React from "react";
import "./featured.scss";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
export default function Featured() {
  return (
    <div className="featured  ">
      <div className="top">
        <h6 className="ftitle">Total Revenue</h6>
        <MoreVertOutlinedIcon />
      </div>
      <div className="fbottom">
        <div className="featuredChart ">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="ftitle">Total sales made today</p>
        <p className="amount">$420</p>
        <p className="desc">
          Previou transactions processing.Last payments may not be included
        </p>
      </div>
      <div className="summary">
        <div className="item ">
          <div className="itemTitle"> Target</div>
          <div className="itemResult negative">
            <KeyboardArrowDownIcon fontSize="small" />
            <div className="resultAmount">$12.4k</div>
          </div>
        </div>
        <div className="item">
          <div className="itemTitle">Last Week</div>
          <div className="itemResult positive">
            <KeyboardArrowDownIcon fontSize="small" />
            <div className="resultAmount">$12.4k</div>
          </div>
        </div>
        <div className="item">
          <div className="itemTitle">Last Month</div>
          <div className="itemResult positive">
            <KeyboardArrowDownIcon fontSize="small" />
            <div className="resultAmount">$12.4k</div>
          </div>
        </div>
      </div>
    </div>
  );
}
