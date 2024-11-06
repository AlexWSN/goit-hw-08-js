import { galleryItems } from "./gallery-items.js";
import SimpleLightbox from "simplelightbox"; // Importă biblioteca SimpleLightbox
import "simplelightbox/dist/simple-lightbox.min.css"; // Importă stilurile CSS pentru SimpleLightbox

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

//  markup-ul galeriei
function createGalleryItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              alt="${description}"
            />
          </a>
        </li>
      `;
    })
    .join("");
}

// Crearea markup-ului galeriei și adaugarea în container
const galleryMarkup = createGalleryItemsMarkup(galleryItems);
galleryContainer.innerHTML = galleryMarkup;

// Inițializare SimpleLightbox
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
