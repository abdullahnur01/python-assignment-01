
/*  functions for package card price and room update */

document.querySelectorAll('.package-card').forEach(function (card) {
  const plusButton = card.querySelector('.plus');
  const minusButton = card.querySelector('.minus');
  const priceElement = card.querySelector('.price');
  const roomCountElement = card.querySelector('.room-count');
  const thankyouElement = card.querySelector('.thankyou-text');
  const roomPrice = parseInt(priceElement.textContent);

  let price = parseInt(priceElement.textContent);
  let roomCount = 1;

  plusButton.addEventListener('click', function () {
    price += roomPrice;
    roomCount += 1;
    updatePriceAndRoom();
  });

  minusButton.addEventListener('click', function () {
    if (roomCount > 1) {
      price -= roomPrice;
      roomCount -= 1;
      updatePriceAndRoom();
    }
  });

  function updatePriceAndRoom() {
    priceElement.textContent = price;
    roomCountElement.textContent = roomCount + " room";
    thankyouElement.textContent = "Thank you for choosing " + roomCount + " room";
  }
  updatePriceAndRoom();

  const signUpButton = card.querySelector('.sign-up-btn');
  thankyouElement.style.display = 'none';
  signUpButton.addEventListener('click', function () {
    thankyouElement.style.display = 'block';
  });

});

