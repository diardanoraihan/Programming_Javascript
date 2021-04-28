// ===================== Part 4: Logical Operators =========================

const bankAccountBalance = 124;
const costOfItem = 123;
let canSpendMoney = true;

// AND operator: && 
if (bankAccountBalance >= costOfItem && canSpendMoney === true){
    console.log("You can purchase this item!")
}

// OR operator: ||
canSpendMoney = false;
if ((bankAccountBalance >= costOfItem) || 
    (canSpendMoney === true)){
    console.log("You can purchase this item!")
}

// NOT operator: !
const hasReachedCreditLimit = false;
if (!hasReachedCreditLimit){
    console.log("You can purchase this item!")
}