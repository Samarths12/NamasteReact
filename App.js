const parent = React.createElement(
    "div",
    {id :"parent"},
    React.createElement("div", {id:"child"}, 
        React.createElement("h1",{}, "Iam an h1 tag"))
        //you can convert the third argument inti an array to pass more than 1 children in it
)
const heading = React.createElement("h1", {}, "Hello World");
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
console.log(heading);
root.render(parent)  //it will be an object