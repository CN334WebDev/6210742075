import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { retrieveData, deleteData } from "../redux_portfolio/actions";

class PetList extends Component {
  componentDidMount() {
    this.props.retrieveData();
  }

  removePet = (id) => {
    this.props.deleteData(id).then(() => {
      this.props.retrieveData();
    });
  };

  render() {
    const { data } = this.props;
    const dataFetch = data.data

    return (
      <div className="list row">
        <div className="col-md-6">
          <h4>Pet List</h4>
          <div>
            <Link to="/add-data">
              <button className="button-primary">Add pet</button>
            </Link>
          </div>
          <table className="u-full-width">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Email</th>
                <th>phone_number</th>
                <th>address</th>
                <th>nation</th>
                <th>photo</th>
                <th>gpa</th>
                <th>about_me</th>
                <th>skill</th>
                <th>project</th>
                <th>viedolink</th>
                <th>experience</th>
                <th>Action</th>

              </tr>
            </thead>
            <tbody>
              {dataFetch &&
                dataFetch.map(
                  ({ id, name, age, gender, email, phone_number, address, nation, photo, gpa, about_me, skill, project, viedolink, experience }, i) => (
                    <tr key={i}>
                      <td>{name}</td>
                      <td>{age}</td>
                      <td>{gender}</td>
                      <td>{email}</td>
                      <td>{phone_number}</td>
                      <td>{address}</td>
                      <td>{nation}</td>
                      <img src={photo} alt="Girl in a jacket" width="100" height="100"/>
                      <td>{gpa}</td>
                      <td>{about_me}</td>
                      <td>{skill}</td>
                      <td>{project}</td>
                      <td>{viedolink}</td>
                      <td>{experience}</td>
                      <td>
                        <button onClick={() => this.removePet(id)}>
                          Delete
                        </button>
                      </td>
                      
                    </tr>
                  )
                )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

export default connect(mapStateToProps, { retrieveData, deleteData })(PetList);
