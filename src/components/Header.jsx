import React, { useState } from "react";
import "./Header.css";

// React Icons — MUI ko replace kiya gaya hai, classNames same rakhe gaye hain
import { FaBars, FaSearch, FaMicrophone, FaVideo, FaBell } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Header() {
  const [userPic, setUserPic] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF02Jj8T2t7PdkytAw42HDuuSz7yXguKn8Lg&s"
  );

  const [navbarModal, setNavbarModal] = useState(false);

  const handleClickModal = () => {
    setNavbarModal((prev) => !prev);
  };

  return (
    <header className="navbar">

      <div className="navbar-left">

        <div className="navbarHamberger">
          <FaBars color="white" size={26} />
        </div>

        <div className="navbar_youtubeImg">
          <FaYoutube size={34} className="navbar_youtubeImage" />
          <div className="navbar_utubeTitle">Youtube</div>
        </div>

      </div>


      <div className="navbar-middle">

        <div className="navbar-searchBox">
          <input 
            type="text" 
            placeholder="Search" 
            className="navbar_searchBoxInput" 
          />
          <div className="navbar_searchIconBox">
            <FaSearch size={22} color="white" />
          </div>
        </div>

        <div className="navbar_mike">
          <FaMicrophone size={22} color="white" />
        </div>

      </div>


      <div className="navbar-right">
        <FaVideo size={28} color="white" style={{ cursor: "pointer" }} />
        <FaBell size={26} color="white" style={{ cursor: "pointer" }} />

        <img 
          onClick={handleClickModal} 
          src={userPic} 
          alt="Logo" 
          className="navbar-right-logo" 
        />
      </div>


      {navbarModal && (
        <div className="navbar-modal">
          <div className="navbar-modal-option">profile</div>
          <div className="navbar-modal-option">log out</div>
          <div className="navbar-modal-option">log in</div>
        </div>
      )}

    </header>
  );
}

export default Header;
