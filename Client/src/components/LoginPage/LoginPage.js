import React, { Component } from "react";
import axios from "axios";
import TextInputGroup from "../layout/TextInputGroup";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { adminlogin } from "../../action/adminActions";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: "",
      errors: "",
      noUserError: "",
      noAdminError: "",
      modalAppear: false,
      errorsAdmin: "",
      loginAdmin: "",
      passwordAdmin: ""
    };
  }
  onSubmit = async e => {
    e.preventDefault();
    this.setState({
      noUserError: "",
      errors: {}
    });
    const { login, password } = this.state;
    // Check For Errors
    if (login === "") {
      this.setState({
        errors: { login: "Login is required" }
      });
      return;
    }

    if (password === "") {
      this.setState({
        errors: { password: "Password is required" }
      });
      return;
    }

    // this.props.Login(login, password);
    // const { directeur } = this.props;

    const response = await axios.get(
      `http://localhost:8080/directeur/${login}/${password}`
    );
    const id_directeur = response.data.id;

    // Clear State
    this.setState({
      login: "",
      password: "",
      errors: {},
      noUserError: ""
    });
    if (!id_directeur) {
      this.setState({
        noUserError: "Login ou Password incorrecte"
      });
      return;
    } else {
      localStorage.setItem("id_directeur", id_directeur);
      this.props.history.push("/PageGardeDirecteur");
    }
  };

  handleShow = () => {
    this.setState({
      modalAppear: true
    });
  };
  handleClose = () => {
    this.setState({
      errorsAdmin: "",
      loginAdmin: "",
      passwordAdmin: "",
      noAdminError: "",
      modalAppear: false
    });
  };

  onSubmitAdmin = async e => {
    this.setState({
      errorsAdmin: {}
    });
    const { loginAdmin, passwordAdmin } = this.state;
    // Check For Errors
    if (loginAdmin === "") {
      this.setState({
        errorsAdmin: { loginAdmin: "Login is required" }
      });
      return;
    }

    if (passwordAdmin === "") {
      this.setState({
        errorsAdmin: { passwordAdmin: "Password is required" }
      });
      return;
    }

    await this.props.adminlogin(loginAdmin, passwordAdmin);

    if (this.props.adminCo.id === undefined) {
      this.setState({
        noAdminError: "No Admin !!"
      });
      return;
    }

    // Clear State
    this.setState({
      loginAdmin: "",
      passwordAdmin: "",
      errorsAdmin: {},
      noAdminError: ""
    });
    this.props.history.push("/PageGardeAdmin");
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    const {
      login,
      password,
      errors,
      noUserError,
      noAdminError,
      modalAppear,
      loginAdmin,
      passwordAdmin,
      errorsAdmin
    } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">Login Page</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <TextInputGroup
              label="Login"
              name="login"
              placeholder="Enter Login"
              value={login}
              onChange={this.onChange}
              error={errors.login}
            />
            <TextInputGroup
              label="Password"
              name="password"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={this.onChange}
              error={errors.password}
            />
            {noUserError}
            <div className="invalid-feedback">{noUserError}</div>
            <input
              type="submit"
              value="Login"
              className="btn btn-primary btn-block"
            />
            <Button
              className="btn btn-secondary btn-block"
              onClick={this.handleShow}
            >
              Admin
            </Button>
          </form>
        </div>
        <Modal show={modalAppear} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login Admin</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="card mb-3">
              <div className="card-body">
                <TextInputGroup
                  label="Login"
                  name="loginAdmin"
                  placeholder="Enter Login"
                  value={loginAdmin}
                  onChange={this.onChange}
                  error={errorsAdmin.loginAdmin}
                />
                <TextInputGroup
                  label="Password"
                  name="passwordAdmin"
                  type="password"
                  placeholder="Enter Password"
                  value={passwordAdmin}
                  onChange={this.onChange}
                  error={errorsAdmin.passwordAdmin}
                />
                {noAdminError}
                <div className="invalid-feedback">{noAdminError}</div>
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-primary btn-block"
                  onClick={this.onSubmitAdmin}
                />
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

// const mapStateToProps = state => ({
//   id_directeur: state.user.id_directeur
// });

// export default connect(
//   mapStateToProps,
//   { Login }
// )(LoginPage);

const mapStateToProps = state => ({
  adminCo: state.admin.adminCo
});

export default connect(
  mapStateToProps,
  { adminlogin }
)(LoginPage);
