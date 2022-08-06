import React from "react";
const skill = [
  {
    id: 4,
    name: "CSS",
    icon: "./image/SeekPng.com_css3-logo-png_1415372.png",
    animate: "fade-left",
    duration: 500,
  },
  {
    id: 5,
    name: "HTML",
    icon: "./image/SeekPng.com_javascript-logo-png_803527.png",
    animate: "zoom-in-right",
    duration: 500,
  },
  {
    id: 2,
    name: "JavaScript",
    icon: "./image/JavaScript-logo.png",
    animate: "zoom-out-up",
    duration: 500,
  },
  {
    id: 1,
    name: "ReactJS",
    icon: "./logo512.png",
    animate: "fade-right",
    duration: 500,
  },

  {
    id: 3,
    name: "NodeJS",
    icon: "./image/nodejs-logo-FBE122E377-seeklogo.com.png",
    animate: "zoom-in-up",
    duration: 500,
  },
];
const SkillLogo = ({ logo, name, aos, duration }) => {
  return (
    <div className="col-4 col-md-4">
      <div className="skill-box" data-aos={aos} data-aos-duration={duration}>
        <div>
          <img src={logo} alt="" className="img-skill" />
          <h5 className="name-skill">{name}</h5>
        </div>
      </div>
    </div>
  );
};
const SkillHeading = () => {
  return (
    <div className="row justify-content-center pb-5">
      <div className="col-md-12 heading-section text-center ">
        <h1 className="opacity-heading" data-aos="zoom-in-up">
          Skills
        </h1>
        <h2 className="skills-heading mb-4" data-aos="zoom-in-up">
          My Skills
        </h2>
        <p className="para-skills" data-aos="zoom-in-up">
          Với mong muốn hoàn thiện bản thân , tôi luôn luôn sẵn sàng đón nhận
          những công nghệ mới
        </p>
      </div>
    </div>
  );
};
function Skills() {
  return (
    <div id="Skills">
      <div className="container">
        <SkillHeading />
        <div className="row">
          {skill.map((item) => (
            <SkillLogo
              key={item.id}
              name={item.name}
              logo={item.icon}
              aos={item.animate}
              duration={item.duration}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
