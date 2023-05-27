import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const amount = useSelector((state) => state.amount);
  return (
    <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">
              State Bank Of India
            </a>
          </div>
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav">
              <li className="active">
                <a href="/Home">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li>
                <a href="/About">About</a>
              </li>
            </ul>
            <div>
              <button disabled={true} className="btn-primary">
                Your Balance : {amount}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
