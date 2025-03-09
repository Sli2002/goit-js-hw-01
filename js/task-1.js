function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  const makeTransaction = `"You ordered ${quantity} droids worth  ${totalPrice}  credits!"`;
  console.log(makeTransaction);
}

makeTransaction(5, 3000);
makeTransaction(3, 1000);
makeTransaction(10, 500);
