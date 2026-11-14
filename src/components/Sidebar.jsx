import { useState } from "react";
import "./Sidebar.css";
import { FaHome, FaUser, FaLayerGroup, FaBars } from "react-icons/fa";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger button */}
      <button className="hamburger-btn" onClick={toggleSidebar}>
        <FaBars size={25} />
      </button>

      {/* Sidebar */}
      <div className={`Sidebar ${isOpen ? "open" : "closed"}`}>
        <ul className="menu-list">
          <li className="menu-item">
            <FaHome className="menu-icon" size={25} />
            <span>Home</span>
          </li>

          <li className="menu-item">
            <FaLayerGroup className="menu-icon" size={25} />
            <span>Subscriptions</span>
          </li>

          <li className="menu-item">
            <FaUser className="menu-icon" size={25} />
            <span>You</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
