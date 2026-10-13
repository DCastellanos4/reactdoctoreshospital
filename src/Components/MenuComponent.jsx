import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Global from "../Global";
import axios from "axios";
export default class HomeComponent extends Component {
  state = {
    hospitales: [],
  };
  cargarHospital = () => {
    let url = Global.urlHospital;
    let request = "api/hospitales";
    axios.get(url + request).then((response) => {
      console.log("Datos de la API:", response.data);
      this.setState({
        hospitales: response.data,
      });
    });
  };
  componentDidMount = () => {
    this.cargarHospital();
  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home <span className="sr-only"></span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/doctores/">
                Doctores
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Hospitales
              </a>
              <ul className="dropdown-menu">
                {this.state.hospitales.map((index, key) => {
                  return (
                    <li key={key}>
                      <NavLink
                        className="dropdown-item"
                        to={"/doctores/" + index.idHospital}
                      >
                        {index.idHospital} |{index.nombre}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
