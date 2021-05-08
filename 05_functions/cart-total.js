function calcPrice(basketSum, numberOfItems, promoCode = null) {
  console.log(basketSum);
  if ((basketSum < 300) && (promoCode === 'ДАРИМ300')) {
    basketSum = 0;
    console.log(basketSum);
  } else if (promoCode === 'ДАРИМ300') {
    basketSum = basketSum - 300;
    console.log(basketSum);
  }

  if (numberOfItems >= 10) {
    basketSum = basketSum - (basketSum * 0.05);
    console.log(basketSum);
  }

  if (basketSum > 50000) {
    basketSum = basketSum - (basketSum - 50000) * 0.2;
    console.log(basketSum);
  }

  if (promoCode === 'СКИДКА15' && basketSum >= 20000) {
    basketSum = basketSum - (basketSum * 0.15)
    console.log(basketSum);
  }

  return basketSum;
}
calcPrice(78650, 16, 'ДАРИМ300');

export default { calcPrice };
