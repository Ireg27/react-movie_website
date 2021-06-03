import React, { useState, useEffect } from "react";
import "../css/nav.css";
import { Link, useHistory } from "react-router-dom";
import $ from "jquery";

import { FaRegUser, FaSearch } from "react-icons/fa";

const Nav = ({ loggedIn, signOut}) => {
  const [show, handleShow] = useState(false);
  const [notHome, setnotHome] = useState(false);
  const [showSubmenu, setshowSubmenu] = useState(true);
  const [search, setSearch] = useState("");

  const pathname = window.location.pathname;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });

    // return () => {
    //     window.removeEventListener("scroll");
    // }
  }, []);

  useEffect(() => {
    if (pathname === "/home") {
      setnotHome(false);
    } else setnotHome(true);
  }, [pathname]);

  const hideSubmenu = (e) => {
    if (loggedIn) {
      setshowSubmenu(false);
    }
  };

  $("html")
    .off()
    .on("click", function (e) {
      let element = e.target.tagName;
      if (element !== "svg" && element !== "H1" && element !== "path") {
        setshowSubmenu(true);
      }
    });

  function signOutBtn() {
    signOut();
  }

  function checkSearch() {
    if (search === '') {
      return false;
    } else {
      return true;
    }
  }

  function SearchBtn() {
    let history = useHistory();

    const handleSearch = () => {
      if(checkSearch()) {
        document.querySelector('.search-input').value = '';
        history.push(`/search/` + search);
      }
    }


    return (
      <button className="search-btn" onClick={handleSearch}>
        {" "}
        <FaSearch />{" "}
      </button>
    );
  }

  return (
    <div
      className={`nav ${show && "nav__background"} ${
        notHome && "nav__notHome"
      }`}
    >
      <Link className="home-title" to={"/home"}>
        <h1 className="nav__pageTitle">Filma 23</h1>
      </Link>

      <div className="search-form">
        <form action="">
          <input
            className="search-input"
            type="search"
            placeholder="Search your movie"
            onChange={(e) => setSearch(e.target.value)}
          />
          {SearchBtn()}
          </form>
      </div>

      <h1 className="nav__user" onClick={hideSubmenu}>
        <FaRegUser />
      </h1>
      <div className={`submenu ${showSubmenu && "hideSubmenu"}`}>
        <ul>
          <Link to="/user/settings" className="user-dropdown" style={{color: "white"}}>Settings</Link>
          {/* <Link> */}
          <Link className="user-dropdown" to="/user/watchlist" style={{color: "white"}} >WatchList</Link>
          {/* </Link> */}
          <Link
            className="link"
            to="/"
            style={{ textDecoration: "none", color: "white" }}
          >
            <li className="user-dropdown" onClick={signOutBtn}>
              Log Out
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
