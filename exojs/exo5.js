let title = document.querySelector("h1");

title.style.display = "flex";
title.style.transition = "all 0.6s";
title.style.justifyContent="center";
title.style.flexBasis="O";

title.addEventListener('mouseover', function() {
    title.style.color = "red";
} )

title.addEventListener('mouseout', function() {
    title.style.color = "black";
} )
let toggle = false;

title.addEventListener('click', function animRotate() {
    if (toggle === true) {
        title.style.transform = "rotate(360deg)";
    } else {
        title.style.transform = "rotate(-360deg)";
    }
    toggle= !toggle;
})