/*
2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?','');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?','');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt ('Один из последних просмотренных фильмов?', ''),
                  b = +prompt ('На сколько оцените его?', '');
    
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }    
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        }
            else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            alert('Вы классический зритель');
        }   else if (personalMovieDB.count > 30) {
            alert('Вы киноман');
        }   else   {
            alert('Что то пошло не так');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        }
        else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 0; i < 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i+1}`);
            if (genre === '' || genre === null) {
                console.log('WRONG!');
                i--;
            }
            else {
            personalMovieDB.genres[i] = genre;    
            }
            
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Ваш любимый жанр ${item} под номером ${i+1}`)
        });
    },
};