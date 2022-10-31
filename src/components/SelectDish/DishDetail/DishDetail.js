import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { RenderComment, CommentForm } from "./RenderComment";
import Loading from "../../loading";
function DishDetail({
  selectDish,
  dishesLoading,
  dishesErrMess,
  comments,
  addComment,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  return (
    <>
      {dishesLoading ? (
        <Loading />
      ) : dishesErrMess ? (
        <>
          <div className="container">
            <div className="row">
              <h4>{dishesErrMess}</h4>
            </div>
          </div>
        </>
      ) : (
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
              <RenderComment
                comments={comments}
                dishId={selectDish.id}
                addComment={addComment}
              />
              <Button outline color="secondary" onClick={toggleModal}>
                <span>
                  <FontAwesomeIcon icon={faPencil} />
                </span>
                Submit Comment
              </Button>
              <CommentForm
                isOpen={isOpen}
                toggleModal={toggleModal}
                dishId={selectDish.id}
                addComment={addComment}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default DishDetail;
