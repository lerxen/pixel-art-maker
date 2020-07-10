let divblocks = document.getElementsByClassName('divblock');
for (let div of divblocks){
  div.addEventListener('click', function(){
    div.style.background = pickedColor;
    div.style.borderColor = pickedColor;
  });
}
let palette = document.getElementsByClassName('color');
let pickedColor = 'white';
for (let color of palette) {
  color.addEventListener('click', function(){
    pickedColor = color.style.background;
    indicator.style.background = pickedColor;
  })
};
let indicator = document.getElementsByClassName('indicator')[0];
let drawFlag = false;
for (let div of divblocks){
  div.addEventListener('mousedown', function(){
    div.style.background = pickedColor;
    div.style.borderColor = pickedColor;
    drawFlag = true;
  });
}
for (let div of divblocks){
  div.addEventListener('mouseenter', function(){
    if (drawFlag === true){
      div.style.background = pickedColor;
      div.style.borderColor = pickedColor;
    }
  });
}
for (let div of divblocks){
  div.addEventListener('mouseup', function(){
    if (drawFlag === true){
      div.style.background = pickedColor;
      div.style.borderColor = pickedColor;
      drawFlag = false;
    }
  })
}
let picker = document.getElementById('picker');
picker.addEventListener('change', function(e){
  pickedColor = e.target.value;
  indicator.style.background = pickedColor;
})
let button = document.querySelector('.resetButton');
button.addEventListener('click', function(){
  for (let div of divblocks){
    div.style.background = 'white';
    div.style.borderColor = 'grey';
  }
})
