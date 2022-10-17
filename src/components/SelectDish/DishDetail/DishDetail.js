import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

import { format } from "date-fns";
import RenderComment from "./RenderComment";
function DishDetail({ selectDish, comments }) {
  return (
    <>
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{selectDish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{selectDish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg
                width="100%"
                src={selectDish.image}
                alt={selectDish.name}
              />
              <CardBody>
                <CardTitle className="font-weight-bold">
                  {selectDish.name}
                </CardTitle>
                <CardText>{selectDish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderComment comments={comments} />
          </div>
        </div>
      </div>
    </>
  );
}
export default DishDetail;
