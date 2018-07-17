// // PLAIN OL Javascript CODE
// let hello = document.createElement('h1')

// hello.textContent = "What up"


// // jQuery Styles for ya boi
// let jqHello = $("<h1>", {
//     text: "AYYYYYY NIGGA"
// });


// *REACT* - aka the real way
// Dont worry about the second argument

// Make the thing 
let hello = React.createElement("h1", null, "hello react!");

    // Draw the thing to the screen
ReactDOM.render(hello, document.querySelector("[data-root]"));
