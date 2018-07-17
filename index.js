// // PLAIN OL Javascript CODE
// let hello = document.createElement('h1')

// hello.textContent = "What up"


// // jQuery Styles for ya boi
// let jqHello = $("<h1>", {
//     text: "AYYYYYY NIGGA"
// });


// *REACT* - aka the real way
// Dont worry about the second argument

const h = React.createElement;


// Make the thing 
let title = h("h1", null, "Kebabs");
let item = h("li", null, "chicken hearts");
let list = h("ul", null, item);


let main = h("div", null, [
    title, 
    list
]);

// Draw the thing to the screen
ReactDOM.render(main, document.querySelector("[data-root]"));
