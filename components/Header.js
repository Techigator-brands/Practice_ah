import { useState, useEffect } from "react";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <div className="header-wrapper">
      <header className="style1">
        <div className="topbar">
          <div className="container">
            <div className="scl1 float-left">
              <span>Follow us:</span>
              <a href="#" title="Twitter" itemProp="url" target="_blank">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" title="Facebook" itemProp="url" target="_blank">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" title="Linkedin" itemProp="url" target="_blank">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" title="Google Plus" itemProp="url" target="_blank">
                <i className="fab fa-google-plus-g"></i>
              </a>
            </div>
            <ul className="float-right tp-lnks">
              <li>
                <i className="fas fa-envelope theme-clr"></i>
                <a href="#" title="" itemProp="url">
                  ahlesunnat.net@gmail.com
                </a>
              </li>
              <li>
                <i className="flaticon-phone-volume theme-clr"></i>(9221)3243
                1568
              </li>
            </ul>
          </div>
        </div>
        <div className="logo-menu-sec">
          <div className="container">
            <div className="logo">
              <a href="index.html" title="Logo" itemProp="url">
                <img
                  src="assets/images/logo1.png"
                  alt="logo1.png"
                  itemProp="image"
                />
              </a>
            </div>
            <nav>
              <div>
                <ul>
                  <li>
                    <a href="#" title="" itemProp="url">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" title="" itemProp="url">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" title="" itemProp="url">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}
