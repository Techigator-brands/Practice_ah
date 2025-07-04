import { useState, useEffect } from "react";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState("2024");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <>
      <footer>
        <div className="gap no-gap">
          <img
            className="vector-bg-footer"
            src="assets/images/bg-vector.png"
            alt="vector-bg"
            itemProp="image"
          />
          <div className="container">
            <div className="footer-data brd-rd20 overlap-220">
              <div className="footer-data-inr">
                <div className="row justify-content-between">
                  <div className="col-md-3 col-sm-6 col-lg-3">
                    <div className="widget">
                      <h5 itemProp="headline">About Us</h5>
                      <p itemProp="description">
                        Lorem ipsum dolor sit amet, conec tetur adipisicing
                        elit, sed do eiusd tempor incididunt ut labore dolore
                        magna aliqua tempor.
                      </p>
                      <div className="loc-mp brd-rd5" id="loc-mp"></div>
                      <span>
                        <i className="fas fa-map-marker-alt theme-clr"></i>Find
                        us on Map
                      </span>
                    </div>
                  </div>

                  <div className="col-md-3 col-sm-6 col-lg-3">
                    <div className="widget">
                      <h5 itemProp="headline">Contact Info</h5>
                      <ul className="cnt-inf">
                        <li>
                          <i className="far fa-envelope theme-clr"></i>
                          <a href="#" title="" itemProp="url">
                            ahlesunnat.net@gmail.com
                          </a>
                        </li>
                        <li>
                          <i className="fas fa-phone theme-clr"></i>
                          <span>(9221)3243 1568</span>
                        </li>
                        <li>
                          <i className="fas fa-map-marker-alt theme-clr"></i>
                          Memon Masjid Muslehuddin Garden, Jodia Bazar, Karachi,
                          Pakistan.
                        </li>
                        {/* <li>
                          <i className="fas fa-fax theme-clr"></i>
                          (9221)-3243 1568
                        </li> */}
                      </ul>
                      <div className="scl1">
                        <a
                          href="#"
                          title="Twitter"
                          itemProp="url"
                          target="_blank"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a
                          href="#"
                          title="Facebook"
                          itemProp="url"
                          target="_blank"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a
                          href="#"
                          title="Linkedin"
                          itemProp="url"
                          target="_blank"
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a
                          href="#"
                          title="Google Plus"
                          itemProp="url"
                          target="_blank"
                        >
                          <i className="fab fa-google-plus-g"></i>
                        </a>
                        <a
                          href="#"
                          title="Instagram"
                          itemProp="url"
                          target="_blank"
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a
                          href="#"
                          title="Youtube"
                          itemProp="url"
                          target="_blank"
                        >
                          <i className="fab fa-youtube"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3 col-sm-6 col-lg-3">
                    <div className="widget">
                      <h5 itemProp="headline">Quick Contact</h5>
                      <form>
                        <div className="row mrg10">
                          <div className="col-md-12 col-sm-12 col-lg-12">
                            <input
                              className="brd-rd5"
                              type="text"
                              placeholder="Name"
                            />
                          </div>
                          <div className="col-md-12 col-sm-12 col-lg-12">
                            <input
                              className="brd-rd5"
                              type="email"
                              placeholder="Email"
                            />
                          </div>
                          <div className="col-md-12 col-sm-12 col-lg-12">
                            <textarea
                              className="brd-rd5"
                              placeholder="Message"
                            ></textarea>
                          </div>
                          <div className="col-md-12 col-sm-12 col-lg-12">
                            <button className="brd-rd5 theme-btn theme-bg">
                              SUBMIT NOW
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cpy-rgt text-center">
                <p itemProp="description">
                  <a href="#" title="" itemProp="url" target="_blank">
                    BISMILLAH
                  </a>
                  &copy; {currentYear} / ALL RIGHTS RESERVED
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <section>
        <div className="gap theme-bg bottom-spac50 top-spac270">
          <div className="container">
            <div className="newsletter-wrp">
              <div className="row">
                <div className="col-md-4 col-sm-12 col-lg-4">
                  <h4 itemProp="headline">Subscribe, For Weekly Updates</h4>
                </div>
                <div className="col-md-8 col-sm-12 col-lg-8">
                  <form className="newsletter brd-rd30">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                    />
                    <button type="submit" className="green-bg theme-btn">
                      SIGNUP NOW
                    </button>
                  </form>
                </div>
              </div>
            </div>
            {/* Newsletter Wrap */}
          </div>
        </div>
      </section>
    </>
  );
}
