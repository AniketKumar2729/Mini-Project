import React from "react";

import "./form.css";
import { Link } from "react-router-dom";
let Form = () => {
  return (
    <>
      <section className="conts position-absolute">
        <section  className=" cont container-sm my-4 py-4 px-5 rounded-3">
          <form>
            <div className="mb-3">
              <input
                placeholder="Email address or phone number"
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="  mb-3">
              <input
                placeholder="Password"
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className=" d-grid gap-2 col-12 mx-auto">
              <button id="btn1" className="btn btn-primary" type="button">
                Log in
              </button>
            </div>
            <p id="pass-forget" className="mt-4">
              <a
                href="google.com"
                className=" link-underline-primary"
                id="pass-word"
              >
                Forgotten password?
              </a>
            </p>
            <div id="line"></div>
            <button
              type="button"
              id="newacc"
              className="btn btn-success d-grid gap-2 col-7 mx-auto"
            >
            <Link to="/signup" className="text-decoration-none text-light" >Create new account</Link>
              
            </button>
          </form>
        </section>
        <p className=" mx-auto" id="moto">
          <span>Create a page</span> a celebrity, brand or business.
        </p>
      </section>
    </>
  );
};
export default Form;
