//random background color
const background = document.querySelector('body');
let randomHue = Math.floor(Math.random()*360);
let randomHue2 = Math.floor(Math.random()*360);
console.log(randomHue);
background.style.background = 'hsl(' + randomHue + ', 100%, 50%)';
background.style.color = 'hsl(' + randomHue2 + ', 100%, 50%)';
