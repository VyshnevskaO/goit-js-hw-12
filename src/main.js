import 'normalize.css';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { createMarkup } from './js/render-functions';
import { fetchRequest } from './js/pixabay-api';


const simpleLightbox = new SimpleLightbox('.gallery a',
    {
        captionsData: "alt",
        captionPosition: "bottom",
        captionDelay: 250,
    });


const form = document.querySelector("form");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector("#animation");
const loadMore = document.querySelector(".load-btn");
let page = 1; 
let request = null;
let lastPage;


form.addEventListener("submit", handleSubmit);
loadMore.addEventListener("click", handleClick);


async function handleSubmit(event) {
    
    event.preventDefault();
    loadMore.classList.add("hidden");
    loader.classList.toggle("loader");
    gallery.innerHTML = "";
    page = 1;

    request = event.target.elements.text.value.trim();
    if (!request) {
        loader.classList.toggle("loader");
        return
    }
    try {
        const response = await fetchRequest(request)
   
        
             if (response.hits.length === 0) {
                iziToast.error({ message: 'Sorry, there are no images matching your search query. Please try again!'});
                
            } else {
                
                gallery.innerHTML = createMarkup(response.hits);
                 simpleLightbox.refresh();
         
                lastPage = Math.ceil((response.totalHits) / 15);
                if ( lastPage > 1) {
                loadMore.classList.remove("hidden");
            }
                
             }
            
        
    } catch (error) {
        console.log(error);

    } finally {
        loader.classList.toggle("loader");
        form.reset();
    }
 }


async function handleClick() {
    
    loader.classList.toggle("loader");


    page += 1;

    try {

        const response = await fetchRequest(request, page);
        gallery.insertAdjacentHTML('beforeend', createMarkup(response.hits));
        simpleLightbox.refresh();

        const { height: cardHeight } = document
            .querySelector('.gallery')
            .firstElementChild.getBoundingClientRect();


        window.scrollBy({
        top: cardHeight *2 ,
        left: 0,
        behavior: "smooth",
        });

        
        if (lastPage === page) {
            loadMore.classList.add("hidden");
             iziToast.info({ message: 'We are sorry, but you have reached the end of search results'});
          
        }
        

    } catch (error) {
         console.log(error);
    } finally {
        loader.classList.toggle("loader");
    }
 }