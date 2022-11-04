import { default as React, useState } from "react";
import "./Header.css";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const goToAlbum = (value) => {
    navigate("/album-page");
  };
  let location = useLocation();

  return (
    <div className="mainHeader">
      <div className="header-item"></div>
      <div className="textForHeader">VALSTOCK</div>
      <div className="header-item">
        {location.pathname === "/login" || location.pathname === "/" ? null : (
          <div className="drop-item">
            <div className="dropDown">
              <select
                name="albums"
                id="albums"
                onChange={(value) => goToAlbum(value)}
              >
                <option value="none" selected disabled hidden>
                  My Albums
                </option>
                <option value="My ALbum One">My Album One</option>
                <option value="My Album Two">My Album Two</option>
                <option value="My Album Three">My Album Three</option>
                <option value="My Album Four">My Album Four</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
