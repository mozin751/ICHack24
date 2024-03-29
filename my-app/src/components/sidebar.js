import { React, useState } from "react";
import { FaTh, FaBars } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/lessondashboard",
      name: "Lesson Dashboard",
      icon: <RxDashboard />,
    },
    {
      path: "/profile",
      name: "Profile",
      icon: <CgProfile />,
    },
  ];
  return (
    <div className="container">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            DigiLearn
          </h1>
          <div style={{ marginLeft: isOpen ? "15px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeClassName="active">
            <div className="icon">{item.icon}</div>
          </NavLink>
        ))}
      </div>
      <main> {children}</main>
    </div>
  );
};

export default Sidebar;
