import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Home(props) {
  useEffect(() => {
    props.firstTimeIn();
  });
  const logout = () => {
    axios({
      method: "get",
      url: "http://localhost:4001/logout",
    });
    sessionStorage.clear();
    props.firstTimeIn();
  };
  return (
    <div>
      <h1>Home Page</h1>
      <h2>Hello {sessionStorage["username"]}</h2>
      {sessionStorage["username"] ? null : (
        <Link to='/' className='navbar-link'>
          <div className='nav-link'>login</div>
        </Link>
      )}

      {sessionStorage.username ? (
        <Link to='/' onClick={logout} className='logout-btn'>
          Logout
        </Link>
      ) : null}
    </div>
  );
}

export default Home;
