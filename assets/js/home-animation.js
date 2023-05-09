/**=====================
     Laptop Animation
==========================**/


// laptop rotate effect
const element = document.querySelector(".laptop-img");
let rotationDegree = 60;

window.addEventListener("scroll", () => {
    rotationDegree = Math.max(0, 60 - (window.scrollY / window.innerHeight) * 160);
    element.style.transform = `rotateX(${rotationDegree}deg)`;
});


// effect object rotate
window.addEventListener("scroll", () => {
    const rotationAngle = window.pageYOffset * 0.15;
    const rotateObjects = document.querySelectorAll(".rotate-effect");
    rotateObjects.forEach((object) => {
        object.style.transform = `rotate(${rotationAngle}deg)`;
    });
});


/*====================
   02. pricing handing
=======================*/

window.addEventListener('load', handleLoadOrResize);
window.addEventListener('resize', handleLoadOrResize);

function handleLoadOrResize() {
    let pricingTop = document.getElementsByClassName("pricing-top")[0].offsetHeight;
    let pricingMid = document.getElementsByClassName("pricing-mid")[0].offsetHeight;
    let finalValue = (pricingTop + pricingMid) - 13;
    let targetElement = document.getElementsByClassName("handing-cls");
    Array.from(targetElement).forEach((elem) => elem.style.top = `${finalValue}px`)
}
