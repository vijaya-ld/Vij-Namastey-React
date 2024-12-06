// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello WOrld from React!"
// );

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1"),
    React.createElement("h2", {}, "I am h2"),
  ]),
  React.createElement(
    "div",
    { id: "child2" },
    React.createElement("h3", {}, "I am h3")
  ),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
