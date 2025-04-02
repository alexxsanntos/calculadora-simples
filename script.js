const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";
//Define função para calcular baseado no botão clicado.
const calculate = (btnValue) => {
  display.focus();
  if (btnValue === "=" && output !== "") {
    //Se a saída for '%', subsititui para '/100'.
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    //Se DEL é clicado, remove o último número digitado.
    output = output.toString().slice(0, -1);
  } else {
    //Se a saída está vazia e o botão é caractere especial
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};
//Adiciona evento aos botões para calcular
buttons.forEach((button) => {
  //Botão chama o calculate() com o valor do dataset.
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
