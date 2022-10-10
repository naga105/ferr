import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
import { format } from "date-fns";
function DishDetail({ Dish }) {
  return (
    <>
      <div className="col-12 col-md-5 m-1 text-left">
        <Card>
          <CardImg width="100%" src={Dish.image} alt={Dish.name} />
          <CardBody>
            <CardTitle className="font-weight-bold">{Dish.name}</CardTitle>
            <CardText>{Dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
      <div className="col-12 col-md-5 m-1 text-left ">
        <h4>Comments</h4>
        {Dish.comments ? (
          Dish.comments.map((comm) => {
            return (
              <>
                <p>{comm.comment}</p>
                <p>
                  --{comm.author}, {new Date(comm.date).toUTCString()}
                </p>
              </>
            );
          })
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
}
export default DishDetail;
