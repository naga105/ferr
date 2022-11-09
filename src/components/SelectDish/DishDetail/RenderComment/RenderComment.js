import { Fade, Stagger } from "react-animation-components";
function RenderComment({ comments, postComment, dishId }) {
  return (
    <>
      <h4>Comments</h4>
      <Stagger in>
        {comments ? (
          comments.map((comm, key) => {
            return (
              <Fade in>
                <div key={key}>
                  <p>{comm.comment}</p>
                  <p>
                    --{comm.author},{" "}
                    {new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    }).format(new Date(Date.parse(comm.date)))}
                  </p>
                </div>
              </Fade>
            );
          })
        ) : (
          <div></div>
        )}
      </Stagger>
    </>
  );
}
export default RenderComment;
