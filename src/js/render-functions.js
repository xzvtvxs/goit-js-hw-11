import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryList = document.querySelector(".gallery")

const loaderContainer = document.querySelector(".loader-container")

const lightBox = new SimpleLightbox(".gallery a", {
  captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    nav: true,
    navText: ['←', '→'],
    animationSpeed: 500,
    loop: false
});

export function createGallery(images) {

  let markup = "";

  for (const image of images) {

    const {
      webformatURL, largeImageURL, tags, likes, views, comments, downloads
    } = image;

      markup += `<li class="gallery-item">
        <a class="gallery-link" href=" ${largeImageURL}">
          <img
            class="gallery-image"
            src="${webformatURL}"
            alt="${tags}"
          />
        </a>
      <ul class="gallery-info">
        <li class="gallery-info-item">
          <span>Likes</span>
          ${likes}
        </li>
        <li class="gallery-info-item">
          <span>Views</span>
          ${views}
        </li>
        <li class="gallery-info-item">
          <span>Comments</span>
          ${comments}
        </li>
        <li class="gallery-info-item">
          <span>Downloads</span>
          ${downloads}
        </li>
      </ul>
    </li>`;
  };

  galleryList.insertAdjacentHTML("afterbegin", markup);
  lightBox.refresh();
};

export function clearGallery() {
  galleryList.innerHTML = "";
};

export function showLoader() {
  loaderContainer.classList.remove('is-hidden');
};

export function hideLoader() {
  loaderContainer.classList.add('is-hidden');
};