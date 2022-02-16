import React, { Component } from "react";
import { connect } from "react-redux";
import { createData } from "../redux_portfolio/actions";
import { Redirect } from "react-router-dom";

class AddData extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone_number = this.onChangePhone_number.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeNation = this.onChangeNation.bind(this);
        this.onChangePhoto = this.onChangePhoto.bind(this);
        this.onChangeGpa = this.onChangeGpa.bind(this);
        this.onChangeAbout_me = this.onChangeAbout_me.bind(this);
        this.onChangeSkill = this.onChangeSkill.bind(this);
        this.onChangeProject = this.onChangeProject.bind(this);
        this.onChangeViedolink = this.onChangeViedolink.bind(this);
        this.onChangeExperience = this.onChangeExperience.bind(this);

        this.saveData = this.saveData.bind(this);

        this.state = {
            value: '',
            name: "",
            age: "",
            gender: "",
            email: "",
            phone_number: "",
            address: "",
            nation: "",
            photo: "",
            gpa: "",
            about_me: "",
            skill: "",
            project: "",
            viedolink: "",
            experience: "",
        };
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value,
        });
    }

    onChangeAge(e) {
        this.setState({
            age: e.target.value,
        });
    }

    onChangeGender(e) {
        this.setState({
            gender: e.target.value,
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value,
        });
    }

    onChangePhone_number(e) {
        this.setState({
            phone_number: e.target.value,
        });
    }

    onChangeAddress(e) {
        this.setState({
            address: e.target.value,
        });
    }

    onChangeNation(e) {
        this.setState({
            nation: e.target.value,
        });
    }

    onChangePhoto(e) {
        this.setState({
            photo: e.target.value,
        });
    }

    onChangeGpa(e) {
        this.setState({
            gpa: e.target.value,
        });
    }

    onChangeAbout_me(e) {
        this.setState({
            about_me: e.target.value,
        });
    }

    onChangeSkill(e) {
        this.setState({
            skill: e.target.value,
        });
    }

    onChangeProject(e) {
        this.setState({
            project: e.target.value,
        });
    }

    onChangeViedolink(e) {
        this.setState({
            viedolink: e.target.value,
        });
    }

    onChangeExperience(e) {
        this.setState({
            experience: e.target.value,
        });
    }


    saveData() {
        const { name, age, gender, email, phone_number, address, nation, photo, gpa, about_me, skill, project, viedolink, experience } = this.state;
        this.props.createData(name, age, gender, email, phone_number, address, nation, photo, gpa, about_me, skill, project, viedolink, experience).then(() => {
            this.setState({
              redirect: true,
            });
          });
        console.log("yes")
    }

    render() {

        const { redirect } = this.state;


        if (redirect) {
            return <Redirect to="/" />;
          }

        return (
            <div className="submit-form">
                <div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"

                            value={this.state.name}
                            onChange={this.onChangeName}
                            name="name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Age</label>
                        <input
                            type="text"
                            className="form-control"
                            id="Age"

                            value={this.state.age}
                            onChange={this.onChangeAge}
                            name="Age"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Gender</label>
                        <input
                            type="text"
                            className="form-control"
                            id="gender"

                            value={this.state.gender}
                            onChange={this.onChangeGender}
                            name="gender"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Email</label>
                        <input
                            type="text"
                            className="form-control"
                            id="email"

                            value={this.state.email}
                            onChange={this.onChangeEmail}
                            name="email"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Phone number</label>
                        <input
                            type="text"
                            className="form-control"
                            id="phone_number"

                            value={this.state.phone_number}
                            onChange={this.onChangePhone_number}
                            name="phone_number"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Project</label>
                        <input
                            type="text"
                            className="form-control"
                            id="project"

                            value={this.state.project}
                            onChange={this.onChangeProject}
                            name="project"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Photo</label>
                        <input
                            type="text"
                            className="form-control"
                            id="photo"

                            value={this.state.photo}
                            onChange={this.onChangePhoto}
                            name="photo"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">About me</label>
                        <input
                            type="text"
                            className="form-control"
                            id="about_me"

                            value={this.state.about_me}
                            onChange={this.onChangeAbout_me}
                            name="about_me"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Address</label>
                        <input
                            type="text"
                            className="form-control"
                            id="address"

                            value={this.state.address}
                            onChange={this.onChangeAddress}
                            name="address"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Nation</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nation"

                            value={this.state.nation}
                            onChange={this.onChangeNation}
                            name="nation"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Gpa</label>
                        <input
                            type="text"
                            className="form-control"
                            id="gpa"

                            value={this.state.gpa}
                            onChange={this.onChangeGpa}
                            name="gpa"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Skill</label>
                        <input
                            type="text"
                            className="form-control"
                            id="skill"

                            value={this.state.skill}
                            onChange={this.onChangeSkill}
                            name="skill"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Viedolink</label>
                        <input
                            type="text"
                            className="form-control"
                            id="viedolink"

                            value={this.state.viedolink}
                            onChange={this.onChangeViedolink}
                            name="viedolink"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Experience</label>
                        <input
                            type="experience"
                            className="form-control"
                            id="viedolink"

                            value={this.state.experience}
                            onChange={this.onChangeExperience}
                            name="experience"
                        />
                    </div>

                    <button onClick={this.saveData} className="btn btn-success">
                        Submit
                    </button>

                </div>
            </div>
        );
    }
}

export default connect(null, { createData })(AddData);
