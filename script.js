//random background color
const background = document.querySelector('body');
let randomHue = Math.floor(Math.random()*360);
let randomHue2 = Math.floor(Math.random()*360);
background.style.background = 'hsl(' + randomHue + ', 100%, 50%)';
background.style.color = 'hsl(' + randomHue2 + ', 100%, 50%)';

//random video
let randomVid = Math.floor(Math.random()*3+1);
var video = document.getElementById('video');
var source = document.createElement('source');

if(randomVid==1){
  source.setAttribute('src', 'birds.mov');
  source.setAttribute('type', 'video/mp4');

  video.appendChild(source);
  video.play();
}

if(randomVid==2){
  source.setAttribute('src', 'kafka.mov');
  source.setAttribute('type', 'video/mp4');

  video.appendChild(source);
  video.play();
}

if(randomVid==3){
  source.setAttribute('src', 'eye.mov');
  source.setAttribute('type', 'video/mp4');
  
  video.appendChild(source);
  video.play();
}
