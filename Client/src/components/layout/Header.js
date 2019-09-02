import { Link } from "react-router-dom";
import { connect } from "react-redux";
import React, { Component } from "react";
import { isThereaStrick } from "../../action/strickActions";
class Header extends Component {
  state = {
    clicked: true
  };
  componentWillMount() {
    this.props.isThereaStrick();
  }

  homeClicked = e => {
    localStorage.removeItem("id_directeur");
    this.setState({ clicked: !this.clicked });
  };

  render() {
    const { branding, LeStrick } = this.props;
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
        <div className="container">
          <a href="/" className="navbar-brand">
            {branding}
          </a>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item" onClick={this.homeClicked}>
                <Link to="/" className="nav-link">
                  <i className="fas fa-home" /> Home
                </Link>
              </li>
              {LeStrick !== -1 &&
                localStorage.getItem("id_directeur") !== null && (
                  <li className="nav-item">
                    <Link to="/AddGreve" className="nav-link">
                      <i className="fas fa-plus" /> Add
                    </Link>
                  </li>
                )}
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  <i className="fas fa-question" /> About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  LeStrick: state.strick.isthereastrick,
  professeurs: state.user.professeurs
});

export default connect(
  mapStateToProps,
  { isThereaStrick }
)(Header);
