import { Card, Button, Form } from "react-bootstrap";
import Select from "./Select";

import addIcon from "../../../assets/images/add-icon.svg";
import Btn from "./TriggerBtn";

import Describe from "./Descrip";
import BtnCont from "./ContinuBtn";
const Modal = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
        <div className="__wrap-modal">
          <Card.Header className="_header __header-modal __remove-padding-bottom">
            <Card.Title>Create your main product</Card.Title>
            <Button
              className="__btn-modal"
              onClick={() => setShowModal((prev) => !prev)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.1988 11.9999L23.5439 2.65453C24.1521 2.04665 24.1521 1.06379 23.5439 0.45591C22.936 -0.15197 21.9532 -0.15197 21.3453 0.45591L11.9999 9.80132L2.65474 0.45591C2.04658 -0.15197 1.064 -0.15197 0.456124 0.45591C-0.152041 1.06379 -0.152041 2.04665 0.456124 2.65453L9.80125 11.9999L0.456124 21.3453C-0.152041 21.9532 -0.152041 22.9361 0.456124 23.544C0.759068 23.8472 1.15739 23.9995 1.55543 23.9995C1.95347 23.9995 2.35152 23.8472 2.65474 23.544L11.9999 14.1986L21.3453 23.544C21.6485 23.8472 22.0466 23.9995 22.4446 23.9995C22.8426 23.9995 23.2407 23.8472 23.5439 23.544C24.1521 22.9361 24.1521 21.9532 23.5439 21.3453L14.1988 11.9999Z"
                  fill="black"
                />
              </svg>
            </Button>
          </Card.Header>
          <Card.Body className="__body __remove-padding-top">
            <Button className="__action-btn">
              <img src={addIcon} className="_add-icon" alt="add icon" />I will
              import accomodation information from my other activity
            </Button>
            <Card.Text className="__more-padding-top">
              Describe the main product you will like to use to attract
              travelers to make a purchase. This is what gets you access to
              customers calendar. You'll be able to add more details next.
            </Card.Text>

            <Form className="_select-type">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Enter your product title</Form.Label>
                <Form.Control type="email" placeholder="" className="__input" />
              </Form.Group>

              <Form.Group className="__input-more-padding">
                <Form.Label className="__less-right">
                  Select Category
                </Form.Label>

                <Select />
              </Form.Group>
            </Form>

            <div className="_description __less-padding-top">
              <h4>Why should travelers book this tour?</h4>
            </div>
            <Describe
              text="Briefly describe what makes it unique"
              className="__less-padding-top"
            />
            <Form.Group className="_btn">
              <BtnCont textContinue="Continue" textHelp="Help" />
            </Form.Group>
          </Card.Body>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
