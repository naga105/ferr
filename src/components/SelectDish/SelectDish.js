import DishDetail from "./DishDetail";
import { useParams } from "react-router-dom";
import { addComment } from "../../redux/ActionCreators";
const SelectDish = ({
  dishes,
  dishesLoading,
  dishesErrMess,
  comments,
  addComment,
}) => {
  const { dishId } = useParams();
  console.log(dishId);
  return (
    <DishDetail
      selectDish={dishes.filter((dish) => dish.id == dishId)[0]}
      isLoading={dishesLoading}
      cerrMess={dishesErrMess}
      comments={comments.filter((comment) => comment.dishId == dishId)}
      addComment={addComment}
    />
  );
};
export default SelectDish;
