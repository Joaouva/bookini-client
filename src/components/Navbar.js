import React from "react";
import { NavLink } from "react-router-dom";
import AuthService from "../utils/auth";
import BooksFromBd from "../utils/bd";

class Navbar extends React.Component {
  logoutUser = () => {
    const authService = new AuthService();
    authService.logout().then(() => {
      this.props.setCurrentUser(null);
      localStorage.removeItem("loggedInUser");
    });
  };

  render() {
    if (this.props.loggedInUser) {
      return (
        <div>
          <nav>
            <ul>
              <li>Welcome {this.props.loggedInUser.username}</li>
              <li>
                <NavLink exact to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/addbook">
                  Add book
                </NavLink>
              </li>
              <li>
                <NavLink exact to={`/profile/${this.props.loggedInUser._id}`}>
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <button onClick={this.logoutUser}>Log Out</button>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      );
    } else {
      return (
        <div>
          <nav>
            <ul>
              <li>
                <NavLink exact to="/login">
                  Login
                </NavLink>
              </li>

              <li>
                <NavLink exact to="/signup">
                  Signup
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/auth/google">
                  Login with Google
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      );
    }
  }
}

export default Navbar;
