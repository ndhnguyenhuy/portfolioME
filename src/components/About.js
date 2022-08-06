import React from "react";
import {
  FaUserCircle,
  FaBirthdayCake,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaBookOpen,
  FaPencilAlt,
} from "react-icons/fa";
import Avt from "../assets/images/avt.png";
import { HiOutlineMail } from "react-icons/hi";
const AboutImg = () => {
  return (
    <div className="col-sm-12  col-lg-5 d-flex">
      <div className="box-img" data-aos="fade-right">
        <img src={Avt} className="img-responsive" />
      </div>
    </div>
  );
};
const AboutInfo = () => {
  return (
    <div className=" col-sm-12  col-lg-7 pl-lg-5 pb-5">
      <div className="row justify-content-start pb-3">
        <div className="col-sm-12 heading-section ">
          <h2 className="mb-4 heading-tiltle " data-aos="zoom-out">
            About Me
          </h2>
          <ul className="about-info mt-4 px-md-0 px-2 ">
            <li className="py-1 fs-5">
              <p
                className="text-item"
                data-aos="fade-left"
                data-aos-duration="500"
              >
                <FaUserCircle
                  style={{
                    color: "yellow",
                    fontSize: "3rem",
                    marginRight: "30px",
                  }}
                />
                : Nguyen Duc Huy
              </p>
            </li>
            <li className=" py-1 fs-5">
              <p
                className="text-item"
                data-aos="fade-left"
                data-aos-duration="500"
              >
                <FaBirthdayCake
                  style={{
                    color: "pink",
                    fontSize: "3rem",
                    marginRight: "30px",
                  }}
                />{" "}
                : 16/09/2002
              </p>
            </li>
            <li className=" py-1 fs-5">
              <p
                className="text-item"
                data-aos="fade-left"
                data-aos-duration="500"
              >
                <FaMapMarkerAlt
                  style={{
                    color: "red",
                    fontSize: "3rem",
                    marginRight: "30px",
                  }}
                />{" "}
                : Linh Chieu , Thanh Pho Thu Duc
              </p>
            </li>
            <li className=" py-1 fs-5">
              <p
                className="text-item"
                data-aos="fade-left"
                data-aos-duration="500"
              >
                <HiOutlineMail
                  style={{
                    color: "white",
                    fontSize: "3rem",
                    marginRight: "30px",
                  }}
                />{" "}
                : ndhnguyenhuy@gmail.com
              </p>
            </li>
            <li className=" py-1 fs-5">
              <p
                className="text-item"
                data-aos="fade-left"
                data-aos-duration="500"
              >
                <FaPhoneAlt
                  style={{
                    color: "green",
                    fontSize: "3rem",
                    marginRight: "30px",
                  }}
                />
                : 038 462 0255
              </p>
            </li>
            <li className=" py-1 fs-5">
              <p
                className="text-item"
                data-aos="fade-left"
                data-aos-duration="500"
              >
                <FaBookOpen
                  style={{
                    color: "white",
                    fontSize: "3rem",
                    marginRight: "30px",
                  }}
                />{" "}
                : HCMC University of Technology and Education
              </p>
            </li>
            <li className=" py-1 fs-5">
              <p
                className="text-item"
                data-aos="fade-left"
                data-aos-duration="500"
              >
                <FaPencilAlt
                  style={{
                    color: "pink",
                    fontSize: "2.8rem",
                    marginRight: "30px",
                  }}
                />{" "}
                : E-Ecommerce
              </p>
            </li>
          </ul>
          {/* <div className="button-view">
            <a href="#" class="btn-view">
              View My CV
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};
function About() {
  return (
    <div id="About">
      <div className="container">
        <h1 className="about-heading" data-aos="zoom-out-down">
          About
        </h1>
        <div className="row">
          <AboutImg />
          <AboutInfo />
        </div>
      </div>
    </div>
  );
}
export default About;
