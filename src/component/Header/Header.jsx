import React from "react";
import NavBar from "./NavBar/NavBar";
import { Link } from "react-router-dom";
import "../assets/css/header.css";

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="row m-0 no-gutters header_wrapper">
          <NavBar />
          {/* <div className="header-title">Шапка будущего супер-мега-сайта</div> */}
          <div className="login-block">
            {this.props.isAuth ? (
              <div>
                {" "}
                {this.props.login} -{" "}
                {/* <button onClick={this.props.logout}>Log out</button>{" "} */}
              </div>
            ) : (
              <Link id="login" to={"/login"}>
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
