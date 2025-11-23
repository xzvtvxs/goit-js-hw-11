import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery} from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions";

const form = document.querySelector(".form");
const input = document.querySelector('[name = "search-text"]');
// const input = form.elements["search-text"];

form.addEventListener('submit', onSearchFormSubmit);

function onSearchFormSubmit(e) {
    e.preventDefault();
    const query = input.value.trim();
    if (!query) {
        iziToast.warning({
            title: 'Warning!',
            message: 'Please enter a search request!',
            position: 'topRight',
        });
        return;
    }
    clearGallery();
    showLoader();
    getImagesByQuery(query).then(data => {
        hideLoader();
        if (!data.hits || data.hits.length === 0) {
            iziToast.info({
                title: 'Attention!',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
            });
            return;
        }
        createGallery(data.hits);
    }).catch(() => {
        hideLoader();
        iziToast.error({
            message: 'Something went wrong! Please try again later!',
            position: 'topRight',
            color: '#EF4040',
            messageColor: '#FAFAFB',
            iconText: '',
            iconUrl: './img/error-icon.svg',
            iconColor: '#FAFAFB',
        });
    })
    form.reset();
}
