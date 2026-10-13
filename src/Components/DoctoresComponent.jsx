import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
import DoctorDetails from "./DoctorDetails";
export default class DoctoresComponent extends Component {
  state = {
    doctores: [],
    detailedDoctor: [],
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
  docDetails = (docID) => {
    axios.get(Global.urlDoctores + "api/doctores/" + docID).then((response) => {
      console.log(response.data);
      this.setState({ detailedDoctor: response.data });
      console.log(this.state.detailedDoctor);
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
                  <td>
                    <DoctorDetails
                      docID={doctor.idDoctor}
                      docDetails={this.docDetails}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <ul>
            {/* {this.state.detailedDoctor.map((doctor, key) => {
              return <li key={key}>{doctor.idDoctor}</li>;
            })} */}
          </ul>
        </div>
      </div>
    );
  }
}
