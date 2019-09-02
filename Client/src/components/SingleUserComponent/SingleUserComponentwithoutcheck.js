import React, { Component } from "react";

class SingleUserComponentwithoutcheck extends Component {
  state = {
    showUserInfo: false
  };

  render() {
    const { type } = this.props;
    var afficherType;
    const { nom, prenom, datenaissance } = this.props.manifestant;
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

export default SingleUserComponentwithoutcheck;
