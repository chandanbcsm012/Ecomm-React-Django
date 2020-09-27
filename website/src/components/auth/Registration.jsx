import React, { Component } from "react";
import Footer from "../common/Footer";
import Banner from "../common/Banner";

export class Registration extends Component {
  render() {
    return (
      <>
        <Banner title={"Register"} />
        <section className="login_box_area section_gap">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="login_form_inner">
                  <h3>Registration</h3>
                  <form
                    className="row login_form"
                    action="contact_process.php"
                    method="post"
                    id="contactForm"
                    novalidate="novalidate"
                  >
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="first_name"
                        name="first_name"
                        placeholder="First Name"
                        // onfocus="this.placeholder = ''"
                        // onblur="this.placeholder = 'Username'"
                      />
                    </div>

                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="last_name"
                        name="last_name"
                        placeholder="Last Name"
                        // onfocus="this.placeholder = ''"
                        // onblur="this.placeholder = 'Username'"
                      />
                    </div>

                    <div className="col-md-12 form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="uasername"
                        name="username"
                        placeholder="Username"
                        // onfocus="this.placeholder = ''"
                        // onblur="this.placeholder = 'Username'"
                      />
                    </div>

                    {/* <div className="col-md-6 form-group">
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="phone"
                        placeholder="Phone"
                        // onfocus="this.placeholder = ''"
                        // onblur="this.placeholder = 'Username'"
                      />
                    </div> */}


                    <div className="col-md-12 form-group">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Email"
                        // onfocus="this.placeholder = ''"
                        // onblur="this.placeholder = 'Username'"
                      />
                    </div>

                    <div className="col-md-6 form-group">
                      <input
                        type="password"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Password"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Password'"
                      />
                    </div>

                    <div className="col-md-6 form-group">
                      <input
                        type="password"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Confirm Password"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Password'"
                      />
                    </div>

                    <div className="col-md-12 form-group">
                      <div className="creat_account">
                        <input type="checkbox" id="f-option2" name="selector" />
                        <label for="f-option2">T&C</label>
                      </div>
                    </div>
                    <div className="col-md-12 form-group">
                      <button
                        type="submit"
                        value="submit"
                        className="primary-btn"
                      >
                        Register
                      </button>
                      <a href="/#">Forgot Password?</a>
                    </div>
                  </form>
                </div>
              </div>

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
                  </div>
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

export default Registration;
