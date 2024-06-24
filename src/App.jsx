import { useState, useEffect, useCallback } from "react";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";

const App = () => {
  const getCurrentTime = useCallback(() => {
    const date = new Date();
    return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  }, []);

  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);
  }, [currentTime]);

  return (
    <>
      {/* <Header />
      <Hero />
      <Contact />
      <Footer /> */}
      <h1>{2 + 2}</h1>
      <h1 style={{ color: "red" }}>Hello Vinoth</h1>
      <h1>{currentTime}</h1>
    </>
  );
};

export default App;
