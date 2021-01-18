import FormComponent from "../organisms/form";
import { Container } from "reactstrap";
import logo from "../../logo.svg";

import Accomodation from "../accomodation/accomodation";

const Home = (props) => {
  return (
    <Container className="mt-5">
      <div className="App">
        {/* <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{"Welcome to React"}</h2>
          <FormComponent />
        </div> */}

        <Accomodation />
      </div>
    </Container>
  );
};

export default Home;
