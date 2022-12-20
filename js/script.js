"use strict";

// const box = document.getElementById('box'); // Изначально мы обращаемся к document, дальше можно будет не обращаться; // Обязательно, как параметр метода нужно вписывать строку, не переменную;

// console.log(box);

// const btns = document.getElementsByTagName('button');

// // console.log(btns);

// console.log(btns[1]); // Получение из псевдомассива (html коллекции) по тегу 'button' второго элемента;

// const circles = document.getElementsByClassName('circle');
// console.log(circles);

// const hearts = document.querySelectorAll('.heart'); // Когда мы работаем с селекторами обязательно нужно указывать точку (.heart);

// hearts.forEach(item => {
//     console.log(item);
// });

// const oneHeart = document.querySelector('.heart'); // Этот метод позволяет выбрать один элемент по данному селектору, первый который нам попадется, следуя сверху к низу;

// console.log(oneHeart);

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart');
    
box.style.backgroundColor = 'blue';
box.style.width = '500px';