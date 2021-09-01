import ReactDom from "react-dom";

const Title = ({text}) => {
  return (
      <h1>{text}</h1>
  );
};

ReactDom.render(<Title text='props' />, document.querySelector("#root"));
