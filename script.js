const display = document.querySelector(".display");
const button = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnValue) => {
  display.focus();

  if (btnValue === "=" && output !== "") {
    // Menggunakan parseFloat untuk menangani koma sebagai desimal
    output = parseFloat(
      eval(output.replace("%", "/100").replace(",", "."))
    ).toString();
  } else if (btnValue === "C") {
    output = "";
  } else if (btnValue === "Del") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }

  display.value = output;
};

button.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
