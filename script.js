function sortear() {
    let numeroSorteado = Math.floor(Math.random() * 9) + 1;
    document.getElementById("resultado").innerText = "Assento: " + numeroSorteado;
}