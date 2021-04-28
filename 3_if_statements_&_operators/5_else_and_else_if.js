// ===================== Part 5: Else and Else if =========================

const bankAccountBalance = 100;
const costOfItem = 123;
const hasCreditCard = true;
const hasReachedCreditLimit = true;

if (bankAccountBalance >= costOfItem){
    console.log("Congrats! You can pay for this with cash!")
}
else if (hasCreditCard && !hasReachedCreditLimit){
    console.log("you can pay for this credit")
}
else {
    console.log("Sorry, you cannot purchase this item!")
}
