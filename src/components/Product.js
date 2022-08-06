import React from "react";
const listInfoProject = [
  {
    id: 1,
    name: "Profile",
    tech: "HTML , CSS , JS , Boostrap 5",
    image: "./image/profile.jpg",
    linkGit: "https://github.com/ndhnguyenhuy/Profile",
    linkView: "https://ndhnguyenhuy.github.io/Profile/",
    animation: "fade-right",
  },
  {
    id: 2,
    name: "WebSite Ecomere ",
    tech: "HTML , SCSS , JS , Boostrap 5 , NodeJS , Express-handlebars , MongoDB",
    image: "./image/ecomere.jpg",
    linkGit: "https://github.com/ndhnguyenhuy/EcommereNodeJS",
    linkView: "https://ndhnguyenhuy.github.io/Profile/",
    animation: "flip-left",
  },
  {
    id: 3,
    name: "TodoList for Beginner",
    tech: "HTML , CSS , JS ",
    image: "./image/TODO-LIST-.jpg",
    linkGit: "https://github.com/ndhnguyenhuy/TodoListJS",
    linkView: "https://ndhnguyenhuy.github.io/TodoListJS/",
    animation: "fade-left",
  },
  {
    id: 4,
    name: "App music",
    tech: "HTML , CSS , JS ",
    image: "./image/music.jpg",
    linkGit: "https://github.com/ndhnguyenhuy/appMusic",
    linkView: "https://ndhnguyenhuy.github.io/appMusic/",
    animation: "flip-right",
  },
];
const ProductHeading = () => {
  return (
    <div className="row justify-content-center pb-5">
      <div className="col-md-12 heading-section text-center ">
        <h1 className="opacity-heading-project" data-aos="zoom-in-up">
          PROJECTS
        </h1>
        <h2 className="skills-heading mb-4" data-aos="zoom-in-up">
          My PROJECTS
        </h2>
        <p className="para-skills" data-aos="zoom-in-up">
          Những project cá nhân từ lúc bắt đầu học tập đến hiện tại
        </p>
      </div>
    </div>
  );
};
const ProductItem = ({ name, linkGit, linkView, image, tech, aos }) => {
  return (
    <div className="col-sm-6 col-md-6 col-lg-3">
      <a href={linkGit} className="link-view-project">
        <div className="cards" data-aos={aos}>
          <div className="imgBx">
            <img className="project-img" src={image} />
          </div>
          <div className="project-info">
            <h6 className="project-info-para">{name}</h6>
            <p className="project-info-para">{tech}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

function Product() {
  return (
    <div id="Project">
      <ProductHeading />
      <div className="row">
        {listInfoProject.map((item) => (
          <ProductItem
            key={item.id}
            image={item.image}
            name={item.name}
            tech={item.tech}
            linkGit={item.linkGit}
            linkView={item.linkView}
            aos={item.animation}
          />
        ))}
      </div>
    </div>
  );
}
export default Product;
