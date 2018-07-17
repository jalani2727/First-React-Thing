// // PLAIN OL Javascript DOM Programming CODE
// let hello = document.createElement('h1')

// hello.textContent = "What up"


// // jQuery Styles for ya boi
// let jqHello = $("<h1>", {
//     text: "AYYYYYY NIGGA"
// });


// *REACT* - aka the real way
// Dont worry about the second argument

const h = React.createElement;

let kebabs = [
    "Roach Legs (Back-Left Only)",
    "Cactus Spines",
    "Nuts"
];
// Turn a kebab item into a vitrual DOM element
// .map will transoform an array it's given and spit back a new one
let items = kebabs.map((k) => {
    let vItem = h("li", null, k)
    return vItem;
});

// Make the thing (these are virtual DOM elements)
let title = h("h1", null, "Kebabs");
// let item = h("li", null, "Roach Legs (Back-Left Only)");
// let itme2 = h("li", null, "Cactus Spines")

let list = h("ul", null, items);

let main = h("div", null, [
    title, 
    list
]);

// Draw the thing to the screen
ReactDOM.render(main, document.querySelector("[data-root]"));
