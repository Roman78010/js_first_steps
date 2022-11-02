const numbersOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько его оцените?', '');
            
    if (a !== '' && b !== '' && a !== null && b !== null && a.length < 50 && b.length < 50) { // Если пользователь нажал "отменить": нам возвращается значение null;
        personalMovieDB.movies[a] = b; // Как добавлять переменные в объект: вызываем у переменной (через точку) свойство и к этому свойству добавляем значение возвращаемое другой переменной (через квадратные скобки), потом присваиваем этой переменной другую переменную (её возвращаемое значение);
        console.log('Done!');
    } else {
        console.log('Error!');
        i--; // Если инструкция if, выше, не выполнелась, мы обратимся к ней снова (внутри цикла) с помощью этого выражения;
    }
}

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) { // Один из способов (через логический оператор "и") задать диапазон;
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) { // Для того что бы задать, еще одно, альтернативное условие нужно использовать конструкцию else if;
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);