import { Form } from "react-bootstrap";
import RemainChar from "./RemainChar";
const TextArea = (props) => {
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
          maxlength="120"
        />
        <RemainChar />
        <RemainChar character120="120 characters remaining" />
      </Form.Group>
    </>
  );
};

export default TextArea;
