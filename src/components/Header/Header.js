import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

import NavLinks from "./subcomponents/NavLinks";
import SiteLogo from "./subcomponents/SiteLogo";
import SiteText from '../../icons/SiteText';
import LandingForm from "../../pages/Landing/subcomponents/LandingForm";
import UserHeaderContainer from "./subcomponents/UserHeaderContainer";

export default function Header({ userLoggedIn, avatarIndex, color }) {
  let [showHamburgerDropdown, handleHamburgerClick] = useState(false);
  let [formIsOpen, setFormIsOpen] = useState(userLoggedIn ? false : true);

  return (
    <Fragment>
      <header className="header-container">
        <div className="header-content">
          <div className="site-logo-container">
            <SiteLogo />
            <span className="site-title"><SiteText/></span>
          </div>
          <div className="nav-menu-container">
            <NavLinks
              formIsOpen={formIsOpen}
              toggleFormIsOpen={setFormIsOpen}
            />
            <div className="nav-hamburger">
              <div
                className={
                  showHamburgerDropdown
                    ? "hamburger-icon ham-active"
                    : "hamburger-icon"
                }
                id="ham"
                onClick={() => handleHamburgerClick(!showHamburgerDropdown)}
              >
                <span className="hamburger-a" />
                <span className="hamburger-b" />
              </div>
            </div>
            {formIsOpen ? <LandingForm setFormIsOpen={setFormIsOpen} /> : ""}
          </div>
          {userLoggedIn ? <UserHeaderContainer color={color} avatarIndex={avatarIndex} /> : null}
        </div>
      </header>
      <div
        className={
          showHamburgerDropdown
            ? "hamburger-dropdown-container"
            : "display-none"
        }
      >
        <NavLinks formIsOpen={formIsOpen} toggleFormIsOpen={setFormIsOpen} />
      </div>
    </Fragment>
  );
}

Header.propTypes = {
  userLoggedIn: PropTypes.bool,
  setUserLoggedIn: PropTypes.func,
  color: PropTypes.string, 
  avatarIndex: PropTypes.number
};
