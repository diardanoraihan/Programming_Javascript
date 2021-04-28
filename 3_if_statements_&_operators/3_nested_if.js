// ===================== Part 3: Nested If Statement =========================
const bankAccountBalance = 123;
const costOfItem = 120;
const tax = 0.50;

if (bankAccountBalance >= costOfItem + tax){
    console.log("You can purchase this item!")
    if (tax >=0.5){
        console.log("Tax amount too high");
    }
}