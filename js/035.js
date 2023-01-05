"use strict";

const p = document.querySelectorAll('p');
console.log(p);


function loadScript(src) {
    const script = document.createElement('script'); // Динамические скрипты ведут себя как async скрипты;
    script.src = src;
    script.async = false;
    document.body.append(script);
}

loadScript('js/test.js');
loadScript('js/test2.js');