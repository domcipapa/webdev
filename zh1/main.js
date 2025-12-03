/* ============================================================
   1. szamBeker() → bekér egy számot és létrehoz egy <select>
   ============================================================ */
function szamBeker() {
    // Ask user for number
    let szam = parseInt(prompt("Adj meg egy számot!"));

    // Container we'll fill
    let htmlKod = "<select id='valasztas'>";

    // Create dropdown options 1..szam
    for (let i = 1; i <= szam; i++) {
        htmlKod += `<option value="${i}">Szám: ${i}</option>`;
    }

    htmlKod += "</select>";

    // Insert into page
    document.getElementById('lista').innerHTML = htmlKod;
}


/* ============================================================
   2. kiolvas() → két szám beolvasása és művelet végrehajtása
   ============================================================ */
function kiolvas() {

    // Convert input values to integers
    let szam1 = parseInt(document.getElementById("op_1").value);
    let szam2 = parseInt(document.getElementById("op_2").value);

    // Ask for operator
    let muvelet = prompt("Add meg a műveletet (+, -, *, /):");

    let eredmeny;

    switch (muvelet) {

        case "+":
            eredmeny = szam1 + szam2;
            break;

        case "-":
            eredmeny = szam1 - szam2;
            break;

        case "*":
            eredmeny = szam1 * szam2;
            break;

        case "/":
            if (szam2 === 0) {
                alert("0-val nem lehet osztani!");
                return;  // stop the function
            }
            eredmeny = szam1 / szam2;
            break;

        default:
            alert("Érvénytelen művelet!");
            return;
    }

    // Print result on page
    document.getElementById("calc_result").innerText =
        "A művelet eredménye: " + eredmeny;
}


/* ============================================================
   3. idotMutat() → év kiírása
   ============================================================ */
function idotMutat() {
    // Create date object
    let most = new Date();

    // Extract current year
    let ev = most.getFullYear();

    // Display it
    document.getElementById("datumido").innerText =
        "Jelenlegi év: " + ev;
}
