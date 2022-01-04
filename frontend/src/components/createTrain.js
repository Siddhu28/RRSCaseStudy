import React, { Component } from "react";
import AdminNavigationBar from "../components/adminNavigationBar";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";

export default class CreateTrain extends Component {
  state = {
    trainId: "",
    trainName: "",
    startStation: "",
    endStation: "",
    isTrainCreated: false
  };

  handleTrainid = event => {
    const { value } = event.target;
    if (value != null) {
      this.setState({ trainId: value.toUpperCase() });
    }
  };


  handleTrainName = event => {
    const { value } = event.target;
    if (value != null) {
      this.setState({ trainName: value.toUpperCase() });
    }
  };

  handleDel = event => {
    sessionStorage.setItem('TRAINID',this.state.trainId);
  };

  handlestartStation = event => {
    const { value } = event.target;
    this.setState({ startStation: value.toUpperCase() });
  };

  handleendStation = event => {
    const { value } = event.target;
    this.setState({ endStation: value.toUpperCase() });
  };



  handleSubmit = event => {
    event.preventDefault();

    const newTrain = {
      trainId: this.state.trainId,
      trainName: this.state.trainName,
      startStation: this.state.startStation,
      endStation: this.state.endStation,
    
    };

    axios
      .post(
        "http://localhost:9030/trains/addTrain",
        newTrain
      )
      .then(response => response)
      .catch(error => error.message);

    window.alert("Train created successfully");

    this.setState({
        trainid: "",
        trainName: "",
        startStation: "",
        endStation: "",
    
      isTrainCreated: true
    });
  };
  render() {
    if (this.state.isTrainCreated) {
      return <Redirect to="/trainlist" />;
    }
    console.log(this.props.adminId === "");
    if (this.props.adminId === "") {
      return <Redirect to="/adminSignIn" />;
    }

    return (
      <div>
        <AdminNavigationBar />
        <div className="d-flex justify-content-center">
          <div className="card bg-light mb-3">
            <div className="card-header">
              <h3 className="d-flex justify-content-center">Create Train</h3>
            </div>
            <div className="card-body">
              <h5 className="card-title">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-row">
                    <div className="col">
                      <label htmlFor="trainNumber">Train Id</label>
                      <input
                        type="name"
                        className="form-control"
                        id="trainid"
                        onChange={this.handleTrainid}
                        value={this.state.trainId}
                        required
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="trainName">Train Name</label>
                      <input
                        type="name"
                        className="form-control"
                        id="trainName"
                        onChange={this.handleTrainName}
                        value={this.state.trainName}
                        required
                      />
                    </div>
                  </div>
                  <br />
                  <div className="form-row">
                    <div className="col">
                      <label htmlFor="inputState">Source</label>
                      <input
                        id="from"
                        className="form-control"
                        onChange={this.handlestartStation}
                        value={this.state.startStation}
                        required
                      />
                    </div>

                    <div className="col">
                      <label htmlFor="inputState">Destination</label>
                      <input
                        id="to"
                        className="form-control"
                        onChange={this.handleendStation}
                        value={this.state.endStation}
                        required
                      />
                    </div>
                  </div>
                  <br />
                
              
                  <br />
                  <div>
                    <button
                      type="submit"
                      value="createTicket"
                      className="btn btn-dark btn-lg btn-block"
                    >
                      Create Train
                    </button>
                    
                    <p>Delete Train?<Link to="/deleteTrain" onClick={this.handleDel}> Click Here</Link></p>
                  </div>
                </form>
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}