const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";
//Defina a função para calcular com base no botão clicado.

const calculate = (btnValue) => {
  display.focus();
  if (btnValue === "=" && output !== "") {
    //Se a saída tiver '%', substitua por '/100' antes de avaliar.

    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    //Se o botão Del for clicado, remova o último caractere da saída.

    output = output.toString().slice(0, -1);
  } else {
    //Se a saída estiver vazia e o botão for specialchars, retorne

    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};
//Adicione o ouvinte de eventos aos botões, ligue para calcular () no clique.

buttons.forEach((button) => {
  //Botão Clique em chamadas de ouvinte Calcule () com o valor do conjunto de dados como argumento.

  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});