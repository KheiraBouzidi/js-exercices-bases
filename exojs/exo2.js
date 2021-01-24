let div1 = document.createElement("div");
let div2 = document.createElement("div");
let div3 = document.createElement("div");
let bod = document.body;

bod.appendChild(div1);
bod.appendChild(div2);
bod.appendChild(div3);

div1.textContent = "Pomme";
div2.textContent = "Fraise";
div3.textContent = "Framboise";

div1.style.backgroundColor = "red";
div2.style.backgroundColor = "green";
div3.style.backgroundColor = "blue";

div1.style.cssFloat = "left";
div2.style.cssFloat = "left";
div3.style.cssFloat = "left";
