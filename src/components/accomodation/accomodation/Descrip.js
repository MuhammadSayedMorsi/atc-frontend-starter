import { Form } from "react-bootstrap";
import RemainChar from "./RemainChar";
const Descripe = (props) => {
  return (
    <>
      <Form.Group
        controlId="exampleForm.ControlTextarea1"
        className="__text-area"
      >
        <Form.Control
          as="textarea"
          rows={3}
          className="__hold-writing-text"
          placeholder={props.text}
          maxlength="100"
        />
        <RemainChar />
        <RemainChar character120="100 characters needed" />
      </Form.Group>
    </>
  );
};

export default Descripe;
