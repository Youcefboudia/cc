import React from "react";
import { Link } from "react-router-dom";


export default () => {
  return (
    <>
      <div className=" container  p-a cntr"style={{ width: "1000px" }} >
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="card shadow">
              <div className="card-body p-5">
                <h1 className="mb-4">Create your account</h1>
                <form>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Your usrname address"
                    />

                    <label htmlFor="floatingInput">Username</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                    />
                    <label htmlFor="floatingPassword">Password</label>
                  </div>
                  {/* <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="floatingConfirmPassword"
                      placeholder="Confirm password"
                    />
                    <label htmlFor="floatingConfirmPassword">
                      Confirm password
                    </label>
                  </div> */}
                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      I agree to the Terms and Conditions
                    </label>
                  </div>
                  <div className="d-grid">
                    <button className="btn btn-primary" type="submit">
                      LOGIN
                    </button>
                  </div>
                </form>
                <hr className="my-4" />
                <p>
                  {/* Already have an account? <a href="#">SIGN up</a> */}
                  Already have an account? <Link to={'/sign'}  >SIGN UP</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};
