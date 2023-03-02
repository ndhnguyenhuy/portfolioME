import React from "react";
import { useEffect, useState } from "react";
import headerImg from "../assets/images/header-img.svg";
function Banner() {
  //   const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["SEOer and Marketing", " Back-end Developer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  const period = 2000;
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);
  const tick = () => {
    // let i = loopNum % toRotate.length;
    let FullText = toRotate[0];
    let upadateText = isDeleting
      ? FullText.substring(0, text.length - 1)
      : FullText.substring(0, text.length + 1);
    setText(upadateText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && upadateText === FullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && upadateText === "") {
      setIsDeleting(false);
      //   setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };
  return (
    <section className="banner" id="home">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xs-12  col-md-6 col-xl-7">
            <span className="tagline">Welcome to my Portfolio</span>
            <h1 className="banner-tiltle">
              {`Hi I'm`}
              <span className="wrap"> {text}</span>
            </h1>

            <a href="#About">
              <button className="button-start">Get Start</button>
            </a>
          </div>
          <div className="col-xs-12 col-md-6 col-xl-5">
            <div className="header-img-box">
              <img src={headerImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Banner;
