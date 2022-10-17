function RenderComment({ comments }) {
  return (
    <div className="col-12 col-md-5 m-1 text-left ">
      <h4>Comments</h4>
      {comments ? (
        comments.map((comm) => {
          return (
            <>
              <p>{comm.comment}</p>
              <p>
                --{comm.author},{" "}
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(comm.date)))}
              </p>
            </>
          );
        })
      ) : (
        <div></div>
      )}
    </div>
  );
}
export default RenderComment;
