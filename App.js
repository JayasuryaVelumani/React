/*
<div id='parent>
<div id='child'>
<h1> I'm h1 tag </h1>
<p> I'm p tag </p>
</div>

React.createElement(object)=>HTML Browser Object Model
ReactDOM.createRoot() => It will create a root for us to render our React element
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("p", {}, "I'm p tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("p", {}, "I'm p tag"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//  const heading = React.createElement(
//         "h1",
//         { className: "heading" },
//         "Hello World",
//       );
//       const root = ReactDOM.createRoot(document.getElementById("root"));
//       root.render(heading);
