function addUpNumbers(arrayString) {
  let array = arrayString.split(",").map(Number);
  let sum = array.reduce((acc, curr) => acc + curr, 0);
  return sum;
}

document.addEventListener("DOMContentLoaded", function() {
  let array = document.getElementById("array");
  let calcbtn = document.getElementById("calcbtn");
  let result = document.getElementById("result");

  calcbtn.addEventListener("click", function() {
      let arrayString = array.value.trim();
      if (arrayString === "") {
          result.textContent = " provide a list of numbers.";
          return;
      }
      const sum = addUpNumbers(arrayString);
      result.textContent = "Sum: " + sum;
  });
});