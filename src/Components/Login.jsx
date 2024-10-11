import React from "react";
import "../App.css";
import { useForm } from "react-hook-form";

function Login() {
  const { register, handleSubmit } = useForm();
  const login = (data) => {
    console.log(data); // contains email and password
  };
  return (
    <div>
      <div className="container-fluid vh-100 vw-100">
        <div className="row h-100">
          <div
            className="col-md-4 d-none d-md-block bg-dark text-light d-flex flex-column justify-content-center align-items-center p-5"
            style={{ flex: "0 0 37%" }}
          >
            <div
              className="custom_design"
              style={{
                width: "100%",
                maxWidth: "500px",
                display: "flex",
                flexDirection: "column",
                marginTop: "103px",
              }}
            >
              <h1 className="display-4 fw-bold custom_size">Discover</h1>
              <h1 className="display-4 fw-bold custom_size">
                tailored events.
              </h1>
              <p className="display-4 fw-bold mt-3 custom_size">
                Sign in for personalized recommendations today!
              </p>
            </div>
          </div>

          <div
            className="col-md-8 d-flex justify-content-center align-items-center"
            style={{ flex: "0 0 63%" }}
          >
            <div
              className=" p-10"
              style={{
                width: "100%",
                maxWidth: "500px",
                display: "flex",
                flexDirection: "column",
                gap: "3vh",
              }}
            >
              <h3 className="text-center mb-4">Login</h3>

              <form
                onSubmit={handleSubmit(login)}
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5vh",
                }}
              >
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    E-mail Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    {...register("email", { required: true })}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter password"
                    {...register("password", { required: true })}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-dark w-100 custom_margin"
                >
                  Log In
                </button>
              </form>

              <div className="text-center my-2 d-flex align-items-center justify-content-center">
                OR
              </div>

              <div className="d-flex justify-content-around mb-3">
                <button className="btn custom_border w-45">
                  <img src="https://img.icons8.com/color/16/000000/google-logo.png" />{" "}
                  Sign in with Google
                </button>
              </div>

              <p className="text-center">
                Don't have an account? <a href="#">Create Account</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
