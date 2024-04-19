

export function createMarkup(arr) {
 return arr
        .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads}) => `<li class="gallery-item">
	<a class="gallery-link" href="${largeImageURL}">
		<img 
			class="gallery-image" 
			src="${webformatURL}"
			alt="${tags}"
			width="360px"
            height="152px" />
	</a>
    <ul class="image-text"> 
    <li class="value">Likes<p class="amount">${likes}</p></li>
    <li class="value">Views<p class="amount">${views}</p></li>
    <li class="value">Comments<p class="amount">${comments}</p></li>
    <li class="value">Downloads<p class="amount">${downloads}</p></li>
    </ul>
   </li>`)
     .join("");
    
}



