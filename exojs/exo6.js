let para1 = document.createElement("p");
let para2 = document.createElement("p");
let body = document.body;

para1.innerHTML = "Hello World";
para2.innerHTML = "Bonjour tout le monde";

body.append(para1);
body.append(para2);

para1.style.border = "2px solid black";
para1.style.backgroundColor = "pink";

para2.style.border = "2px solid grey";
para2.style.backgroundColor = "yellow";





