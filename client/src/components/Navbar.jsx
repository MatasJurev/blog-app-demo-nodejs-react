import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { useState } from "react";
import { useEffect } from "react";
import Logo from "../img/logo.png";
import SearchBar from "./SearchBar";
import axios from "axios";


const Navbar = ({ cat }) => {
  const { currentUser, logout } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [wait, setWait] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    setTimeout(() => {
      fetchData();
    }, wait ? 600000 : 0);
    setWait(true);
    return () => clearInterval();
  }, [cat, posts, wait]);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img width="150" height="100" src={Logo} alt="" />
          </Link>
          <Link className="link" to="/about">
            About us
          </Link>
        </div>
        <div className="links">
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span>
              <span onClick={logout}>Logout</span>
              <span className="write">
                <Link className="link" to="/write">
                  Write
                </Link>
              </span>
            </span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          <span>
            <SearchBar placeholder="Search" data={posts} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
