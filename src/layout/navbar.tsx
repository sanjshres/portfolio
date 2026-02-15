import { ChatTeardropDotsIcon } from "@phosphor-icons/react";
import React from "react";

const Navbar: React.FC<{
  toggleContact: boolean;
  setToggleContact: (toggle: boolean) => void;
}> = ({ toggleContact, setToggleContact }) => {
  return (
    <nav className="navbar p-0 m-auto container d-flex justify-content-center align-items-center">
      <div className="navbar-container d-flex justify-content-between align-items-center w-100">
        <a href="/portfolio" className="navbar-logo">
          Sanjshres.
        </a>
        <button
          className="navbar-button"
          onClick={() => setToggleContact(!toggleContact)}
        >
          <ChatTeardropDotsIcon />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
