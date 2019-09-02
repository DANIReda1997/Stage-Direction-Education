import React, { Component } from "react";
import "../../css/checkbox.css";
import { setManifestantEnGreve } from "../../action/userActions";
import { connect } from "react-redux";

class SingleUserComponent extends Component {
  state = {
    showUserInfo: false,
    ischecked: false
  };

  handleChange = (id, e) => {
    if (this.state.ischecked === false)
      this.props.setManifestantEnGreve(id, "add", this.props.type);
    else this.props.setManifestantEnGreve(id, "remove", this.props.type);
    this.setState({ ischecked: e.target.checked });
  };

  render() {
    const { type } = this.props;
    var afficherType;
    const { id, nom, prenom, datenaissance } = this.props.manifestant;
    if (type === "professeur") {
      afficherType = this.props.manifestant.specialite;
    }
    if (type === "responsable") {
      afficherType = this.props.manifestant.fonction;
    }
    const { showUserInfo } = this.state;
    return (
      <div className="card card-body mb-3">
        <h4>
          {nom} {prenom}{" "}
          <i
            onClick={() =>
              this.setState({
                showUserInfo: !this.state.showUserInfo
              })
            }
            className="fas fa-sort-down"
            style={{ cursor: "pointer" }}
          />
          <div className="page" style={{ float: "right" }}>
            <div className="page__demo">
              <div className="page__toggle">
                <label className="toggle">
                  <input
                    onChange={this.handleChange.bind(this, id)}
                    checked={this.state.ischecked}
                    className="toggle__input"
                    type="checkbox"
                  />
                  <span className="toggle__label">
                    <span className="toggle__text" />
                  </span>
                </label>
              </div>
            </div>
          </div>
        </h4>
        {showUserInfo ? (
          <ul className="list-group">
            <li className="list-group-item">
              Date Naissance : {datenaissance}
            </li>
            <li className="list-group-item">
              {type === "professeur" ? "Specialite" : "Fonction"} :{" "}
              {afficherType}
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  professeursengreve: state.user.professeursengreve,
  responsablesengreve: state.user.responsablesengreve
});

export default connect(
  mapStateToProps,
  { setManifestantEnGreve }
)(SingleUserComponent);
