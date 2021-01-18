// import "bootstrap/dist/css/bootstrap.min.css";
import TextArea from "./accomodation/textArea";
import ShowAcco from "./accomodation/showacco";
import Btn from "./accomodation/TriggerBtn";
import { Card, Form } from "react-bootstrap";
import Select from "./accomodation/Select";
const Accomodation = () => {
  return (
    <Card className="acco">
      <Card.Header className="_header">
        <Card.Title>Tell us about your ‘Main Product’ Accommodation</Card.Title>
        <div className="_import-acco">
          <ShowAcco />
        </div>
      </Card.Header>

      <Card.Body className="__body">
        <div className="_select-type">
          <h4>Accomodation type</h4>
          <Card.Text>
            What type of accommodation are you providing to your travelers?
          </Card.Text>
          <Select />
        </div>
        <div className="_description">
          <h4>Description</h4>
          <Card.Text>
            Describe the basics of where travelers will stay overnight, e.g. the
            name, or details about the lodging.
          </Card.Text>
        </div>
        <TextArea text="e.g. ‘ Overnight at Yosemite Lodge, a 3-star hotel’" />
        <Form.Group className="_btn __more-padding">
          <h4>Accomodation Name</h4>
          <Btn textUpdate="Update Calender & Close" textHelp="Help" />
        </Form.Group>
      </Card.Body>
    </Card>
  );
};

export default Accomodation;
