window.onload = function() {

  //------------LAYERS----------//

  const startButton = document.getElementById('start');
  const introLayer = document.getElementById('intro');
  const burgerLayer = document.getElementById('burger-full');
  const checkoutLayer = document.getElementById('checkoutLayer');
  //------------BURGER LEFT----------//

  const cheese = document.getElementById('cheese1');
  const tomato = document.getElementById('tomato1');
  const onion = document.getElementById('onion1');
  const meatball = document.getElementById('meatball1');
  const pickle = document.getElementById('pickle1');
  const patty = document.getElementById('patty1');
  const topBun = document.getElementById('bunTopR');

  const addCheese = document.getElementById('addCheese');
  const addTomato = document.getElementById('addTomato');
  const addOnion = document.getElementById('addOnion');
  const addMeatball = document.getElementById('addMeatball');
  const addPickle = document.getElementById('addPickle');
  const addPatty = document.getElementById('addPatty');

  const burger = document.getElementById('burger');

  const checkoutButton = document.getElementById('checkout')
  //----------------CHECKOUT-----------//

 ingridientsArray = [];
  total = 0;

    // cheese.onClick = function() {
    //   cheese.style.display = 'none';
    // }

  //----------layers function-----------//

  function hideLayers(elemHide, elemShow,  button){
    button.addEventListener("click", function(){
      if (elemHide.style.display == 'none') {
        elemHide.style.display = 'block';
      } else {
        elemHide.style.display = 'none';
        elemShow.style.display = 'flex';
      }
    }, false);
  }

  //--------element funcions-------//


  addCheese.onclick = function () {
    if (ingridientsArray.length == 6) {
      var popup = document.getElementById("myPopup");
      popup.classList.toggle("show");
    } else {
      addCheeseToBurger(cheese);
      ingridientsArray.push(cheese);
      total += 3;
      document.getElementById('pay').innerHTML = "TOTAL " + total + "$";
      console.log(ingridientsArray);
    }
  };


  addTomato.onclick = function () {
    if (ingridientsArray.length == 6) {
      var popup = document.getElementById("myPopup1");
      popup.classList.toggle("show1");
    } else {
      addTomatoToBurger(tomato);
      ingridientsArray.push(tomato);
      total += 3;
      document.getElementById('pay').innerHTML = "TOTAL " + total + "$";

      console.log(ingridientsArray);
    }
  };

  addOnion.onclick = function () {
    if (ingridientsArray.length == 6) {
      var popup = document.getElementById("myPopup2");
      popup.classList.toggle("show2");
    } else {
      addOnionToBurger(onion);
      ingridientsArray.push(onion);
      total += 3;
      document.getElementById('pay').innerHTML = "TOTAL " + total + "$";
      console.log(ingridientsArray);
    }
  };

  addMeatball.onclick = function () {
    if (ingridientsArray.length == 6) {
      var popup = document.getElementById("myPopup3");
      popup.classList.toggle("show3");
    } else {
      addMeatballToBurger(meatball);
      ingridientsArray.push(meatball);
      total += 3;
      document.getElementById('pay').innerHTML = "TOTAL " + total + "$";
      console.log(ingridientsArray);
    }
  };

  addPickle.onclick = function () {
    if (ingridientsArray.length == 6) {
      var popup = document.getElementById("myPopup4");
      popup.classList.toggle("show4");
    } else {
      addPickleToBurger(pickle);
      ingridientsArray.push(pickle);
      total += 3;
      document.getElementById('pay').innerHTML = "TOTAL " + total + "$";
      console.log(ingridientsArray);
    }
  };

  addPatty.onclick = function () {
    if (ingridientsArray.length == 6) {
      var popup = document.getElementById("myPopup5");
      popup.classList.toggle("show5");
    } else {
      addPattyToBurger(patty);
      ingridientsArray.push(patty);
      total += 3;
      document.getElementById('pay').innerHTML = "TOTAL " + total + "$";
      console.log(ingridientsArray);
    }
  };

  function showCheckout(){
    if (ingridientsArray.length == 3){
      checkout.style.display = 'block';
    }
  }


  function addCheeseToBurger(element) {
    console.log(element);
    topBun.insertAdjacentHTML('afterend', '<div id="cheese1"></div>');
  }

  function addTomatoToBurger(element) {
    console.log(element);
    topBun.insertAdjacentHTML('afterend', '<div id="tomato1"></div>');
  }

  function addOnionToBurger(element) {
    console.log(element);
    topBun.insertAdjacentHTML('afterend',
    '<div id="onion1"><span></span><span></span><span></span><span></span><span></span></div>');
  }

  function addMeatballToBurger(element) {
    console.log(element);
    topBun.insertAdjacentHTML('afterend', '<div id="meatball1"></div>');
  }

  function addPickleToBurger(element) {
    console.log(element);
    topBun.insertAdjacentHTML('afterend', '<div id="pickle1"></div>');
  }

  function addPattyToBurger(element) {
    console.log(element);
    topBun.insertAdjacentHTML('afterend', '<div id="patty1"></div>');
  }

  //--------------INTRO LAYER-----------//

  hideLayers(introLayer, burgerLayer, startButton);

  document.getElementById('total').innerHTML = "You have to pay total "
  + total + "$";


  const back = document.getElementById('backButton');

  function goToCheckout(){
    if(ingridientsArray.length > 0){
    }
  }
  hideLayers(burgerLayer, checkoutLayer, checkoutButton);

  hideLayers(checkoutLayer, burgerLayer, back);

};
