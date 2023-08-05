let users = [
  {
    firstname: "John",
    lastname: "Doe",
    age: 16,
    sex: "Male",
  },
  {
    firstname: "Jane",
    lastname: "Smith",
    age: 30,
    sex: "Female",
  },
  {
    firstname: "Michael",
    lastname: "Johnson",
    age: 22,
    sex: "Male",
  },
  {
    firstname: "Emily",
    lastname: "Williams",
    age: 28,
    sex: "Female",
  },
  {
    firstname: "David",
    lastname: "Brown",
    age: 15,
    sex: "Male",
  },
  {
    firstname: "Olivia",
    lastname: "Taylor",
    age: 29,
    sex: "Female",
  },
  {
    firstname: "Daniel",
    lastname: "Martinez",
    age: 72,
    sex: "Male",
  },
  {
    firstname: "Sophia",
    lastname: "Anderson",
    age: 12,
    sex: "Female",
  },
  {
    firstname: "Matthew",
    lastname: "Garcia",
    age: 26,
    sex: "Male",
  },
  {
    firstname: "Isabella",
    lastname: "Rodriguez",
    age: 68,
    sex: "Female",
  },
];

// Create a filter that will return all the female store it in a variable called femaleUsers.

/* 
1) name the the array we are trying to filter
2) inside the parenthesis we need a function. The function will return something that is true
3) singular version of the array as a parameter for the function
4) Usually when we filter we now have access to an object and can use dot notation
*/

let femaleUsers = users.filter((user) => user.sex === "Female");
console.log(femaleUsers);
// ? How many female users do we have?
console.log(femaleUsers.length);

// ? How many users do we have that are over the age of 21

let over21Users = users.filter((user) => user.age >= 21);
console.log(over21Users.length);

// How to remove something from an array using a filter.

users = users.filter(
  (user) => user.firstname !== "John" && user.lastname !== "Doe"
);
console.log("John DOE NO MOE", users);
const movies = [
  {
    title: "The Conjuring",
    year: 2013,
    category: "horror",
  },
  {
    title: "Jurassic Park",
    year: 1993,
    category: "adventure",
  },
  {
    title: "Toy Story",
    year: 1995,
    category: "family",
  },
  {
    title: "A Quiet Place",
    year: 2018,
    category: "horror",
  },
  {
    title: "Indiana Jones and the Raiders of the Lost Ark",
    year: 1981,
    category: "adventure",
  },
  {
    title: "Finding Nemo",
    year: 2003,
    category: "family",
  },
  {
    title: "Get Out",
    year: 2017,
    category: "horror",
  },
  {
    title: "Avatar",
    year: 2009,
    category: "adventure",
  },
  {
    title: "Frozen",
    year: 2013,
    category: "family",
  },
  {
    title: "The Shining",
    year: 1980,
    category: "horror",
  },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
    category: "adventure",
  },
  {
    title: "The Lion King",
    year: 1994,
    category: "family",
  },
  {
    title: "Hereditary",
    year: 2018,
    category: "horror",
  },
  {
    title: "Indiana Jones and the Last Crusade",
    year: 1989,
    category: "adventure",
  },
  {
    title: "Despicable Me",
    year: 2010,
    category: "family",
  },
  {
    title: "The Exorcist",
    year: 1973,
    category: "horror",
  },
  {
    title: "Pirates of the Caribbean: The Curse of the Black Pearl",
    year: 2003,
    category: "adventure",
  },
  {
    title: "The Incredibles",
    year: 2004,
    category: "family",
  },
  {
    title: "It",
    year: 2017,
    category: "horror",
  },
  {
    title: "Indiana Jones and the Temple of Doom",
    year: 1984,
    category: "adventure",
  },
];

/* 
1) create a variable called adventure and have it store all the adventure films
2) create a variable called horror and have it store all the horror films.
3) create a variable called family and have it store all the family films

How many movies are in the library
give me a count for each category

*/

const adventure = movies.filter((movie) => movie.category === "adventure");
const horror = movies.filter((movie) => movie.category === "horror");
const family = movies.filter((movie) => movie.category === "family");

console.log("video count:", movies.length);
console.log("adventure:", adventure.length);
console.log("horror:", horror.length);
console.log("family:", family.length);
