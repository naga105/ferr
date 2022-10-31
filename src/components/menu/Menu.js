import React, { useState, Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import Loading from "../loading";

function Menu({ dishes, dishesLoading, dishesErrMess, setSelectDish }) {
  return (
    <>
      <div className="container" style={{ padding: "10px 0 20rem 0" }}>
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Menu</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Menu</h3>
            <hr />
          </div>
        </div>
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
          <div className="row">
            {dishes.map((dish) => (
              <div className="col-12  col-md-5 m-1 text-left font-weight-bold">
                <Card
                  key={dish.id}
                  onClick={() => {
                    setSelectDish(dish);
                  }}
                >
                  <Link to={`/menu/${dish.id}`}>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                  </Link>
                </Card>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
export default Menu;
