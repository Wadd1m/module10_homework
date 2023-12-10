// Сверстайте кнопку, клик на которую будет выводить данные о размерах экрана с помощью alert. 

const btn = document.querySelector('.js-btn');
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

const windowInnerWidthScroll = window.innerWidth;
const windowInnerHeightScroll = window.innerHeight;

const windowInnerWidth = document.documentElement.clientWidth;
const windowInnerHeight = document.documentElement.clientHeight;

const pageWidth = document.documentElement.scrollWidth;
const pageHeight = document.documentElement.scrollHeight;

btn.addEventListener('click', () => {

    alert(`
    Размер экрана: ${screenWidth} * ${screenHeight} 

    Размер окна браузера с полосой прокрутки: ${windowInnerWidthScroll} * ${windowInnerHeightScroll}

    Размер окна браузера без полосы прокрутки: ${windowInnerWidth} * ${windowInnerHeight}

    Размер веб-страницы: ${pageWidth} * ${pageHeight}
    `);});