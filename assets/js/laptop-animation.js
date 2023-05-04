/**=====================
     Laptop Animation
==========================**/

const element = document.querySelector(".laptop-img");
let rotationDegree = 60;

window.addEventListener("scroll", () => {
    rotationDegree = Math.max(
        0,
        60 - (window.scrollY / window.innerHeight) * 180
    );
    element.style.transform = `rotateX(${rotationDegree}deg)`;
});