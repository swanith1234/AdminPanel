import React from "react";
import Singlepage from "../../components/singlepage/singlepage";
import { useLocation } from "react-router-dom";
export default function Single(props) {
  const location = useLocation();
  console.log(props, "props");
  console.log(location, "location hook");
  return (
    <div>
      <Singlepage
        name={location.state.name}
        email={location.state.email}
      ></Singlepage>
    </div>
  );
}
