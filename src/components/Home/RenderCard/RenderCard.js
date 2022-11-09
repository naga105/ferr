import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { FadeTransform } from "react-animation-components";
import Loading from "../../loading";
import { baseUrl } from "../../../shared/basedUrl";
function RenderCard({ item, isLoading, errMess }) {
  if (isLoading) {
    return <Loading />;
  } else if (errMess) {
    return <h4>{errMess}</h4>;
  } else
    return (
      <FadeTransform
        in
        transformProps={{
          exitTransform: "scale(0.5) translateY(-50%)",
        }}
      >
        <Card>
          <CardImg src={baseUrl + item.image} alt={item.name} />

          <CardBody>
            <CardTitle>{item?.name}</CardTitle>

            {item?.designation ? (
              <CardSubtitle>{item?.designation}</CardSubtitle>
            ) : null}

            <CardText>{item?.description}</CardText>
          </CardBody>
        </Card>
      </FadeTransform>
    );
}
export default RenderCard;
