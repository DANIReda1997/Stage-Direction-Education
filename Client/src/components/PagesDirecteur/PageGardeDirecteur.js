import React, { Component } from "react";
import { getResponsables, getProfesseurs } from "../../action/userActions";
import { connect } from "react-redux";
import SingleUserComponentwithoutcheck from "../SingleUserComponent/SingleUserComponentwithoutcheck";
class PageGardeDirecteur extends Component {
  componentDidMount() {
    this.props.getProfesseurs(localStorage.getItem("id_directeur"));
    this.props.getResponsables(localStorage.getItem("id_directeur"));
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.responsables[0] === undefined) {
      return false;
    }
    return true;
  }

  render() {
    const { professeurs } = this.props;
    const { responsables } = this.props;

    return (
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
                <SingleUserComponentwithoutcheck
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
                <SingleUserComponentwithoutcheck
                  key={responsable.id}
                  manifestant={responsable}
                  type="responsable"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  professeurs: state.user.professeurs,
  responsables: state.user.responsables
});

export default connect(
  mapStateToProps,
  { getProfesseurs, getResponsables }
)(PageGardeDirecteur);
