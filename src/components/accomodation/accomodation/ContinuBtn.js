import { Button } from "react-bootstrap";
const ContinueBtn = (props) => {
  return (
    <div className="__wrap-btn-modals">
      <Button className="__btn-update __adjust-size">
        {props.textContinue}
      </Button>

      <Button className="__btn-help">{props.textHelp}</Button>
    </div>
  );
};

export default ContinueBtn;
