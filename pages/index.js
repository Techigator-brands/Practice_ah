"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Utils } from "../src/utils";
import {
  fetchUserData,
  createUser,
  fetchAllUsers,
  fetchHomeData,
  clearError,
  clearSuccess,
  resetApiState,
} from "../redux/slices/apiSlice";
export default function Home() {
  const [isClient, setIsClient] = useState(false);

  const dispatch = useDispatch();
  const {
    userData,
    allUsers,
    homeData,
    loading = false,
    error,
    createUserLoading,
    createUserError,
    createUserSuccess,
  } = useSelector((state) => state.api);

  useEffect(() => {
    setIsClient(true);

    // console.log("loading", loading);
    dispatch(fetchHomeData());
    console.log("homeData", homeData);
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
            {homeData &&
              homeData.data.banners.map((item) => (
                <div className="featured-item">
                  <div
                    style={{
                      backgroundImage:
                        "url(" +
                        Utils.get_image_url(
                          item.banner_image,
                          item.banner_image_path
                        ) +
                        ")",
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
                          src={Utils.get_image_url(
                            item.banner_image_2,
                            item.banner_image_2_path
                          )}
                          alt="Bismillah Text"
                          style={{ maxWidth: "700px", width: "100%" }}
                        />
                        {/* <img
                          src="/assets/images/resources/ayat-txt.png"
                          alt="Ayat Text"
                          style={{ maxWidth: "400px", width: "100%" }}
                        />
                        <img
                          className="before-imge"
                          src="/assets/images/pshape.png"
                          alt=""
                          style={{ maxWidth: "100px", width: "100%" }}
                        /> */}
                        <h2 style={{ marginTop: "20px" }}>
                          {item.banner_description}
                        </h2>
                        <span style={{ fontSize: "18px" }}>
                          {item.banner_description_2}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </Slider>
          <div className={styles.container}>
            {homeData && (
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
                        {/* homeData.data.home_about_us */}
                        <div className="col-md-6 col-sm-12 col-lg-6">
                          <div className="abt-desc">
                            <div className="sec-tl">
                              <span className="theme-clr">
                                {homeData.data.home_about_us.cms_page_name}
                              </span>
                              <h2 itemProp="headline">
                                {homeData.data.home_about_us.cms_page_title}
                              </h2>
                              <img src="/assets/images/pshape.png" alt="" />
                            </div>
                            <div
                              itemProp="description"
                              dangerouslySetInnerHTML={{
                                __html:
                                  homeData.data.home_about_us.cms_page_content,
                              }}
                            />
                            {/* <p itemProp="description">
                              
                            </p>
                            <p itemProp="description">
                              Visit our premises sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua.
                            </p> */}
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
            )}

            <section>
              <div className="gap white-layer opc7">
                <div
                  className="fixed-bg"
                  style={{ backgroundImage: "url(/assets/images/namaz.jpg)" }}
                ></div>
                <div className="container">
                  <div className="sec-tl">
                    {/* <span className="theme-clr">Select Country & City For</span> */}
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
                          {/*  */}
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
                                {homeData &&
                                  homeData.data.namaz_timings.map((item) => (
                                    <tr className="">
                                      <td>
                                        <span>{item.namaz_name}</span>
                                      </td>
                                      <td className="fajr-azan-time">
                                        {item.namaz_azan}
                                      </td>
                                      <td className="fajr-azan-prayer">
                                        {item.namaz_time}
                                      </td>
                                    </tr>
                                  ))}
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
                    {/* <span className="theme-clr">Our Worldwide</span> */}
                    <h2 itemProp="headline">Our Services</h2>
                    <img src="/assets/images/pshape.png" alt="" />
                  </div>
                  <div className="serv-wrp remove-ext3">
                    <div className="row">
                      {homeData &&
                        homeData.data.services.map((item) => (
                          <div className="col-md-3 col-sm-6 col-lg-3">
                            <div className="serv-bx text-center">
                              <i className={item.service_icon}></i>
                              <h5 itemProp="headline">
                                <Link
                                  href="/service-detail"
                                  title=""
                                  itemProp="url"
                                >
                                  {item.service_title}
                                </Link>
                              </h5>
                              <div className="srv-inf theme-bg brd-rd10">
                                <p itemProp="description">
                                  {item.service_detail}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
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
