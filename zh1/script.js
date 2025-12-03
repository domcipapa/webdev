// ------------------------
// 1. Év kiírása
// ------------------------
function idotMutat() {
    let ev = new Date().getFullYear();
    document.getElementById("datumido").innerText = "Jelenlegi év: " + ev;
}

// ------------------------
// 2. Számok bekérése
// ------------------------
function szamBekeres() {
    let szamok = [];

    for (let i = 0; i < 5; i++) {
        let s = parseInt(prompt("Adj meg egy számot:"));
        if (!isNaN(s)) {
            szamok.push(s);
        }
    }

    let osszeg = szamok.reduce((a, b) => a + b, 0);
    let szorzat = szamok.reduce((a, b) => a * b, 1);

    document.getElementById("eredmeny").innerHTML =
        "Összeg: " + osszeg + "<br>Szorzat: " + szorzat;
}

// ------------------------
// 3. Lista generálása
// ------------------------
function listazas() {
    let n = parseInt(prompt("Meddig generáljak listát?"));
    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    if (isNaN(n) || n < 1) {
        alert("Pozitív szám kell!");
        return;
    }

    for (let i = 1; i <= n; i++) {
        let opt = document.createElement("option");
        opt.textContent = i;
        lista.appendChild(opt);
    }
}

// ------------------------
// 4. Űrlap feldolgozás
// ------------------------
document.getElementById("userForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let nev = document.getElementById("name").value;
    let jelszo = document.getElementById("password").value;
    let nem = document.querySelector("input[name='gender']:checked").value;
    let kor = document.getElementById("age").value;
    let szul = document.getElementById("birthday").value;
    let szin = document.getElementById("color").value;

    let programozas = [];
    if (document.getElementById("java").checked) programozas.push("Java");
    if (document.getElementById("c").checked) programozas.push("C/C++");
    if (document.getElementById("csharp").checked) programozas.push("C#");

    let megj = document.getElementById("comment").value;

    let txt = `
        Név: ${nev}<br>
        Jelszó: ${jelszo}<br>
        Nem: ${nem}<br>
        Kor kategória: ${kor}<br>
        Születési dátum: ${szul}<br>
        Kedvenc szín: ${szin}<br>
        Programozási nyelvek: ${programozas.join(", ")}<br>
        Megjegyzés: ${megj}
    `;

    document.getElementById("output").innerHTML = txt;
});
