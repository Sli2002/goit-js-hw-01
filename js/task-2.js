function getShippingMessage(country, price, deliveryFee) {
  const totalPrice = price + deliveryFee;
  const message = `Shipping to ${country} will cost ${totalPrice} credits`;
  return message;
}
const getShipping1 = getShippingMessage("Australia", 120, 50);
console.log(getShipping1);
const getShipping2 = getShippingMessage("Germany", 80, 20);
console.log(getShipping2);
const getShipping3 = getShippingMessage("Sweden", 100, 20);
console.log(getShipping3);
