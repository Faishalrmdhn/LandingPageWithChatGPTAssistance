// select all links in the nav
const navList = document.querySelectorAll('.nav-list a');
const navBrand = document.querySelectorAll('.nav-brand a');

// add a click event to each link
navList.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    // get the id of the section we want to scroll to
    const sectionId = event.target.getAttribute('href');
    // select the section
    const section = document.querySelector(sectionId);
    // calculate the distance from the top of the section to the top of the page
    const offsetTop = section.offsetTop;
    // use javascript to scroll to the section
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  });
});


function setTo(id) {
  const section = document.querySelector(id);
    const offsetTop = section.offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
}