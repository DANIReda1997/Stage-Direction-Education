import React, { Component } from "react";
import {
  getResponsables,
  appliquerManifestantsGreve,
  getProfesseurs
} from "../../action/userActions";
import { connect } from "react-redux";
import SingleUserComponent from "../SingleUserComponent/SingleUserComponent";
class AddGreve extends Component {
  componentDidMount() {
    this.props.getProfesseurs(localStorage.getItem("id_directeur"));
    this.props.getResponsables(localStorage.getItem("id_directeur"));
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.appliquerManifestantsGreve(
      this.props.professeursengreve.concat(this.props.responsablesengreve)
    );
    this.props.history.push("/PageGardeDirecteur");
  };
  render() {
    const { professeurs } = this.props;
    const { responsables } = this.props;
    const { professeursengreve } = this.props;
    const { responsablesengreve } = this.props;
    console.log(professeursengreve);
    console.log(responsablesengreve);
    return (
      <form onSubmit={this.onSubmit}>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <h4 className="display-4 mb-2">
                <span className="text-danger">Professeurs</span> List
              </h4>
              <div
                style={{ overflowX: "auto", fontSize: "14px", height: "400px" }}
              >
                {professeurs.map(professeur => (
                  <SingleUserComponent
                    key={professeur.id}
                    manifestant={professeur}
                    type="professeur"
                  />
                ))}
              </div>
            </div>
            <div className="col-sm-6">
              <h4 className="display-4 mb-2">
                <span className="text-danger">Responsables</span> List
              </h4>
              <div
                style={{ overflowX: "auto", fontSize: "14px", height: "400px" }}
              >
                {responsables.map(responsable => (
                  <SingleUserComponent
                    key={responsable.id}
                    manifestant={responsable}
                    type="responsable"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="row">
                <div className="col-sm-6">
                  <strong>Statistique :</strong>
                </div>
                <div className="col-sm-6">
                  {professeursengreve.length} / {professeurs.length}
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="row">
                <div className="col-sm-6">
                  <strong>Statistique :</strong>
                </div>
                <div className="col-sm-6">
                  {responsablesengreve.length} / {responsables.length}
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <input
              type="submit"
              value="Ajouter"
              className="btn btn-success btn-block"
            />
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  professeurs: state.user.professeurs,
  responsables: state.user.responsables,
  professeursengreve: state.user.professeursengreve,
  responsablesengreve: state.user.responsablesengreve
});

export default connect(
  mapStateToProps,
  { getProfesseurs, getResponsables, appliquerManifestantsGreve }
)(AddGreve);
