// See all ramen images in the div with the id of ramen-menu. When the page loads, request the data from the server to get all the ramen objects. Then, display the image for each of the ramen using an img tag inside the #ramen-menu div.


// get data from api
// convert api data to json


const API = 'http://localhost:3000/ramens'
document.getElementById('new-ramen').addEventListener('submit', createNewRamen)

fetch(API) 
    .then(res => res.json())
    .then(renderRamens)

// iterate through each ramen

function renderRamens(ramens) {
    ramens.forEach(renderRamen)
}

// post image of each ramen to DOM
function renderRamen(ramen) {
    const ramenMenuDiv = document.getElementById('ramen-menu');
    const ramenImage = document.createElement('img');
    ramenImage.src = ramen.image;
    ramenMenuDiv.append(ramenImage);

    ramenImage.addEventListener("click", e => renderDetails(ramen))

}
// post details about each robin to div
function renderDetails(ramen) {
    const detailImage = document.getElementById('detail-image');
    const ramenName = document.getElementById('ramen-name');
    const restaurantName = document.getElementById('restaurant-name');
    const ratingDisplay = document.getElementById("rating-display");
    const commentDisplay = document.getElementById("commment-display");
    

    detailImage.src = ramen.image;
    detailImage.alt = ramen.name;
    ramenName.textContent = ramen.name;
    restaurantName.textContent = ramen.restaurant;
    ratingDisplay.textContent = ramen.rating;
    commentDisplay.textContent = ramen.comment;
}

// Create a new ramen after submitting the new-ramen form. 
// The new ramen should be appended to the#ramen-menu div. The new ramen does not need to persist; in other words, if you refresh the page, it's okay that the new ramen is no longer on the page.

function createNewRamen(e) {
    e.preventDefault();
    console.log(e.target.name.value)
    const newRamen = {
        name: e.target.name.value,
        rating: e.target.rating.value,
        restaurant: e.target.restaurant.value,
        comment: e.target['new-comment'].value,
        image: e.target.image.value,
    }
    renderRamen(newRamen)
}