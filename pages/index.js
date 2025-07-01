"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    setLocation(""); // Reset location when country changes
  };

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  const [country, setCountry] = useState("");
  const [location, setLocation] = useState("");
  return (
    <>
      {isClient ? (
        <>
          <Slider
            dots={false}
            infinite={false}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay={true}
            arrows={true}
            autoplaySpeed={4000}
          >
            <div className="featured-item">
              <div
                style={{
                  backgroundImage: "url(/assets/images/banner-top.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  minHeight: "400px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100vh",
                }}
              >
                <div className={styles.container}>
                  <div
                    className="featured-cap"
                    style={{ textAlign: "center", color: "#fff" }}
                  >
                    <img
                      src="/assets/images/resources/bsml-txt.png"
                      alt="Bismillah Text"
                      style={{ maxWidth: "300px", width: "100%" }}
                    />
                    <img
                      src="/assets/images/resources/ayat-txt.png"
                      alt="Ayat Text"
                      style={{ maxWidth: "400px", width: "100%" }}
                    />
                    <img
                      className="before-imge"
                      src="/assets/images/pshape.png"
                      alt=""
                      style={{ maxWidth: "100px", width: "100%" }}
                    />
                    <h2 style={{ marginTop: "20px" }}>
                      Welcome to Our New Full-Width Banner
                    </h2>
                    <span style={{ fontSize: "18px" }}>
                      (A New Inspiring Message)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="featured-item">
              <div
                style={{
                  backgroundImage: "url(/assets/images/banner-top.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "100%",
                  minHeight: "400px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100vh",
                }}
              >
                <div className={styles.container}>
                  <div
                    className="featured-cap"
                    style={{ textAlign: "center", color: "#fff" }}
                  >
                    <img
                      src="/assets/images/resources/bsml-txt.png"
                      alt="Bismillah Text"
                      style={{ maxWidth: "300px", width: "100%" }}
                    />
                    <img
                      src="/assets/images/resources/ayat-txt.png"
                      alt="Ayat Text"
                      style={{ maxWidth: "400px", width: "100%" }}
                    />
                    <img
                      className="before-imge"
                      src="/assets/images/pshape.png"
                      alt=""
                      style={{ maxWidth: "100px", width: "100%" }}
                    />
                    <h2 style={{ marginTop: "20px" }}>
                      Welcome to Our New Full-Width Banner
                    </h2>
                    <span style={{ fontSize: "18px" }}>
                      (A New Inspiring Message)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
          <div className={styles.container}>
            {/* <section>
        <div className="gap no-gap">
          <div className="featured-area-wrap slider2 text-center">
            <div className="featured-area owl-carousel">
              <div
                className="featured-item"
                style={{
                  backgroundImage: "url(/assets/images/banner-top.jpg)",
                }}
              >
                <div className="featured-cap">
                  <img
                    src="/assets/images/resources/bsml-txt.png"
                    alt="Bismillah Text"
                  />
                  <h1>
                    <img
                      src="/assets/images/resources/ayat-txt.png"
                      alt="Ayat Text"
                    />
                  </h1>
                  <img
                    className="before-imge"
                    src="/assets/images/pshape.png"
                    alt=""
                  />
                  <h3>He Raised the Sky and Set Up the Balance</h3>
                  <span>(Surah Al-Rahmaan Verse 7)</span>
                  <Link href="#" legacyBehavior>
                    <a className="theme-btn theme-bg brd-rd5">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
            <section>
              <div className="gap">
                <div className="container">
                  <div className="abt-sec-wrp style2">
                    <div className="row">
                      <div className="col-md-6 col-sm-12 col-lg-6">
                        <div className="abt-vdo style2 brd-rd5">
                          <img
                            src="/assets/images/about.jpg"
                            alt="abt-img2.jpg"
                            itemProp="image"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-12 col-lg-6">
                        <div className="abt-desc">
                          <div className="sec-tl">
                            <span className="theme-clr">Our History</span>
                            <h2 itemProp="headline">About Islamic Center</h2>
                            <img src="/assets/images/pshape.png" alt="" />
                          </div>
                          <p itemProp="description">
                            We established our center in 1954, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris .Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                          </p>
                          <p itemProp="description">
                            Visit our premises sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                          <Link
                            className="theme-btn theme-bg brd-rd5"
                            href="/about"
                            title=""
                            itemProp="url"
                          >
                            READ MORE
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="gap white-layer opc7">
                <div
                  className="fixed-bg"
                  style={{ backgroundImage: "url(/assets/images/namaz.jpg)" }}
                ></div>
                <div className="container">
                  <div className="sec-tl">
                    <span className="theme-clr">Select Country & City For</span>
                    <h2 itemProp="headline">Prayer Timings</h2>
                    <img src="/assets/images/pshape.png" alt="" />
                  </div>
                  <div className="prayer-timing-wrp">
                    <div className="row">
                      <div className="col-md-5 col-sm-12 col-lg-5">
                        <div className="timing-mockp">
                          <img
                            src="/assets/images/namaz-time.png"
                            alt="prayer-time-mockp.png"
                            itemProp="image"
                          />
                        </div>
                      </div>
                      <div className="col-md-7 col-sm-12 col-lg-7">
                        <div className="timing-data">
                          <div className="cntry-selc">
                            <select
                              id="comboA"
                              className="selec-wrp brd-rd5"
                              value={country}
                              onChange={handleCountryChange}
                            >
                              <option value="">Select Country</option>
                              <option value="UAE">UAE</option>
                              <option value="Turkey">Turkey</option>
                              <option value="Pakistan">Pakistan</option>
                            </select>

                            <select
                              className="selec-wrp brd-rd5"
                              id="comboB"
                              value={location}
                              onChange={(e) => setLocation(e.target.value)}
                            >
                              <option value="">Select Location</option>
                              {/* Always render all options but control visibility */}
                              <option
                                value="Dubai"
                                hidden={isMounted && country !== "UAE"}
                              >
                                Dubai
                              </option>
                              <option
                                value="Ankara"
                                hidden={isMounted && country !== "Turkey"}
                              >
                                Ankara
                              </option>
                              <option
                                value="Karachi"
                                hidden={isMounted && country !== "Pakistan"}
                              >
                                Karachi
                              </option>
                            </select>
                          </div>
                          <div id="result-update"></div>
                          <div className="prayer-timings text-center">
                            <table>
                              <thead>
                                <tr>
                                  <th>
                                    <span>Name of Salat</span>
                                    <img
                                      src="/assets/images/pshape.png"
                                      alt=""
                                    />
                                  </th>
                                  <th>
                                    <span>Azan Time</span>
                                    <img
                                      src="/assets/images/pshape.png"
                                      alt=""
                                    />
                                  </th>
                                  <th>
                                    <span>Prayer Time</span>
                                    <img
                                      src="/assets/images/pshape.png"
                                      alt=""
                                    />
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="">
                                  <td>
                                    <span>Fajar</span>
                                  </td>
                                  <td className="fajr-azan-time">03:24 am</td>
                                  <td className="fajr-azan-prayer">04:30 am</td>
                                </tr>
                                <tr>
                                  <td>
                                    <span>SunRise</span>
                                  </td>
                                  <td className="sunrise-azan-time">
                                    05:10 am
                                  </td>
                                  <td className="sunrise-azan-prayer">
                                    05:10 am
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <span>Zohar</span>
                                  </td>
                                  <td className="zohar-azan-time">12:15 pm</td>
                                  <td className="zohar-azan-prayer">
                                    01:45 pm
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <span>Asar</span>
                                  </td>
                                  <td className="asr-azan-time">05:10 pm</td>
                                  <td className="asr-azan-prayer">05:30 pm</td>
                                </tr>
                                <tr>
                                  <td>
                                    <span>Maghrib</span>
                                  </td>
                                  <td className="maghrib-azan-time">
                                    07:15 pm
                                  </td>
                                  <td className="maghrib-azan-prayer">
                                    07:20 pm
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <span>Isha</span>
                                  </td>
                                  <td className="isha-azan-time">09:05 pm</td>
                                  <td className="isha-azan-prayer">09:25 pm</td>
                                </tr>
                                <tr>
                                  <td>
                                    <span>SunSet</span>
                                  </td>
                                  <td className="juma-azan-time">01:00 pm</td>
                                  <td className="juma-azan-prayer">02:00 pm</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="gap white-layer opc7">
                <img
                  className="vector-bg-service"
                  src="/assets/images/bg-vector-3.png"
                  alt="vector-bg"
                  itemProp="image"
                />
                <div className="container">
                  <div className="sec-tl text-center">
                    <span className="theme-clr">Our Worldwide</span>
                    <h2 itemProp="headline">Offered Services</h2>
                    <img src="/assets/images/pshape.png" alt="" />
                  </div>
                  <div className="serv-wrp remove-ext3">
                    <div className="row">
                      <div className="col-md-3 col-sm-6 col-lg-3">
                        <div className="serv-bx text-center">
                          <i className="fa-solid fa-book-open"></i>
                          <h5 itemProp="headline">
                            <Link
                              href="/service-detail"
                              title=""
                              itemProp="url"
                            >
                              Islamic Books
                            </Link>
                          </h5>
                          <div className="srv-inf theme-bg brd-rd10">
                            <p itemProp="description">
                              Quran Teaching sit amet, consectetur adipisicing
                              elit, sed do eiusmod tempor incididunt
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-6 col-lg-3">
                        <div className="serv-bx text-center">
                          <i className="fa-solid fa-person-praying"></i>
                          <h5 itemProp="headline">
                            <Link
                              href="/live-friday-sermon"
                              title=""
                              itemProp="url"
                            >
                              Live Friday Sermon
                            </Link>
                          </h5>
                          <div className="srv-inf theme-bg brd-rd10">
                            <p itemProp="description">
                              Providing expenses amet, consectetur adipisicing
                              elit, sed do eiusmod tempor incididunt
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-6 col-lg-3">
                        <div className="serv-bx text-center">
                          <i className="fa-solid fa-book"></i>
                          <h5 itemProp="headline">
                            <Link
                              href="/service-detail"
                              title=""
                              itemProp="url"
                            >
                              Islamic Aqaid Course
                            </Link>
                          </h5>
                          <div className="srv-inf theme-bg brd-rd10">
                            <p itemProp="description">
                              Renovation of mosques sit amet, consectetur elit,
                              sed do eiusmod tempor incididunt
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-6 col-lg-3">
                        <div className="serv-bx text-center">
                          <i className="fa-solid fa-mobile"></i>
                          <h5 itemProp="headline">
                            <Link
                              href="/service-detail"
                              title=""
                              itemProp="url"
                            >
                              Android Mobile Apps
                            </Link>
                          </h5>
                          <div className="srv-inf theme-bg brd-rd10">
                            <p itemProp="description">
                              Gives food and shelter sit amet, consectetur elit,
                              sed do eiusmod tempor incididunt
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-6 col-lg-3">
                        <div className="serv-bx text-center">
                          <i className="fa-solid fa-comment"></i>
                          <h5 itemProp="headline">
                            <Link
                              href="/service-detail"
                              title=""
                              itemProp="url"
                            >
                              Masjid e Habib Q/A
                            </Link>
                          </h5>
                          <div className="srv-inf theme-bg brd-rd10">
                            <p itemProp="description">
                              Quran Teaching sit amet, consectetur adipisicing
                              elit, sed do eiusmod tempor incididunt
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-6 col-lg-3">
                        <div className="serv-bx text-center">
                          <i className="fa-solid fa-box"></i>
                          <h5 itemProp="headline">
                            <Link
                              href="/khazeena-emaan"
                              title=""
                              itemProp="url"
                            >
                              Khazeena-e-Emaan
                            </Link>
                          </h5>
                          <div className="srv-inf theme-bg brd-rd10">
                            <p itemProp="description">
                              Providing expenses amet, consectetur adipisicing
                              elit, sed do eiusmod tempor incididunt
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-6 col-lg-3">
                        <div className="serv-bx text-center">
                          <i className="fa-solid fa-bullhorn"></i>
                          <h5 itemProp="headline">
                            <Link
                              href="/service-detail"
                              title=""
                              itemProp="url"
                            >
                              Islahi Bayan
                            </Link>
                          </h5>
                          <div className="srv-inf theme-bg brd-rd10">
                            <p itemProp="description">
                              Renovation of mosques sit amet, consectetur elit,
                              sed do eiusmod tempor incididunt
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-6 col-lg-3">
                        <div className="serv-bx text-center">
                          <i className="fa-solid fa-hands-holding"></i>
                          <h5 itemProp="headline">
                            <Link
                              href="/service-detail"
                              title=""
                              itemProp="url"
                            >
                              Qaseedah Burdah
                            </Link>
                          </h5>
                          <div className="srv-inf theme-bg brd-rd10">
                            <p itemProp="description">
                              Gives food and shelter sit amet, consectetur elit,
                              sed do eiusmod tempor incididunt
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-6 col-lg-3">
                        <div className="serv-bx text-center">
                          <i className="fa-solid fa-volume-high"></i>
                          <h5 itemProp="headline">
                            <Link
                              href="/service-detail"
                              title=""
                              itemProp="url"
                            >
                              Audio Room
                            </Link>
                          </h5>
                          <div className="srv-inf theme-bg brd-rd10">
                            <p itemProp="description">
                              Quran Teaching sit amet, consectetur adipisicing
                              elit, sed do eiusmod tempor incididunt
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <section>
            <div className="gap black-layer opc8">
              <div
                className="fixed-bg"
                style={{ backgroundImage: "url(/assets/images/pillars.jpg)" }}
              ></div>
              <div className="container">
                <div className="sec-tl text-center">
                  <span className="theme-clr">About Essential</span>
                  <h2 itemProp="headline">Pillars Of Islam</h2>
                  <img src="/assets/images/pshape.png" alt="" />
                </div>
                <div className="remove-ext3">
                  <ul className="plrs-wrp text-center">
                    <li>
                      <div className="plr-bx">
                        <i className="flaticon-clicker brd-rd50"></i>
                        <h5 itemProp="headline">Shahadah</h5>
                        <span className="theme-clr">(Faith)</span>
                      </div>
                    </li>
                    <li>
                      <div className="plr-bx">
                        <i className="flaticon-muslim-man-praying brd-rd50"></i>
                        <h5 itemProp="headline">Salah</h5>
                        <span className="theme-clr">(Prayer)</span>
                      </div>
                    </li>
                    <li>
                      <div className="plr-bx">
                        <i className="flaticon-islamic-ramadan brd-rd50"></i>
                        <h5 itemProp="headline">Sawm</h5>
                        <span className="theme-clr">(Fasting)</span>
                      </div>
                    </li>
                    <li>
                      <div className="plr-bx">
                        <i className="flaticon-money brd-rd50"></i>
                        <h5 itemProp="headline">Zakat</h5>
                        <span className="theme-clr">(Almsgiving)</span>
                      </div>
                    </li>
                    <li>
                      <div className="plr-bx">
                        <i className="flaticon-kaaba-building brd-rd50"></i>
                        <h5 itemProp="headline">Hajj</h5>
                        <span className="theme-clr">(Pilgrimage)</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="gap no-gap white-layer opc8">
              <div
                className="fixed-bg2"
                style={{
                  backgroundImage: "url(/assets/images/donationbg.jpg)",
                }}
              ></div>
              <div className="dnt-sec-wrp">
                <div className="row mrg">
                  <div className="col-md-6 col-sm-12 col-lg-6">
                    <div className="dnt-img-wrp dnt-car">
                      <div
                        className="img-thmb"
                        style={{
                          backgroundImage: "url(/assets/images/donation.jpg)",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12 col-lg-6">
                    <div className="dnt-wrp">
                      <div className="sec-tl">
                        <span className="theme-clr">
                          Give Food & Shelter To Poor
                        </span>
                        <h2 itemProp="headline">Make Your Donation</h2>
                        <img src="/assets/images/pshape.png" alt="" />
                      </div>
                      <div className="dnt-lst">
                        <Link
                          className="brd-rd30"
                          href="#"
                          title=""
                          itemProp="url"
                        >
                          $100
                        </Link>
                        <Link
                          className="brd-rd30"
                          href="#"
                          title=""
                          itemProp="url"
                        >
                          $200
                        </Link>
                        <Link
                          className="brd-rd30"
                          href="#"
                          title=""
                          itemProp="url"
                        >
                          $300
                        </Link>
                        <Link
                          className="brd-rd30"
                          href="#"
                          title=""
                          itemProp="url"
                        >
                          other
                        </Link>
                      </div>
                      <form className="dnt-frm">
                        <div className="row mrg10">
                          <div className="col-md-6 col-sm-6 col-lg-6">
                            <input
                              className="brd-rd5"
                              type="text"
                              placeholder="Your Name"
                            />
                          </div>
                          <div className="col-md-6 col-sm-6 col-lg-6">
                            <input
                              className="brd-rd5"
                              type="email"
                              placeholder="Your Email"
                            />
                          </div>
                          <div className="col-md-6 col-sm-6 col-lg-6">
                            <input
                              className="brd-rd5"
                              type="text"
                              placeholder="Your Phone"
                            />
                          </div>
                          <div className="col-md-6 col-sm-6 col-lg-6">
                            <input
                              className="brd-rd5"
                              type="text"
                              placeholder="Your Address"
                            />
                          </div>
                        </div>
                      </form>
                      <img
                        src="/assets/images/pay-img.png"
                        alt="pay-img.png"
                        itemProp="image"
                      />
                      <div className="prg-wrp">
                        <h5 itemProp="headline">Raise Funds For poor</h5>
                        <div className="progress brd-rd5">
                          <div className="progress-bar w70 theme-bg">
                            <span className="brd-rd50 theme-bg">70%</span>
                          </div>
                        </div>
                        <span>
                          Raised: <i className="theme-clr">$400.00</i>
                        </span>{" "}
                        <span>
                          Goal: <i className="theme-clr">$650.00</i>
                        </span>
                      </div>
                      <Link
                        className="theme-btn theme-bg brd-rd5"
                        href="/cause"
                        title=""
                        itemProp="url"
                      >
                        DONATE NOW
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="gap">
              <div className="container">
                <div className="sec-tl text-center">
                  <span className="theme-clr">Our Expert</span>
                  <h2 itemProp="headline">Islamic Scholars</h2>
                  <img src="/assets/images/pshape.png" alt="" />
                </div>
                <div className="team-sec remove-ext7">
                  <div className="row">
                    <div className="col-md-4 col-sm-6 col-lg-4">
                      <div className="team-bx text-center">
                        <div className="team-thmb brd-rd5">
                          <Link href="/team-detail" title="" itemProp="url">
                            <img
                              src="/assets/images/team1.jpg"
                              alt="team-img1-1.jpg"
                              itemProp="image"
                            />
                          </Link>
                        </div>
                        <div className="team-inf brd-rd5">
                          <div className="scl1">
                            <Link
                              href="#"
                              title="Twitter"
                              itemProp="url"
                              target="_blank"
                            >
                              <i className="fab fa-twitter"></i>
                            </Link>
                            <Link
                              href="#"
                              title="Facebook"
                              itemProp="url"
                              target="_blank"
                            >
                              <i className="fab fa-facebook-f"></i>
                            </Link>
                            <Link
                              href="#"
                              title="Linkedin"
                              itemProp="url"
                              target="_blank"
                            >
                              <i className="fab fa-linkedin-in"></i>
                            </Link>
                            <Link
                              href="#"
                              title="Google Plus"
                              itemProp="url"
                              target="_blank"
                            >
                              <i className="fab fa-google-plus-g"></i>
                            </Link>
                          </div>
                          <h5 itemProp="headline">
                            <Link href="/team-detail" title="" itemProp="url">
                              Sharuf Al Hammam
                            </Link>
                          </h5>
                          <span>Islamic Scholar</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-lg-4">
                      <div className="team-bx text-center">
                        <div className="team-thmb brd-rd5">
                          <Link href="/team-detail" title="" itemProp="url">
                            <img
                              src="/assets/images/team2.jpg"
                              alt="team-img1-2.jpg"
                              itemProp="image"
                            />
                          </Link>
                        </div>
                        <div className="team-inf brd-rd5">
                          <div className="scl1">
                            <Link
                              href="#"
                              title="Twitter"
                              itemProp="url"
                              target="_blank"
                            >
                              <i className="fab fa-twitter"></i>
                            </Link>
                            <Link
                              href="#"
                              title="Facebook"
                              itemProp="url"
                              target="_blank"
                            >
                              <i className="fab fa-facebook-f"></i>
                            </Link>
                            <Link
                              href="#"
                              title="Linkedin"
                              itemProp="url"
                              target="_blank"
                            >
                              <i className="fab fa-linkedin-in"></i>
                            </Link>
                            <Link
                              href="#"
                              title="Google Plus"
                              itemProp="url"
                              target="_blank"
                            >
                              <i className="fab fa-google-plus-g"></i>
                            </Link>
                          </div>
                          <h5 itemProp="headline">
                            <Link href="/team-detail" title="" itemProp="url">
                              Maryam Sheikh
                            </Link>
                          </h5>
                          <span>Islamic Scholar</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-lg-4">
                      <div className="team-bx text-center">
                        <div className="team-thmb brd-rd5">
                          <Link href="/team-detail" title="" itemProp="url">
                            <img
                              src="/assets/images/team3.jpg"
                              alt="team-img1-3.jpg"
                              itemProp="image"
                            />
                          </Link>
                        </div>
                        <div className="team-inf brd-rd5">
                          <div className="scl1">
                            <Link
                              href="#"
                              title="Twitter"
                              itemProp="url"
                              target="_blank"
                            >
                              <i className="fab fa-twitter"></i>
                            </Link>
                            <Link
                              href="#"
                              title="Facebook"
                              itemProp="url"
                              target="_blank"
                            >
                              <i className="fab fa-facebook-f"></i>
                            </Link>
                            <Link
                              href="#"
                              title="Linkedin"
                              itemProp="url"
                              target="_blank"
                            >
                              <i className="fab fa-linkedin-in"></i>
                            </Link>
                            <Link
                              href="#"
                              title="Google Plus"
                              itemProp="url"
                              target="_blank"
                            >
                              <i className="fab fa-google-plus-g"></i>
                            </Link>
                          </div>
                          <h5 itemProp="headline">
                            <Link href="/team-detail" title="" itemProp="url">
                              Samih Ibn Ali
                            </Link>
                          </h5>
                          <span>Islamic Scholar</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="view-more text-center">
                  <Link
                    className="theme-btn theme-bg brd-rd5"
                    href="/team"
                    title=""
                    itemProp="url"
                  >
                    VIEW MORE
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        "Prerendered"
      )}
    </>
  );
}
