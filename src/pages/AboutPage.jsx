import { useParams } from "react-router-dom";
import Menu from "../component/Menu";

const AboutPage = () => {
  const { id, name } = useParams();
  return (
    <>
      <Menu />
      <h1>Aboutpage</h1>
      <p>
        {id} - {name}
      </p>
    </>
  );
};

export default AboutPage;
