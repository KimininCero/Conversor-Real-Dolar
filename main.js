function converterReal() {
    const conversao = document.getElementById('conversaoReal').value;
    const imc = (1.00 / 5.06 * conversao);

    document.getElementById('resultado').textContent = imc.toFixed(2);
}

const toggleBtn = document.getElementById('toggle-mode');

const body = document.body;

toggleBtn.addEventListener("click", function() {

    body.classList.toggle("dark-mode")

});