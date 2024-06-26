import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id: "heading" }, "Hello World");
const heading = (
  <h1 className="heading">Hello World</h1>
);

// functional component
const HeadingComponent = () => (
  <h1 className="heading">Hello World</h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);