import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { retrieveData, deleteData } from "./actions";
import Table from 'react-bootstrap/Table'

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
      <div className="list row" >
        <div className="col-md-6">
          <h4>Data List</h4>
          <div>
            <Link to="/add-data">
              <button className="button-primary">Add data</button>
            </Link>
          </div>
          <Table striped bordered hover variant="dark" responsive="sm">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Address</th>
                <th>Nation</th>
                <th>Photo</th>
                <th>Gpa</th>
                <th>About Me</th>
                <th>Skill</th>
                <th>Project</th>
                <th>Viedolink</th>
                <th>Experience</th>
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
                      <td><img src={photo} width="100" height="100" /></td>
                      <td>{gpa}</td>
                      <td>{about_me}</td>
                      <td>{skill}</td>
                      <td>{project}</td>
                      <td>{viedolink}</td>
                      <td>{experience}</td>
                      <td>

                        <button onClick={() => this.removePet(id)} className="btn btn-primary" type="submit">
                          Delete
                        </button>
                        <Link to={`/edit-data/${id}`}>
                          <button className="btn btn-primary">Edit</button>
                        </Link>
                      </td>

                    </tr>
                  )
                )}
            </tbody>
          </Table>
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
