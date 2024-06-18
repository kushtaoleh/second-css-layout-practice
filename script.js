const hamburger = document.querySelector('.hamburger');
const search = document.querySelector('.ham-search');
const topLink = document.querySelector('.buttons-wrapper');
const searchTopBar = document.querySelector('.search-bar-top');
const closeTopBar = document.querySelector('.close-search');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    topLink.classList.toggle('active');
});

search.addEventListener('click', () => {
    searchTopBar.classList.toggle('active');
})
closeTopBar.addEventListener('click', () => {
    searchTopBar.classList.remove('active');
})



document.querySelectorAll('.topLink').forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove('active');
    topLink.classList.remove('active');
}))