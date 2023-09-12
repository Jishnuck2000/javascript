var item = document.getElementById("imageItem");

// // using query selector(#id_name)
var divEle = document.querySelector("#customText");

// for hide an element
function hide(){
    item.setAttribute("hidden","true");

}

// // to show the hide element
function reset(){
    item.removeAttribute("hidden","true");
}

// // change the content of the div
function change(){
    divEle.innerHTML = "<p>Your Item Is Missing</p>";
}


// // mouseover
function changeImage(){
    item.removeAttribute("src","./images/s1.png");
    item.setAttributeNS("src","./images/s2.png");

}


// // //mouseout
function restImage(){
    item.removeAttribute("src","./images/s2.png");
    item.setAttributeNS("src","./images/s1.png");
}