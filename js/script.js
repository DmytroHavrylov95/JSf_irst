/* "use sctrict"; */ //used new version JS

/* a=15;
console.log(a);

let number = 5; //change
const leftBorderWidth = 1; //like constant, but not

number = 15;

console.log(number);
/* 
---------------------------------------
*/
/* const obj = {
    a: 50  
};

obj.a=15;

console.log(obj.a); */
/* 
---------------------------------------
*/
/* console.log(name);
var name = 'Ivan';

name = 'Alex';


console.log(name); */ 

const numberOfFilms = +prompt('How mach films did you see?', '');

var personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('What is last your film?', ''),
      b = prompt('"How much point you do to film?"', ''),
      c = prompt('"What is last your film?"', ''),
      d = prompt('"How much point you do to film?"', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
console.log("Done!");