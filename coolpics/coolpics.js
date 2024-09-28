document.getElementById("menuButton").addEventListener("click", function() {
    const navMenu = document.getElementById("navmenu");
    navMenu.classList.toggle("show"); 
  });

function handleResize() {
const menu = document.querySelector(".navmenu");
if (window.innerWidth > 1000) {
    menu.classList.add("show");
} 
else {
    menu.classList.add("hide");
}
}

document.querySelector('.gallery').addEventListener('click', viewHandler);

function viewHandler(event) {
    const imageClicked = event.target;

    const src = imageClicked.getAttribute('src');
    const srcSplit = src.split('-');

    const fullSrc = srcSplit[0] + '-full.jpeg';
    const alt = "Full image";

    const viewerTemplate = `<div class="viewer">
                            <button class="close-viewer">X</button>
                            <img src="${fullSrc}" alt="${alt}">
                            </div>`;

    document.body.insertAdjacentHTML("afterbegin", viewerTemplate);
    document.querySelector('.close-viewer').addEventListener('click', closeViewer)
}

function closeViewer() {
const viewer = document.querySelector('.viewer')
if (viewer) {
    viewer.remove();
}
}

handleResize();
window.addEventListener("resize", handleResize);
