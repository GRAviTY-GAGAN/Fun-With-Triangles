const inputs = document.querySelectorAll(".inputs");
const checkAreaBtn = document.querySelector("#check-area");
const outputEl = document.querySelector("#output");

checkAreaBtn.addEventListener("click", area);

function area() {
    const baseheight = baseHeight(Number(inputs[0].value), Number(inputs[1].value));
    const triangleArea = baseheight * 0.5;
    outputEl.innerText = `The area of the triangle is ${triangleArea} cm²`;

}

function baseHeight(B, H){
    const baseheight = B * H;
    return baseheight;
}

