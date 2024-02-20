import { useDispatch } from "react-redux";
const Comment = () => {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch({ type: "COMMENT_FETCH_REQUESTED" });
  }
  return (
    <div>
      <button type="button" onClick={handleClick}>
        Fetch data
      </button>
    </div>
  );
};
export default Comment;
