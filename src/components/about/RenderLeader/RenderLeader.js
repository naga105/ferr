import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Media,
} from "reactstrap";
import { Fade, Stagger } from "react-animation-components";
function RenderLeader({ leaders }) {
  return (
    <>
      <Stagger in>
        {leaders.map((leader, key) => {
          return (
            <Fade in>
              <Media className="pt-4" key={key}>
                <div className="row">
                  <div className="col-12 col-md-2 ">
                    <CardImg width="70%" src={leader.image} alt={leader.name} />
                  </div>
                  <div className="col-12 col-md-10">
                    <h4>{leader.name}</h4>
                    <p>{leader.designation}</p>
                    <p>{leader.description}</p>
                  </div>
                </div>
              </Media>
            </Fade>
          );
        })}
      </Stagger>
    </>
  );
}
export default RenderLeader;
