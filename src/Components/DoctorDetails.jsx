import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";
export default class DoctorDetails extends Component {
    handleDoc = () =>{
        this.props.docDetails(this.props.docID)
    }
  render() {
    return (
      <div>
        <button onClick={this.handleDoc} className="btn btn-primary">Detalles</button>
      </div>
    );
  }
}
