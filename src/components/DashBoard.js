import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";
import Quiz from "./Quiz";
import _ from "lodash";

const DashBoard = (props) => {
  const [setToggle] = useState(false);
  const [submit, setSubmit] = useState(true);
  const [logout, setLogout] = useState(false);
  const [loggedInUserObj, setLoggedInUserObj] = useState({});

  useEffect(() => {
    const loggedInUserName = _.get(props.location, "state.userName", {});
    setLoggedInUserObj(JSON.parse(localStorage.getItem(loggedInUserName)));
  }, [props.location]);

  const onLogoutYes = () => {
    setSubmit(false);
    setToggle(true);
    const userObj = JSON.parse(
      localStorage.getItem(_.get(loggedInUserObj, "userName", ""))
    );
    userObj.isUserLoggedIn = false;
    localStorage.setItem(
      _.get(loggedInUserObj, "userName", ""),
      JSON.stringify(userObj)
    );
  };

  const onLogout = () => {
    setLogout(!logout);
  };

  const localUname = `${_.get(loggedInUserObj, "firstName", "")} ${_.get(
    loggedInUserObj,
    "lastName",
    ""
  )}`;

  return (
    <div>
      <nav className="navbar bg-dark">
        <div className="container-fluid">
          <button
            type="button"
            className="btn btn-danger mx-5"
            onClick={onLogout}
          >
            LOGOUT
          </button>
          <button
            type="button"
            className="btn btn-success mx-5"
            onClick={onLogout}
          >
            SUBMIT
          </button>
        </div>
      </nav>

      <div className="text-center">
        <h4 className="mb-0 my-2 mx-3">Student Name : {localUname} </h4>
        <h4 className="mb-0 my-2 mx-3">Subject Name : Programming</h4>
      </div>
      <div className="container my-5">
        <Quiz />
      </div>
      {!submit ? <Redirect to={`/`} /> : null}
      {logout ? (
        <SweetAlert
          warning
          showCancel
          confirmBtnText="Yes"
          confirmBtnBsStyle="danger"
          title="Are you sure?"
          onConfirm={onLogoutYes}
          onCancel={onLogout}
          focusCancelBtn
        ></SweetAlert>
      ) : (
        ""
      )}
    </div>
  );
};

export default DashBoard;
