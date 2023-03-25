'use strict';

const domNavigation = document.getElementById('headerTwo')
console.log(domNavigation)

const section = document.querySelectorAll('body > section')
console.log(section)

const punkt5 = document.querySelector('li:nth-of-type(5)');
console.log(punkt5)

// у документі нема елементу з класом 'hatredLevelBlock', але селектор зробив.
const hatredLevelBlock = document.getElementsByClassName('hatredLevelBlock')
console.log(hatredLevelBlock)
