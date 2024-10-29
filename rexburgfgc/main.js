import videos from "./content.mjs"

function getRandomVideos(videos, count = 4) {
    const shuffled = [...videos].sort(() => .5 - Math.random());
    return shuffled.slice(0,count);
}

function renderVideos() {
    const galleryContainer = document.getElementById("galleryContainer");
    const randomVideos = getRandomVideos(videos)

    galleryContainer.innerHTML = "";

    randomVideos.forEach(video => {
        const figure = document.createElement("figure");
        figure.innerHTML = `
            <iframe src="${video.url}" title="${video.name}" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                    gyroscope; picture-in-picture; web-share" allowfullscreen>
            </iframe>
            <figcaption>
                <a href="${video.detailsPageUrl}" target="_blank">${video.name}</a>
            </figcaption>
        `;
        galleryContainer.appendChild(figure);
    });
}

renderVideos();
