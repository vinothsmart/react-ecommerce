import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";

const App = () => {
  let marks = 81;
  return (
    <>
      {/* <Header />
      <Hero />
      <Contact />
      <Footer /> */}
      {(() => {
        if (marks >= 80 && marks <= 100) {
          return <h1>A+</h1>;
        } else if (marks >= 70 && marks <= 79) {
          return <h1>A</h1>;
        } else if (marks >= 60 && marks <= 69) {
          return <h1>A-</h1>;
        } else {
          return <h1>F</h1>;
        }
      })()}
    </>
  );
};

export default App;
