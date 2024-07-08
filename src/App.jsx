import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Home } from "./pages/home/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Single from "./pages/single/single";
import New from "./pages/new/new";
import List from "./pages/list/list";
import Sidebar from "./components/sidebar/sidebar";
import Navbar from "./components/navbar/navbar";
import { userRows, userColumns } from "./components/datatable/datasource";

function App() {
  return (
    <>
      <Sidebar />
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="users">
          <Route index element={<List />}></Route>
          <Route path="userid" element={<Single />}></Route>
          <Route path="new" element={<New />}></Route>
        </Route>
        <Route path="products">
          <Route index element={<List />}></Route>
          <Route path=":productId" element={<Single />}></Route>
          <Route path="new" element={<New />}></Route>
        </Route>
      </Routes>
      \
    </>
  );
}

export default App;
