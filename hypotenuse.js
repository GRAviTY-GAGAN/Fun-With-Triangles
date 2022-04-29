const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputEl = document.querySelector("#output");

hypotenuseBtn.addEventListener("click", calculateHypotenuse);

function calculateHypotenuse(){
    const sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    outputEl.innerText = "The length of Hypotenuse is " + lengthOfHypotenuse;
}

function calculateSumOfSquares(A, B) {
    const sumOfSquares = A**2 + B**2;

    return sumOfSquares;
}