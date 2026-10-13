import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
export default class DoctoresComponent extends Component {
  state = {
    doctores: [],
  };
  generarDoctores = () => {
    let url = Global.urlDoctores;
    let request = "api/Doctores/DoctoresHospital/" + this.props.idHospital;
    axios.get(url + request).then((response) => {
      console.log(response.data);
      this.setState({
        doctores: response.data,
      });
    });
  };
  componentDidUpdate = (oldProps) => {
    if (oldProps.idHospital != this.props.idHospital) {
      this.generarDoctores();
    }
  };
  componentDidMount = () => {
    this.generarDoctores();
  };
  render() {
    return (
      <div> 
        <h1>Doctores {this.props.idHospital}</h1>
        <div className="table-responsive">
          <table className="table table-striped table-hover table-bordered">
            <thead className="table-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Especialidad</th>
              </tr>
            </thead>
            <tbody>
              {this.state.doctores.map((doctor, index) => (
                <tr key={doctor.idDoctor || index}>
                  <td>{doctor.idDoctor}</td>
                  <td>{doctor.apellido}</td>
                  <td>{doctor.especialidad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
