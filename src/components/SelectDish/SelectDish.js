import DishDetail from "./DishDetail";
import { useParams } from "react-router-dom";
import { addComment } from "../../redux/ActionCreators";
const SelectDish = ({
  dishes,
  dishesLoading,
  dishesErrMess,
  comments,
  postComment,
}) => {
  const { dishId } = useParams();
  console.log(dishId);
  return (
    <DishDetail
      selectDish={dishes.filter((dish) => dish.id == dishId)[0]}
      dishesLoading={dishesLoading}
      dishesErrMess={dishesErrMess}
      comments={comments.filter((comment) => comment.dishId == dishId)}
      postComment={postComment}
    />
  );
};
export default SelectDish;
