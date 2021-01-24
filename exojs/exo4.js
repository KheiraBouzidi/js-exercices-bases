let box = document.createElement ("div");
box.classList.add("type1");
document.body.append(box);

function changer () {
    if (box.className === "type1"){
        box.className = "type2";
    }else{
        box.className =" type1";
    }
    }
    box.addEventListener ('click', changer);
