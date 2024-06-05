let years = document.querySelector('input');
let days = document.querySelectorAll('label')[1];
let convert = document.querySelector('button');

function convertAgeToDays() {
  const ageInYears = parseInt(years.value); // get the value of the input field
  const daysInYear = 365; //leap years excluded
  const ageInDays = ageInYears * daysInYear;
  days.innerText = `You are ${ageInDays} days old.`; // assign the result to the label
}

convert.addEventListener('click', convertAgeToDays); // add event listener

//   const ageInYears = 23;
//   const ageInDays = convertAgeToDays(ageInYears);
//   console.log(`You are ${ageInDays} days old.`);