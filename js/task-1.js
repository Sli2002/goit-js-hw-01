function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  const transaction = `You ordered ${quantity} droids worth  ${totalPrice}  credits!`;
  return transaction;
}

const transactionMake = makeTransaction(5, 3000);
const transactionMake = makeTransaction(3, 1000);
const transactionMake = makeTransaction(10, 500);
console.log(transactionMake);
