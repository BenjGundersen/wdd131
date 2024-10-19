import recipes from './recipes.mjs';

function random(num) {
	return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
	const listLength = list.length;
	const randomNum = random(listLength);
	return list[randomNum];
}

function tagsTemplate(tags) {
    let html = `<div class="tagcontainer">
    `;
    tags.forEach(tag => {
        html += `<button>${tag}</button>`
    });

    html += `</div>`;
    return html;
}

function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
>`
// our ratings are always out of 5, so create a for loop from 1 to 5
    for (let i = 1; i <= 5; i++) {
		// check to see if the current index of the loop is less than our rating
        if (i <= rating) {
            html += "★";
        }
		else {
            html += "☆";
        }
    }
	// after the loop, add the closing tag to our string
	html += `</span>`
	// return the html string
	return html
}

function recipeTemplate(recipe) {
	return `<figure class="recipe">
            <div class="recipecontainer">
            <img src="${recipe.image}" alt="">
            <div class="recipedetailscontainer">
                ${tagsTemplate(recipe.tags)}
            <h2><a href="#">${recipe.name}</a></h2>
                <p>${ratingTemplate(recipe.rating)}</p>
                <p class="recipedescription">
                    ${recipe.description}
                </p>
                </div>
            </div>
        </figure>`;
}

function renderRecipes(recipeList) {
    const output = document.querySelector("main");
    const recipes = recipeList.map(recipe => recipeTemplate(recipe)).join("");
    output.innerHTML = recipes;
}

function init() {
    const recipe = getRandomListEntry(recipes)
    renderRecipes([recipe]);
}

init();

const query = document.querySelector(".searchicon").addEventListener("click", searchFunction);

function searchFunction(event) {
    event.preventDefault();
    const searchQuery = document.getElementById("searchbar").value.toLowerCase();
    const filteredRecipes = filterRecipes(searchQuery);

    renderRecipes(filteredRecipes);
}

function filterRecipes(query) {
    return recipes.filter(recipe => {
        const name = recipe.name.toLowerCase();
        const description = recipe.description.toLowerCase();
        const tags = recipe.tags.join(" ").toLowerCase();
        const ingredients = recipe.recipeIngredient.join(" ").toLowerCase();

        return (name.includes(query) || description.includes(query) || tags.includes(query) || ingredients.includes(query));
    }).sort((a,b) => a.name.localeCompare(b.name));

}

//to test
//const recipe = getRandomListEntry(recipes);
//console.log(recipeTemplate(recipe));
// console.log(getRandomListEntry(recipes));