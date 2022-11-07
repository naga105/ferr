function RenderComment({ comments, postComment, dishId }) {
  return (
    <>
      <h4>Comments</h4>
      {comments ? (
        comments.map((comm, key) => {
          return (
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
          );
        })
      ) : (
        <div></div>
      )}
    </>
  );
}
export default RenderComment;
