window.onload = function() {

  //------------LAYERS----------//

  const startButton = document.getElementById('start');
  const introLayer = document.getElementById('intro');
  const burgerLayer = document.getElementById('burger-full');

  //------------BURGER LEFT----------//

  const cheese = document.getElementById('cheese');
  const cheese1 = document.getElementById('cheese1');
  const cheese2 = document.getElementById('cheese2');
  const cheese3 = document.getElementById('cheese3');
  const tomato = document.getElementById('tomato');
  const onion = document.getElementById('onion');
  const meatball1 = document.getElementById('meatball1');
  const meatball2 = document.getElementById('meatball2');
  const meatball3 = document.getElementById('meatball3');
  const pickle = document.getElementById('pickle');
  const pattyTop = document.getElementById('pattyTop');
  const pattyBottom = document.getElementById('pattyBottom');


  const addCheese = document.getElementById('addCheese');
  //----------------CHECKOUT-----------//

  const checkout = document.getElementById('checkout');

  //----------layers function-----------//

  function hideLayers(elemHide, elemShow){
    startButton.addEventListener("click", function(){
      if (elemHide.style.display == 'none') {
        elemHide.style.display = 'block';
      } else {
        elemHide.style.display = 'none';
        elemShow.style.display = 'flex';

      }
    }, false);
  }

  //--------element funcions-------//

  const bunBottomRr = document.getElementById('bunBottomR');
  bunBottomRr.insertAdjacentHTML('afterbegin', '<div id="cheese" title="cheese"></div>');


  // function showHideElem(ingridientL, ingridientR){
  //   ingridientL.addEventListener("click", function(){
  //     if (ingridientR.style.display == 'none') {
  //       ingridientR.style.display = 'block';
  //       ingridientL.style.display = 'none';
  //       counter--;
  //       console.log(counter);
  //     } else {
  //       if(counter < 3){
  //         ingridientL.style.display = 'none';
  //         ingridientR.style.display = 'block';
  //         counter++;
  //         console.log(counter);
  //       } else {
  //         return;
  //       }
  //     }
  //   });
  // }



    //
    // function disableButton(button){
    //   if(counter == 2){
    //     button.style.display = 'block';
    //   }
    // };
    //
    // disableButton(checkout);
    // console.log(checkout.style.display);
    // console.log(pickle.style.height);
    //--------------INTRO LAYER-----------//

    hideLayers(introLayer, burgerLayer);

    //-----------INGRIDIENTS------------//

    // showHideElem(cheese, cheeseR);
    // showHideElem(cheeseR, cheese);
    //
    // showHideElem(tomato, tomatoR);
    // showHideElem(tomatoR, tomato);
    //
    // showHideElem(cheese1, cheese1R);
    // showHideElem(cheese1R, cheese1);
    //
    // showHideElem(cheese2, cheese2R);
    // showHideElem(cheese2R, cheese2);
    //
    // showHideElem(cheese3, cheese3R);
    // showHideElem(cheese3R, cheese3);
    //
    // showHideElem(onion, onionR);
    // showHideElem(onionR, onion);
    //
    // showHideElem(meatball1, meatball1R);
    // showHideElem(meatball1R, meatball1);
    //
    // showHideElem(meatball2, meatball2R);
    // showHideElem(meatball2R, meatball2);
    //
    // showHideElem(meatball3, meatball3R);
    // showHideElem(meatball3R, meatball3);
    //
    // showHideElem(pickle, pickleR);
    // showHideElem(pickleR, pickle);
    //
    // showHideElem(pattyTop, pattyTopR);
    // showHideElem(pattyTopR, pattyTop);
    //
    // showHideElem(pattyBottom, pattyBottomR);
    // showHideElem(pattyBottomR, pattyBottom);

  };
