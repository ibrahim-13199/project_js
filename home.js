
document.getElementById("input1").onclick=showImg;
function showImg(){
    var x = document.getElementById("one")
    x.setAttribute("src","./img/1.jpg")
    var y = document.getElementById("two")
    y.setAttribute("src","./img/pizzavirtualimg2.jpg")
    var c = document.getElementById("three")
    c.setAttribute("src","./img/pizzavirtualimg3.jpg")
    var s = document.getElementById("four")
    s.setAttribute("src","./img/5.jpg")
    var d = document.getElementById("five")
    d.setAttribute("src","./img/3.jpeg")
    var e = document.getElementById("six")
    e.setAttribute("src","./img/4.jpg")
    new WOW().init();

}
document.getElementById("input2").onclick=showImg2;
function showImg2(){
    var x = document.getElementById("one")
    x.setAttribute("src","./img/10.jpeg")
    var y = document.getElementById("two")
    y.setAttribute("src","./img//11.jpeg")
    var c = document.getElementById("three")
    c.setAttribute("src","./img//7.jpg")
    var s = document.getElementById("four")
    s.setAttribute("src","./img/8.jpg")
    var d = document.getElementById("five")
    d.setAttribute("src","./img//9.jpg")
    var e = document.getElementById("six")
    e.setAttribute("src","./img/pizzavirtualimg3.jpg")
    new WOW().init();

}
document.getElementById("input3").onclick=showImg3;
function showImg3(){
    var x = document.getElementById("one")
    x.setAttribute("src","./img/hawawshy2.jpg")
    var y = document.getElementById("two")
    y.setAttribute("src","./img/hawawshy3.jpg")
    var c = document.getElementById("three")
    c.setAttribute("src","./img/imghawawsh1.jpg")
    var s = document.getElementById("four")
    s.setAttribute("src","./img/imghawawsh1.jpg")
    var d = document.getElementById("five")
    d.setAttribute("src","./img/hawawshy3.jpg")
    var e = document.getElementById("six")
    e.setAttribute("src","./img/hawawshy2.jpg")
    new WOW().init();

}
document.getElementById("input4").onclick=showImg4;
function showImg4(){
    var x = document.getElementById("one")
    x.setAttribute("src","./img/creep1.jpeg")
    var y = document.getElementById("two")
    y.setAttribute("src","./img/creep2.jpg")
    var c = document.getElementById("three")
    c.setAttribute("src","./img/creep3.jpg")
    var s = document.getElementById("four")
    s.setAttribute("src","./img/creep3.jpg")
    var d = document.getElementById("five")
    d.setAttribute("src","./img/creep2.jpg")
    var e = document.getElementById("six")
    e.setAttribute("src","./img/creep1.jpeg")
    new WOW().init();

}





var previousBtn = document.getElementById("previous");
var nextBtn = document.getElementById("next");

var img = document.getElementById("img2");
var stopIntervel;

var indx = 1;
var path;
function fnext() {
    console.log(indx);
    if (indx < 6)
        indx++;
    path = "./img2/" + indx + ".jpg";
    img.setAttribute("src", path)

}

function fprevious() {
    console.log(indx);
    if (indx > 1)
        indx--;
    path = "./img2/" + indx + ".jpg";
    img.setAttribute("src", path)
    console.log(indx);
}


previousBtn.addEventListener('click', fprevious)
nextBtn.addEventListener('click', fnext)
