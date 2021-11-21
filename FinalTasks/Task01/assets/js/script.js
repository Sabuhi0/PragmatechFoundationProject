const images = [{
        name: "Dreamer",
        desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        src: "1.jpg",
        alt: "Image 1",
        active: true,
    },
    {
        name: "Crusader",
        desc: "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        src: "2.jpg",
        alt: "Image 2"
    },
    {
        name: "Adventurer",
        desc: "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
        src: "3.jpg",
        alt: "Image 3"
    },
    {
        name: "Risk Taker",
        desc: "She packed her seven versalia, put her initial into the belt and made herself on the way.",
        src: "4.jpg",
        alt: "Image 4"
    },
    {
        name: "Visioneer",
        desc: "Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy.",
        src: "5.jpg",
        alt: "Image 5"
    },
    {
        name: "Magician",
        desc: "And if she hasn’t been rewritten, then they are still using her. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        src: "6.jpg",
        alt: "Image 6"
    }
];

function renderImage(image) {
    return `
      <div class="gallery-item-bg">
      <img class="gallery-image ${image.active ? 'isActive' : ''}" src="./assets/images/${image.src}" alt="${image.alt}" /><div class="pattern"></div>
      </div>
    `
}

const fullscrenIcon = document.querySelector('.thumbs .zoom')

fullscrenIcon.addEventListener('click', fullscren);

function fullscren() {
    fullscrenIcon.classList.toggle('fullscreen')
}

function renderImages() {
    return `
        <div class="images">
            ${images.map(renderImage).join('')}
        </div>
    `
}

function mountImagesToGallery() {
    document.querySelector("#images-list--js").innerHTML = renderImages();
}

function getGalleryImages() {
    return [...document.querySelectorAll(".gallery-image")];
}

function findActiveImageIndex() {
    return getGalleryImages().indexOf(findActiveImage());
}

function findActiveImage() {
    return getGalleryImages().find((el) => el.classList.contains("isActive"));
}

function scrollActiveImage(element) {
    if (!element) return null;

    // Wait for mount.
    setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
    }, 0);
}

function updateElementsData() {

    let activeItemIndex = findActiveImageIndex();
    if (activeItemIndex < 0) return;

    /** 
     * Update buttons attr.
     */
    document.querySelector("#prev").setAttribute("data-item", activeItemIndex - 1);
    document.querySelector("#next").setAttribute("data-item", activeItemIndex + 1);

    /** 
     * Update thumb attr.
     */
    document.querySelector("#thumb--js").setAttribute(
        'src',
        findActiveImage().getAttribute('src')
    )

    /**
     * Update gallery item desc.
     */
    document.querySelector("#gallery-item-desc--js").innerHTML = `
    <h2>${images[activeItemIndex].name}</h2>
    <p>${images[activeItemIndex].desc}</p>
    `
}

function removeActiveClassFormAllItems(element) {
    getGalleryImages().forEach(item => {
        item.classList.remove('isActive');
    });
}

function setActiveClass(element) {
    if (!element) return null;
    element.classList.add('isActive');
}

function showActiveImage() {
    scrollActiveImage(
        findActiveImage()
    );
}

mountImagesToGallery();
showActiveImage();
updateElementsData();

[...document.querySelectorAll(".arrow--js")].forEach((item) => {
    item.onclick = function() {
        removeActiveClassFormAllItems();
        setActiveClass(getGalleryImages()[item.getAttribute('data-item')]);
        showActiveImage();
        updateElementsData();
    }
});