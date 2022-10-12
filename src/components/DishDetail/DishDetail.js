import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
import { format } from "date-fns";
function DishDetail({ selectDish }) {
  console.log(selectDish);
  return (
    <>
      {selectDish ? (
        <>
          <div className="col-12 col-md-5 m-1 text-left">
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
          <div className="col-12 col-md-5 m-1 text-left ">
            <h4>Comments</h4>
            {selectDish.comments ? (
              selectDish.comments.map((comm) => {
                return (
                  <>
                    <p>{comm.comment}</p>
                    <p>
                      --{comm.author},{" "}
                      {new Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                      }).format(new Date(Date.parse(comm.date)))}
                    </p>
                  </>
                );
              })
            ) : (
              <div></div>
            )}
          </div>
        </>
      ) : (
        <div></div>
      )}
    </>
  );
}
export default DishDetail;
