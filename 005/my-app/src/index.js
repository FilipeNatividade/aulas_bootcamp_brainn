import ReactDom from "react-dom";

const Title = () => {
  return (
    <>
      <h1>Title</h1>
      <span>span</span>
    </>
  );
};

ReactDom.render(<Title />, document.querySelector("#root"));
