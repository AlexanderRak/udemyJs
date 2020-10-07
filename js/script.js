'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

// for (let i = 1; i <= 2; i++) {
// 	var answer1 = prompt('Один из последних просмотренных фильмов?', ''),
// 		answer2 = prompt('На сколько оцените его?', '');

// 	if (answer1 != "" && answer2 != "" && answer1 != null && answer2 != null && answer1.length < 5 && answer1 != answer2) {
// 		personalMovieDB.movies[answer1] = answer2;
// 	} else {
// 		i--;
// 	}
// }

// var i = 1;
// do {
// 	var answer1 = prompt('Один из последних просмотренных фильмов?', ''),
// 		answer2 = prompt('На сколько оцените его?', '');
// 	if (answer1 != "" && answer2 != "" && answer1 != null && answer2 != null && answer1.length < 5 && answer1 != answer2) {
// 		personalMovieDB.movies[answer1] = answer2;
// 	} else {
// 		i--;
// 	}
// 	i++;
// } while (i <= 2);

// var i = 1;
// while (i <= 2) {
// 	var answer1 = prompt('Один из последних просмотренных фильмов?', ''),
// 		answer2 = prompt('На сколько оцените его?', '');
// 	if (answer1 != "" && answer2 != "" && answer1 != null && answer2 != null && answer1.length < 5 && answer1 != answer2) {
// 		personalMovieDB.movies[answer1] = answer2;
// 	} else {
// 		i--;
// 	}
// 	i++;	
// }

if (personalMovieDB.count != null && personalMovieDB.count != 0) {
	if (personalMovieDB.count < 10) {
		console.log("Просмотрено довольно мало фильмов");
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log("Вы классический зритель");
	} else if (personalMovieDB.count >= 30) {
		console.log("Вы киноман");
	} else {
		console.log("Произошла ошибка");
	}
} else {
	console.log("Произошла ошибка");
}
console.log(personalMovieDB);
