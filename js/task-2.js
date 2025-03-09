function getShippingMessage(country, price, deliveryFee) {
  const totalPrice = price + deliveryFee;
  const message = `Shipping to ${country} will cost ${totalPrice} credits`;
  return message;
}
const getShipping = getShippingMessage("Australia", 120, 50);
const getShipping = getShippingMessage("Germany", 80, 20);
const getShipping = getShippingMessage("Sweden", 100, 20);
console.log(getShipping);
