import Header from "./components/Header.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Product from "./components/Product.js";
import Skills from "./components/Skills.js";
import Footer from "./components/Footer.js";
import "./App.css";
import Banner from "./components/Banner.js";
import Bubble from "./components/Bubble.js";
import Cursor from "./components/Cursor.js";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Cursor />
        <Header />
        <Banner />
        <About />
        <Skills />
        <Product />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
