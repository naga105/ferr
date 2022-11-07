import RenderCard from "./RenderCard";

function Home({
  dish,
  dishesLoading,
  dishesErrMess,
  promoErrMess,
  promoLoading,
  promotion,
  leader,
}) {
  console.log(dish);
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          <RenderCard
            isLoading={dishesLoading}
            cerrMess={dishesErrMess}
            item={dish}
          />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard
            item={promotion}
            isLoading={promoLoading}
            errMess={promoErrMess}
          />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={leader} />
        </div>
      </div>
    </div>
  );
}
export default Home;
