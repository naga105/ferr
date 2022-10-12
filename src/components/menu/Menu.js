import React, { useState, Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
import DishDetail from "../DishDetail";

function Menu({ dishes, setSelectDish }) {
  return (
    <>
      {dishes.map((dish) => (
        <div className="col-12 col-md-5 m-1 text-left font-weight-bold">
          <Card
            key={dish.id}
            onClick={() => {
              setSelectDish(dish);
            }}
          >
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      ))}
    </>
  );
}
export default Menu;
