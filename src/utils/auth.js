import axios from "axios";

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: `${process.env.REACT_APP_BOOKS_API}/api`,
      //send authenticated encrypted info back to the server
      //this is setting Set cookie on the header request
      withCredentials: true,
    });
    this.service = service;
  }

  signup = (user) => {
    return this.service.post("/signup", { user });
  };

  login = (username, password) => {
    return this.service.post("/login", { username, password });
  };

  logout = () => {
    return this.service.post("/logout");
  };
  //this returns if the user is either with an active session or not
  loggedin = () => {
    console.group("The user is logged in");
    return this.service.get("/loggedin");
  };
}

export default AuthService;
