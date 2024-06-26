import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";

const App = () => {
  let marks = 79;
  return (
    <>
      {/* <Header />
      <Hero />
      <Contact />
      <Footer /> */}
      {marks >= 80 ? <h1>Grade A</h1> : <h1>Grade B</h1>}
    </>
  );
};

export default App;
