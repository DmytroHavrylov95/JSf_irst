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

'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How mach films did you see?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How mach films did you see?', '');
    }
}

start();

var personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function rememberMyFilms() {
    for(let i=1; i<3; i++) {    
        const a = prompt('What is last your film?', ''),
              b = prompt('"How much point you do to film?"', '');
    
          if(a != null && a != '' && a.length<50 && b != null && b != '') {
            personalMovieDB.movies[a] = b;
          } else {
            i--;
          }
    }
}

rememberMyFilms();

function detectedPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Low");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log("Middle");
    } else if (personalMovieDB.count > 30) {
        console.log("High");
    } else {
        console.log("Error");
    }
}

detectedPersonalLevel();

function showDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}

showDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i=1; i<4; i++) {
        const genre = prompt(`Your favorite ganres #${i} is`);
        personalMovieDB.genres[i-1] = genre;
    }
}

writeYourGenres();

console.log(personalMovieDB);
console.log("Done!");