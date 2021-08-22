const kmInput = document.getElementById("kmInput");
const daysInput = document.getElementById("daysInput");
const rentResP = document.getElementById("rentResP");
const nextRent = document.getElementById("nex-rent");
const rentTxt = rentResP.textContent;
const priceDay = 60;
const priceKm = 0.15;

function CalcRent() {
    const kms = AssignInput(kmInput);
    const days = AssignInput(daysInput);

    const priceRes = (kms * priceKm) + (days * priceDay);

    const resTxt = rentTxt + priceRes.toFixed(2);
    
    rentResP.textContent = resTxt.replace(".", ",");

    Show(nextRent);
}

function ChangePage(page) {
    document.location.href = page;
}