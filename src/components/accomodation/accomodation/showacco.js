import React, { useState } from "react";
import { Button } from "react-bootstrap";
import addIcon from "../../../assets/images/add-icon.svg";

import Modal from "./Moadl";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <>
      <Button className="__action-btn" onClick={openModal}>
        <img src={addIcon} className="_add-icon" alt="add icon" />I will import
        accomodation information from my other activity
      </Button>

      <Modal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};
export default App;
