const now = new Date();
console.log("now: ", now);

let currentMount = now.getMonth();
let currentYear = now.getFullYear();

const previousButton = document.querySelector("button.previous");
const nextButton = document.querySelector("button.next");

const mountElement = document.querySelector(".month");

const dateNumberElements = [...document.querySelectorAll(".date-number")];
console.log("dateNumberElements: ", dateNumberElements);

const monthIndexToName = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
};

previousButton.addEventListener("click", () => {
  if (currentMount === 0) {
    currentMount = 11;
    currentYear--;
  } else {
    currentMount--;
  }
  renderMonth(currentMount, currentYear);
});

nextButton.addEventListener("click", () => {
  if (currentMount === 11) {
    currentMount = 0;
    currentYear++;
  } else {
    currentMount++;
  }
  renderMonth(currentMount, currentYear);
});

const renderMonth = (monthIndex, year) => {
  const numDaysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  console.log(numDaysInMonth);
  const firstDate = new Date(year, monthIndex);

  const firstDay = firstDate.getDay();

  mountElement.innerHTML = `${year} / ${monthIndexToName[monthIndex]}`;

  dateNumberElements.forEach((el, i) => {
    const dateNumber = i + 1 - firstDay;
    el.innerHTML =
      dateNumber > 0 && dateNumber <= numDaysInMonth ? dateNumber : "";
  });
};

renderMonth(currentMount, currentYear);
