import React, { Component } from "react";
import { connect } from "react-redux";
import { getallecole } from "../../action/adminActions";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {
  peopleWhoStrock,
  isThereaStrickWithDate
} from "../../action/adminActions";
import { isThereaStrick, addStrick } from "../../action/strickActions";
import SingleUserComponentwithoutcheck from "../SingleUserComponent/SingleUserComponentwithoutcheck";
class PageGardeAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTable: false,
      modalAppear: false,
      description: "",
      theDate: ""
    };
  }

  async componentWillMount() {
    await this.props.getallecole();
    await this.props.isThereaStrick();
    let newDate = new Date();
    let separator = "-";
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    let all = `${year}${separator}${
      month < 10 ? `0${month}` : `${month}`
    }${separator}${date}`;
    await this.setState({
      theDate: all
    });
    await this.props.isThereaStrickWithDate(date, month, year);
  }

  clicked = (id, e) => {
    this.setState({
      modalAppear: true
    });
    let full = "";
    for (let i of Object.values(this.state.theDate)) {
      full += i;
    }
    const year = full.substring(0, 4);
    const month = full.substring(5, 7);
    const day = full.substring(8);
    this.props.peopleWhoStrock(id, day, month, year);
  };

  handleClose = () => {
    this.setState({
      modalAppear: false
    });
  };

  ajouterGreve = async e => {
    await this.props.addStrick(this.props.adminCo, this.state.description);
    let full = "";
    for (let i of Object.values(this.state.theDate)) {
      full += i;
    }
    const year = full.substring(0, 4);
    const month = full.substring(5, 7);
    const day = full.substring(8);
    await this.props.isThereaStrickWithDate(day, month, year);
  };

  onChange = e => {
    this.setState({
      description: e.target.value
    });
  };

  handleDateChange = async e => {
    await this.setState({
      theDate: [e.target.value]
    });
    let full = "";
    for (let i of Object.values(this.state.theDate)) {
      full += i;
    }
    const year = full.substring(0, 4);
    const month = full.substring(5, 7);
    const day = full.substring(8);
    await this.props.isThereaStrickWithDate(day, month, year);
  };

  render() {
    const {
      lesEcoles,
      ThePeopleWhoStrock,
      isthereastrick,
      is_there_a_strick_with_date
    } = this.props;
    const { modalAppear, description, theDate } = this.state;
    console.log(theDate);

    console.log(is_there_a_strick_with_date);
    return (
      <div>
        <div className="container">
          {isthereastrick === -1 ? (
            <div>
              <div className="row">
                <div className="col-sm-6">
                  <h4>Pas De Greve Aujourdh'hui,ajouter une !</h4>
                </div>
                <div className="col-sm-4">
                  <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    onChange={this.onChange}
                    value={description}
                    className="form-control form-control-lg"
                  />
                </div>
                <div className="col-sm-2">
                  <button
                    onClick={this.ajouterGreve}
                    className="btn btn-success"
                  >
                    Ajouter !
                  </button>
                </div>
              </div>
            </div>
          ) : null}
          <div className="row">
            <div className="col-sm-6">
              <input
                type="date"
                onChange={this.handleDateChange}
                name="theDate"
                value={theDate}
              />
            </div>
          </div>
        </div>
        <br />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id Ecole</th>
              <th scope="col">Nom</th>
              <th scope="col">Adresse</th>
              <th scope="col">Show</th>
            </tr>
          </thead>
          <tbody>
            {lesEcoles.map(ecole => (
              <tr key={ecole.id}>
                <th scope="row">{ecole.id}</th>
                <td>{ecole.nom}</td>
                <td>{ecole.adresse}</td>
                <td>
                  {is_there_a_strick_with_date !== -1 ? (
                    <button
                      className="btn btn-primary"
                      onClick={this.clicked.bind(this, ecole.id)}
                    >
                      Show
                    </button>
                  ) : (
                    <div>No Greve</div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Modal size="lg" show={modalAppear} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login Admin</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <h4 className="display-4 mb-2">
                    <span className="text-danger">Professeurs</span>
                  </h4>
                  {ThePeopleWhoStrock.lesprofs.length > 0 ? (
                    <div
                      style={{
                        overflowX: "auto",
                        fontSize: "14px",
                        height: "400px"
                      }}
                    >
                      {ThePeopleWhoStrock.lesprofs.map(professeur => (
                        <SingleUserComponentwithoutcheck
                          key={professeur.id}
                          manifestant={professeur}
                          type="professeur"
                        />
                      ))}
                    </div>
                  ) : (
                    <div>Theres no one</div>
                  )}
                </div>

                <div className="col-sm-6">
                  <h5 className="display-4 mb-2">
                    <span className="text-danger">Responsables</span>
                  </h5>
                  {ThePeopleWhoStrock.lesresps.length > 0 ? (
                    <div
                      style={{
                        overflowX: "auto",
                        fontSize: "14px",
                        height: "400px"
                      }}
                    >
                      {ThePeopleWhoStrock.lesresps.map(responsable => (
                        <SingleUserComponentwithoutcheck
                          key={responsable.id}
                          manifestant={responsable}
                          type="responsable"
                        />
                      ))}
                    </div>
                  ) : (
                    <div>Theres no one</div>
                  )}
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lesEcoles: state.admin.lesEcoles,
  ThePeopleWhoStrock: state.admin.ThePeopleWhoStrock,
  isthereastrick: state.strick.isthereastrick,
  adminCo: state.admin.adminCo,
  is_there_a_strick_with_date: state.admin.is_there_a_strick_with_date
});

export default connect(
  mapStateToProps,
  {
    getallecole,
    peopleWhoStrock,
    isThereaStrick,
    addStrick,
    isThereaStrickWithDate
  }
)(PageGardeAdmin);
