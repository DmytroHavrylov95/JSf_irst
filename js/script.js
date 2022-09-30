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
    privat: false,
    rememberMyFilms: function() {
        for(let i=1; i<3; i++) {    
            const a = prompt('What is last your film?', ''),
                  b = prompt('"How much point you do to film?"', '');
        
              if(a != null && a != '' && a.length<50 && b != null && b != '') {
                personalMovieDB.movies[a] = b;
              } else {
                i--;
              }
        }
    },
    detectedPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Low");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log("Middle");
        } else if (personalMovieDB.count > 30) {
            console.log("High");
        } else {
            console.log("Error");
        }
    },
    showDB: function(hidden) {
        if(!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i=1; i<4; i++) {
            const genre = prompt(`Your favorite ganres #${i} is`);
            if(genre != null && genre != '' && genre.length<50) {
                this.genres[i-1] = genre;
              } else {
                i--;
              }
        }
    },
    toggleVisibleMyDB: function(){
        this.privat = !this.privat;
    }
};

console.log(personalMovieDB);
console.log("Done!");
