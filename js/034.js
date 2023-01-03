"use strict";

// События на мобильных браузерах;

// touchstart // Простое касание;
// touchmove // Движение пальца по экрану;
// touchend // Момент, когда мы отпустили палец;
// touchenter // Момент, когда мы ведем пальцем по экрану, при этом наскакиваем на какой-то элемент на который повешено это событие;
// touchleave // Тоже самое что touchenter, только наш палец ушел с этого события (вышел за пределы);
// touchcancel // Возникает когда точка соприкосновения больше не регистрируется на поверхности (например во время серфинга наш палец выйдет за пределы браузера);

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log('Start');
        console.log(e.targetTouches);
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();
        console.log(e.targetTouches[0].pageX); // Событие которое было совершено первым пальцем и возвращает значение движение этого пальца по оси "x". На практике если палец пользователя переходит через определенную границу, то происходит переключение слайда на слайдере (самостоятельная реализация редко встречается, зачастую подключают внешние библиотеки, такие как HAMMER.JS);
    });

    // box.addEventListener('touchend', (e) => {
    //     e.preventDefault();
    //     console.log('End');
    // });
});

// Дополнительные свойства у объекта "e" ("event" который указывается как параметр callback функции);
// touches // Список всех пальцев которые взаимодействуют с экраном;
// tragetTouches // Если нас интересуют все пальцы что взаимодействуют с этим элементов (с одним элементом);
// chagedTouches // Список пальцев которые учавствуют в этом событии;
