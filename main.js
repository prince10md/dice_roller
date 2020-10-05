let roll = document.querySelector("#roll");
let totalResult = document.querySelector("#result");
let showRolls = document.querySelector("#showRoll");
let lists = document.querySelector("#lists");
roll.addEventListener("click", function () {
  let diseRolls = [];
  let userInput = document.querySelector("#num").value;
  let num = 0;
  let total = 0;
  while (num < userInput) {
    let x = Math.floor(Math.random() * 6) + 1;
    diseRolls.push(x);
    total += diseRolls[num];
    num += 1;
  }
  totalResult.innerHTML = total;
  console.log(diseRolls);
  showRolls.addEventListener("click", function () {
    str = "<ol>";
    diseRolls.forEach(function (dise) {
      str += "<li>" + dise + "</li>";
    });
    str += "</ol>";
    lists.innerHTML = str;
  });
});
showRolls.addEventListener("click", function () {
    let num1 = 0;
    str = "<ol>";
    while (num1 < showRolls.length) {
      str += "<li>" + diseRolls[num1] + "</li>";
      num1 += 1;
    }
 // diseRolls.forEach(function (dise) {
        //   str += "<li>" + dise + "</li>";
        // });
    str += "</ol>";
    lists.innerHTML = str;
  });