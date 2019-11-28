let stepBlock1 = document.getElementById("step_block_1");
let stepBorder1 = document.getElementById("step_border1");
let stepBlock2 = document.getElementById("step_block_2");
let stepBorder2 = document.getElementById("step_border2");

let stepBlock3 = document.getElementById("step_block_3");
let stepBorder3 = document.getElementById("step_border3");


stepBlock1.onmouseover = function () {
    stepBorder1.style.borderBottom = "3px solid white"
}
stepBlock1.onmouseout = function () {
    stepBorder1.style.borderBottom = "3px solid black"
}
stepBlock2.onmouseover = function () {
    stepBorder2.style.borderBottom = "3px solid white"
}
stepBlock2.onmouseout = function () {
    stepBorder2.style.borderBottom = "3px solid black"
}
stepBlock3.onmouseover = function () {
    stepBorder3.style.borderBottom = "3px solid white"
}
stepBlock3.onmouseout = function () {
    stepBorder3.style.borderBottom = "3px solid black"
}