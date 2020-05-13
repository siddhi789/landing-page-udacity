// Helper function to check if element is in viewport
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

// Building nav
const sections = document.getElementsByTagName('section');
const navUl = document.getElementById('navbar__list');

const len = sections.length;

for (let item of sections){
    const listItem = document.createElement('li');
    listItem.innerHTML = `<a href='#${item.id}'>${item.dataset.nav}</a>`;
    navUl.appendChild(listItem);
}
/*
Added class 'my-active-class' to section when near top of viewport
Added class 'my-active-menu' to menu items when near viewport
*/

window.addEventListener("scroll", function(){
    for (let i = 0; i < len; i++){
        if(isElementInViewport(sections[i])){
            sections[i].classList.add("my-active-class");
            navUl.children[i].classList.add("my-active-menu");
        }
        if(!isElementInViewport(sections[i])){
            sections[i].classList.remove("my-active-class");
            navUl.children[i].classList.remove("my-active-menu");
        }
    }
});
