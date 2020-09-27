import React, { Component } from "react";
import Footer from "../common/Footer";
import Banner from "../common/Banner";
import {Redirect} from "react-router-dom";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      login: false
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(e) {
    e.preventDefault();
    if (this.state.username === "Chandan" && this.state.password === "Chandan") {
      localStorage.setItem("token", "chandankumarsingh");
      this.setState({login:true})
    }
  }

  onValueChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    if(this.state.login){
      return <Redirect to="/" />
    }
    return (
      <>
        <Banner title={"Login"} />
        <section className="login_box_area section_gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="login_box_img">
                  <img
                    className="img-fluid"
                    src="../../assets/img/login.jpg"
                    alt=""
                  />
                  <div className="hover">
                    <h4>New to our website?</h4>
                    <p>
                      There are advances being made in science and technology
                      everyday, and a good example of this is the
                    </p>
                    <a className="primary-btn" href="registration.html">
                      Create an Account
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="login_form_inner">
                  <h3>Log in to enter</h3>
                  <form
                    className="row login_form"
                    id="contactForm"
                    onSubmit={this.formSubmit}
                  >
                    <div className="col-md-12 form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.onValueChange}
           
                      />
                    </div>
                    <div className="col-md-12 form-group">
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.onValueChange}
     
                      />
                    </div>
                    <div className="col-md-12 form-group">
                      <div className="creat_account">
                        <input type="checkbox" id="f-option2" name="selector" />
                        <label htmlFor={"f-option2"}>Keep me logged in</label>
                      </div>
                    </div>
                    <div className="col-md-12 form-group">
                      <button
                        type="submit"
                        value="submit"
                        className="primary-btn"
                      >
                        Log In
                      </button>
                      <a href="#">Forgot Password?</a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default Login;
