//! Document Object Model :
// It is tree-like represetation of our HTML document
// Here, each tag is known as Node
// DOM is resposible for making our webpage interactive and dynamic

//! DOM Selectors:
// //! 1) document.getElementById("")
// let ele1 = document.getElementById("box");
// console.log(ele1);
// ele1.style.backgroundColor = "yellow";

// //! 2) document.getElementsByClassName("")
// let containers = document.getElementsByClassName("container");
// console.log(containers); // HTMLCollection(3) [article.container, article.container, article.container]

// //!------> HTMLCollection is an impure array
// console.log(Array.isArray(containers)); // false

// //! 3) document.getElementsByTagName("")
// let elements = document.getElementsByTagName("div");
// console.log(elements); // HTMLCollection(3) [div, div, div]

// //! 4) document.querySelector() : returns single element
// // PRIORITY : id > class > tagname
// let ele2 = document.querySelector("div , #box , .container");
// console.log(ele2);

// //! 5) document.querySelectorAll()
// let val = document.querySelectorAll("div");
// console.log(val); // NodeList(3) [div, div, div]

// //! ------> NodeList is an impure array
// console.log(Array.isArray(val)); // false

// ! DOM MANIPULATION
const mainTag = document.querySelector("#main-container");

const h3Tag = document.createElement("h3");
const pTag = document.createElement("p");
const aTag = document.createElement("a");

aTag.href = "https://www.myntra.com";
aTag.target = "_blank";

h3Tag.textContent = "Hello World";
pTag.innerHTML = "Hii i am <em>Paragraph Tag</em>";
aTag.textContent = "Myntra";

console.log(h3Tag); // <h3>Hello World</h3>
console.log(pTag);
console.log(aTag);

mainTag.append(h3Tag, pTag, aTag);
