import { ChatTeardropDotsIcon } from "@phosphor-icons/react";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Sanjay.</div>
        <button className="navbar-button">
          <ChatTeardropDotsIcon />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
