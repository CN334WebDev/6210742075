import React, { Component } from "react";
import { connect } from "react-redux";
import { updateData } from "../redux_portfolio/actions";
import { Redirect } from "react-router-dom";
import DataService from "./dataService";
import './AddData.css'


class EditPet extends Component {
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
            currentData: {
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
            },
            redirect: false,

        };
    }

    componentDidMount() {
        this.getData(window.location.pathname.replace("/edit-data/", ""));
    }

    onChangeName(e) {
        const name = e.target.value
        this.setState(function (prevState) {
            return {
                currentData: {
                    ...prevState.currentData,
                    name: name,
                },
            };
        });
    }

    onChangeAge(e) {
        const age = e.target.value
        this.setState(function (prevState) {
            return {
                currentData: {
                    ...prevState.currentData,
                    age: age,
                },
            };
        });
    }

    onChangeGender(e) {
        const gender = e.target.value
        this.setState(function (prevState) {
            return {
                currentData: {
                    ...prevState.currentData,
                    gender: gender,
                },
            };
        });
    }

    onChangeEmail(e) {
        const email = e.target.value
        this.setState(function (prevState) {
            return {
                currentData: {
                    ...prevState.currentData,
                    email: email,
                },
            };
        });
    }

    onChangePhone_number(e) {
        const phone = e.target.value
        this.setState(function (prevState) {
            return {
                currentData: {
                    ...prevState.currentData,
                    phone: phone,
                },
            };
        });
    }

    onChangeAddress(e) {
        const address = e.target.value
        this.setState(function (prevState) {
            return {
                currentData: {
                    ...prevState.currentData,
                    address: address,
                },
            };
        });
    }

    onChangeNation(e) {
        const nation = e.target.value
        this.setState(function (prevState) {
            return {
                currentData: {
                    ...prevState.currentData,
                    nation: nation,
                },
            };
        });
    }

    onChangePhoto(e) {
        const photo = e.target.value
        this.setState(function (prevState) {
            return {
                currentData: {
                    ...prevState.currentData,
                    photo: photo,
                },
            };
        });
    }

    onChangeGpa(e) {
        const gpa = e.target.value
        this.setState(function (prevState) {
            return {
                currentData: {
                    ...prevState.currentData,
                    gpa: gpa,
                },
            };
        });
    }

    onChangeAbout_me(e) {
        const about_me = e.target.value
        this.setState(function (prevState) {
            return {
                currentData: {
                    ...prevState.currentData,
                    about_me: about_me,
                },
            };
        });
    }

    onChangeSkill(e) {
        const skill = e.target.value
        this.setState(function (prevState) {
            return {
                currentData: {
                    ...prevState.currentData,
                    skill: skill,
                },
            };
        });
    }

    onChangeProject(e) {
        const project = e.target.value
        this.setState(function (prevState) {
            return {
                currentData: {
                    ...prevState.currentData,
                    project: project,
                },
            };
        });
    }

    onChangeViedolink(e) {
        const viedolink = e.target.value
        this.setState(function (prevState) {
            return {
                currentData: {
                    ...prevState.currentData,
                    viedolink: viedolink,
                },
            };
        });
    }

    onChangeExperience(e) {
        const experience = e.target.value
        this.setState(function (prevState) {
            return {
                currentData: {
                    ...prevState.currentData,
                    experience: experience,
                },
            };
        });
    }

    getData(id) {
        DataService.get(id).then((response) => {
            console.log(response.data)
            this.setState({
                currentData: response.data.portfolio,
            });
        });
    }

    saveData() {
        this.props
            .updateData(this.state.currentData.id, this.state.currentData)

        this.setState({
            redirect: true,
        });

    }

    render() {
        const { currentData } = this.state;

        if (this.state.redirect) {
            return <Redirect to="/" />;
        }

        return (
            <div className="container-addData">
            <h1>Edit Data</h1>
            <div className="container-box1">
            <div className="submit-form">
                <div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            value={currentData.name}
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

                            value={currentData.age}
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

                            value={currentData.gender}
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

                            value={currentData.email}
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

                            value={currentData.phone_number}
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

                            value={currentData.project}
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

                            value={currentData.photo}
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

                            value={currentData.about_me}
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

                            value={currentData.address}
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

                            value={currentData.nation}
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

                            value={currentData.gpa}
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

                            value={currentData.skill}
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

                            value={currentData.viedolink}
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

                            value={currentData.experience}
                            onChange={this.onChangeExperience}
                            name="experience"
                        />
                    </div>
                    <div className="button-container">
                    <button onClick={this.saveData} className="btn btn-success">
                        Submit
                    </button>
                    </div>

                </div>
            </div>
            </div>
            </div>
        );
    }
}

export default connect(null, { updateData })(EditPet);
