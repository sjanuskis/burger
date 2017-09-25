window.onload = function() {

const startButton = document.getElementById('start');
const introLayer = document.getElementById('intro');
const burgerLayer = document.getElementById('burger-full');

function hide(layerHide, layerShow){
    startButton.addEventListener("click", function(){
      if (layerHide.style.display == 'none') {
        layerHide.style.display = 'block';
      } else {
        layerHide.style.display = 'none';
        layerShow.style.display = 'flex';

      }
    }, false);
  }

    function show(layerHide){
      show.addEventListener("click", function(){
        if (layerHide.style.display == 'hidden') {
          layerHide.style.display = 'visible';
        } else {
          layerHide.style.display = 'hidden';
        }
      }, false);
    }

    hide(introLayer, burgerLayer);

};
