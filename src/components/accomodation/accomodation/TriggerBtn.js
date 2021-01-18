import { Button } from "react-bootstrap";

const TriggerBtn = (props) => {
  return (
    <>
      <Button className="__btn-update">{props.textUpdate}</Button>

      <Button className="__btn-help">{props.textHelp}</Button>
    </>
  );
};

export default TriggerBtn;
