import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
import { format } from "date-fns";
import RenderComment from "./RenderComment";
function DishDetail({ selectDish, comments }) {
  return (
    <>
      <div className="col-12 col-md-5 m-1 text-left">
        <Card>
          <CardImg width="100%" src={selectDish.image} alt={selectDish.name} />
          <CardBody>
            <CardTitle className="font-weight-bold">
              {selectDish.name}
            </CardTitle>
            <CardText>{selectDish.description}</CardText>
          </CardBody>
        </Card>
      </div>
      <RenderComment comments={comments} />
    </>
  );
}
export default DishDetail;
