function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  const transaction = `You ordered ${quantity} droids worth  ${totalPrice}  credits!`;
  return transaction;
}

const transactionMake1 = makeTransaction(5, 3000);
console.log(transactionMake1);

const transactionMake2 = makeTransaction(3, 1000);
console.log(transactionMake2);

const transactionMake3 = makeTransaction(10, 500);
console.log(transactionMake3);
