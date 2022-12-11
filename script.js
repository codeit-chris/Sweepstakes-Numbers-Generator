let number = document.getElementById("number");
let fact = document.getElementById("lotto-facts");

let factsContainer = [
  "The first lottery was launched in 1994. 20 years later, it has created 3,700 millionaires",
  "People are more likely to get struck by lightning: 1 in 1,101,000",
  "99% of surveyed winners still play National Lottery games after they have won, and 70% are convinced that they will win again.",
  "The odds of winning the lottery are 350 billion to one",
  "52% of winners who won $1 million or more left their jobs",
  "The biggest lottery the PCSO offers is the Ultra Lotto 6/58 where the minimum jackpot prize is P50 million.",
  " The biggest jackpot prize in the history of our country’s lottery was over P741 million — and it had only one winner",
];
fact.innerHTML = `"${factsContainer[0]}"`;
let index = 0;
setInterval(() => {
  fact.innerText = `"${factsContainer[index]}"`;
  index += 1;
  if (index === factsContainer.length) {
    index = 0;
  }
}, 7000);

// function to generate six random numbers
function generateSix(num) {
  let sixNums = [];
  let i = 0;
  while (i < 6) {
    let randomNum = Math.floor(Math.random() * num + 1);
    if (sixNums.indexOf(randomNum) === -1) {
      sixNums.push(randomNum);
      i++;
    }
  }
  return (number.textContent = sixNums.join(", "));
}

document.getElementById("sixForthyTwo").addEventListener("click", () => {
  generateSix(42); //limit 42
});

document.getElementById("sixForthyFive").addEventListener("click", () => {
  generateSix(45); //limit 45
});

document.getElementById("sixForthyNine").addEventListener("click", () => {
  generateSix(49); //limit 49
});
document.getElementById("sixFiftyFive").addEventListener("click", () => {
  generateSix(55); //limit 55
});
document.getElementById("sixFiftyEight").addEventListener("click", () => {
  generateSix(58); //limit 58
});

function clear() {
  number.textContent = "";
  document.querySelectorAll(".btn-pick").forEach((ele) => {
    ele.checked = false; //unchecks the checked radio button everytime clear btn is clicked
  });
}

// clear button event listener
document.getElementById("btn-clear").addEventListener("click", clear);

const currentYear = new Date().getFullYear();

document.getElementById("copyright-text").innerText += ` ${currentYear}`;
