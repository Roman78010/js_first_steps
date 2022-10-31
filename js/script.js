const numbersOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');;

const personalMovieDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько его оцените?', ''),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = prompt('На сколько его оцените?', '');

personalMovieDB.movies[a] = b; // Как добавлять переменные в объект: вызываем у переменной (через точку) свойство и к этому свойству добавляем значение возвращаемое другой переменной (через квадратные скобки), потом присваиваем этой переменной другую переменную (её возвращаемое значение); 
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);