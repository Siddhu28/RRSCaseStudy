import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import deleteIcon from "../../src/resources/trash-2 (1).svg";

const Train = props => (
  <tr>
    <td> {props.train.trainId} </td>
    <td> {props.train.trainName} </td>
    <td> {props.train.startStation} </td>
    <td> {props.train.endStation} </td>
    </tr>
  
  
);
class TrainList extends Component {
  constructor(props) {
    super(props);
    this.state = { traintickets: [] };
  }

  //Get the train ticket details from the database
  componentDidMount() {
    axios
      .get("http://localhost:9030/search/allTrains")
      .then(response => {
        this.setState({ traintickets: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  trainList() {
    return this.state.traintickets.map(function(currentTrain, i) {
      return <Train train={currentTrain} key={i} />;
    });
  }



  render() {
    return (
      <div>
        
        <h3><strong> Trains </strong></h3>
        {/* <table bordercolor=" black " bgcolor="#E6E0D4" className="table table-striped" style={{ marginTop: 0 }}> */}
        <table class="table">
  <thead class="table-dark"></thead>
  <tbody></tbody>

          <thead>
            <tr>
              <th> TrainID </th>
              <th> Train Name </th>
              <th> Source </th>
              <th> Destination </th>
            </tr>
          </thead>
          <tbody>{this.trainList()}</tbody>
        </table>
      </div>
    );
  }
}

export default TrainList;
