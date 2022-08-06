import React from "react";
import {
  FaPaperPlane,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebook,
} from "react-icons/fa";
import Avt from "../assets/images/avt.png";

const ContactHeading = () => {
  return (
    <div>
      <div className="col-md-7 heading-section text-center ">
        <h1 className="opacity-contact">Contact</h1>
        <h2 className="contact-heading2">Contact Me</h2>
        <p className="para-contact-top"></p>
      </div>
    </div>
  );
};
const ContactInfo = () => {
  return (
    <div className="row d-flex align-items-center contact-info mb-5 mt-5">
      <div className="col-md-6 col-lg-3 d-flex ">
        <div className="align-self-stretch box p-4 text-center">
          <div className="icon d-flex align-items-center justify-content-center">
            <span className="icon-map-signs">
              <FaMapMarkerAlt />
            </span>
          </div>
          <h3 className="info-contact mb-4">Address</h3>
          <p className="para-add">
            198 West 21th Street, Suite 721 New York NY 10016
          </p>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 d-flex ">
        <div className="align-self-stretch box p-4 text-center">
          <div className="icon d-flex align-items-center justify-content-center">
            <span className="icon-phone2">
              <FaPhoneAlt />
            </span>
          </div>
          <h3 className="info-contact mb-4">Contact Number</h3>
          <p>
            <a href="">+ 1235 2355 98</a>
          </p>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 d-flex ">
        <div className="box">
          <div className="icon d-flex align-items-center justify-content-center">
            <span className="icon-paper-plane">
              <FaPaperPlane />
            </span>
          </div>
          <h3 className="info-contact mb-4">Email Address</h3>
          <p>
            <a href="">info@yoursite.com</a>
          </p>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 d-flex">
        <div className=" box p-4 text-center">
          <div className="icon d-flex align-items-center justify-content-center">
            <span className="icon-face">
              <FaFacebook />
            </span>
          </div>
          <h3 className="info-contact mb-4">Facebook</h3>
          <p>
            <a href="#">Huy Nguyen</a>
          </p>
        </div>
      </div>
    </div>
  );
};
const ContactForm = () => {
  return (
    <div className="row no-gutters block-9">
      <div className="col-md-6 order-md-last d-flex">
        <form action="#" className="bg-light p-4 p-md-5 contact-form">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Your Email"
            />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Subject" />
          </div>
          <div className="form-group">
            <textarea
              name=""
              id=""
              cols="30"
              rows="7"
              className="form-control"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Send Message"
              className="btn-submit py-3 px-5"
            />
          </div>
        </form>
      </div>
      <div className="col-md-6 d-flex">
        <div className="img-contact">
          <img src={Avt} className="img-responsive " />
        </div>
      </div>
    </div>
  );
};
function Contact() {
  return (
    <div id="Contact">
      <ContactHeading id="contact-heading" />
      <ContactInfo />
      <ContactForm />
    </div>
  );
}
export default Contact;
