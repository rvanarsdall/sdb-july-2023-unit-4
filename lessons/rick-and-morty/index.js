console.log("rick and morty works");
/* 
FETCH API

The Fetch is an asynchronous function
- We don't know how long it will take to get a response back.
- We have to write code to wait for for the promise to resolve

- When we use the async - await functionality we should use a try catch


*/

/* 
Fetch Structure

1) Identify the url and store it in a variable.
2) Conduct the fetch and wait the response. We will store it in a variable called "response"
3) use the .json() after we get a response back - you must await this one also.
*/

async function fetchRickAndMortyCharacters() {
  const url = "https://rickandmortyapi.com/api/character";
  try {
    let response = await fetch(url);
    let data = await response.json();

    displayMortyCharacters(data.results);
  } catch (error) {
    console.error(error);
  }
}

fetchRickAndMortyCharacters();

function displayMortyCharacters(characterData) {
  console.log(characterData);
  let characterContainer = document.querySelector(".container");
  let div = document.createElement("div");
  characterContainer.appendChild(div);

  characterData.forEach((character) => {
    let div = document.createElement("div");
    characterContainer.appendChild(div);
    // Creating Image
    let characterImageElement = document.createElement("img");
    characterImageElement.src = character.image;
    characterImageElement.classList.add("rounded");
    // Creating Character Name
    let characterNameElement = document.createElement("h3");
    characterNameElement.textContent = character.name;
    //  Creating Gender
    let characterGenderElement = document.createElement("p");
    characterGenderElement.textContent = "Gender: " + character.gender;
    // Building the HTML
    div.appendChild(characterImageElement);
    div.appendChild(characterNameElement);
    div.appendChild(characterGenderElement);

    console.log(character.name);
    console.log(character.gender);
    console.log(character.location.name);
    console.log(character.image);
    console.log(character);
  });
}
