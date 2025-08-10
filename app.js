const nameInput = document.getElementById("nameInput");
const addBtn = document.getElementById("addBtn");
const nameList = document.getElementById("nameList");
const drawBtn = document.getElementById("drawBtn");
const resultSection = document.getElementById("resultSection");
const resultList = document.getElementById("resultList");

let names = [];

addBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    if (name && !names.includes(name)) {
        names.push(name);
        updateNameList();
        nameInput.value = "";
    }
});

function updateNameList() {
    nameList.innerHTML = "";
    names.forEach((n, index) => {
        const li = document.createElement("li");
        li.textContent = n;
        nameList.appendChild(li);
    });
}

drawBtn.addEventListener("click", () => {
    if (names.length < 2) {
        alert("Agrega al menos 2 personas para sortear");
        return;
    }

    let givers = [...names];
    let receivers = [...names];

    // Evitar que alguien se asigne a sí mismo
    for (let i = receivers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [receivers[i], receivers[j]] = [receivers[j], receivers[i]];
    }

    // Si alguien queda con su propio nombre, rotar
    while (givers.some((giver, i) => giver === receivers[i])) {
        receivers.push(receivers.shift());
    }

    // Manejar caso impar: el último da a dos
    if (givers.length % 2 !== 0) {
        receivers[receivers.length - 1] += ` y ${receivers[0]}`;
    }

    resultList.innerHTML = "";
    givers.forEach((giver, i) => {
        const li = document.createElement("li");
        li.textContent = `${giver} → ${receivers[i]}`;
        resultList.appendChild(li);
    });

    resultSection.classList.remove("hidden");
});
