import React, { Component } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import MenuComponent from "./MenuComponent";
import Component404 from "./Component404";
import HomeComponent from "./HomeComponent";
import DoctoresComponent from "./DoctoresComponent";
export default class Router extends Component {
  render() {
    function DoctoresElement() {
      let { idHospital } = useParams();
      return <DoctoresComponent idHospital={idHospital} />;
    }
    return (
      <BrowserRouter>
        <MenuComponent />
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/doctores/:idHospital" element={<DoctoresElement />} />
          <Route path="*" element={<Component404 />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
