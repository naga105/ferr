import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { Row, Col } from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import { useState } from "react";
export default function CommentForm({
  isOpen,
  toggleModal,
  dishId,
  postComment,
}) {
  const handleLogin = (event) => {
    event.preventDefault();
    toggleModal();
    alert();
  };
  const [lengthError, setLengthError] = useState(null);
  const [input, setInput] = useState({
    rating: "1",
    name: "",
    comment: "",
    touched: {
      rating: false,
      name: false,
      comment: false,
    },
  });

  const handleSubmit = (values) => {
    console.log(values);
    postComment(dishId, values.rating, values.author, values.comment);
    // alert(
    //   "Rating: " +
    //     values.rating +
    //     "\nname: " +
    //     values.name +
    //     "\ncomment: " +
    //     values.comment
    // );
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const validate = (name) => {
    if (input.touched.name && name.length < 3)
      return "Must be greater than 2 characters";
    else if (input.touched.name && name.length > 15)
      return "Must be less than 16 characters";
    return null;
  };

  const handleBlur = (event) => {
    setInput({
      ...input,
      touched: {
        ...input.touched,
        [event.target.name]: true,
      },
    });
    if (event.target.name === "name") {
      setLengthError(validate(event.target.value));
    }
  };
  return (
    <Modal isOpen={isOpen} toggle={toggleModal}>
      <ModalHeader toggle={toggleModal}>Submit Comment</ModalHeader>
      <ModalBody>
        <LocalForm className="px-3" onSubmit={(values) => handleSubmit(values)}>
          <Row className="form-group mb-3">
            <Label htmlFor="rating">Rating</Label>
            <Control.select
              model=".rating"
              name="rating"
              className="form-control"
              onChange={(e) => handleInputChange(e)}
              onBlur={(e) => handleBlur(e)}
            >
              {[0, 1, 2, 3, 4].map((point) => (
                <option key={point}>{point + 1}</option>
              ))}
            </Control.select>
          </Row>
          <Row className="form-group mb-3">
            <Label htmlFor="name">Your Name</Label>
            <Control.text
              model=".name"
              id="name"
              name="name"
              placeholder="Your Name"
              className="form-control"
              onChange={(e) => handleInputChange(e)}
              onBlur={(e) => handleBlur(e)}
            />
            <div style={{ color: "red" }}>{lengthError ? lengthError : ""}</div>
          </Row>
          <Row className="form-group mb-3">
            <Label htmlFor="comment">Comment</Label>
            <Control.textarea
              model=".comment"
              id="comment"
              name="comment"
              rows="6"
              className="form-control"
              onChange={(e) => handleInputChange(e)}
              onBlur={(e) => handleBlur(e)}
            />
          </Row>
          <Row>
            <Button type="submit" color="primary" className="w-25">
              Submit
            </Button>
          </Row>
        </LocalForm>
      </ModalBody>
    </Modal>
  );
}
