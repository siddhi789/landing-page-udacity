// Global Variables 

const pageSections = document.querySelectorAll("section");
const navbar = document.getElementById("navbar__list");


// Build Nav

for (let i = 0; i < pageSections.length; i++) {
    const newLi = document.createElement("li");
    const sections = document.getElementsByTagName("section");
    newLi.innerHTML = `<a href="#${sections[i].id}" style="color:white;text-decoration:none;">${sections[i].id}</a>`;
    navbar.appendChild(newLi);
    newLi.style.cssText = 'padding:15px;';
    navbar.style.cssText = 'background-color:black;';
};
// Add class 'active' to section when near top of viewport
// reference: https://gomakethings.com/how-to-test-if-an-element-is-in-the-viewport-with-vanilla-javascript/

function inViewport(element) {
    let bounding = element.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

window.addEventListener("scroll", function() {
    for (const section of pageSections) {
        if (inViewport(section)) {
            section.classList.add("active");
        } else {
            section.classList.remove("active");
        }
    }
});