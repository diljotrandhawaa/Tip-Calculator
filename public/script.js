
/*
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div

let totalBillDiv = document.querySelector("#billTotalInput");
let tipPercentageDiv = document.querySelector("#tipInput");
let noOfPeopleDiv = document.querySelector("#numberOfPeople");
let perPersonBillDiv = document.querySelector("#perPersonTotal");
const errorMsgDiv = document.querySelector("#error-msg");

// Get number of people from number of people div
let noOfPeople = Number(noOfPeopleDiv.innerText);

// ** Calculate the total bill per person **
const calculateBill = () => {
  if (noOfPeople === 0 ) {
    perPersonBillDiv.innerText = `$0.00`;
  }
  if (noOfPeople > 0) {
    // get bill from user input & convert it into a number
    let totalBill = Number(totalBillDiv.value);

    // get the tip from user & convert it into a percentage (divide by 100)
    let tipPercentage = Number(tipPercentageDiv.value);

    // // get the total tip amount
    let totalTipAmount = totalBill * (tipPercentage / 100);

    // // calculate the total (tip amount + bill)
    let totalBillAfterTip = totalBill + totalTipAmount;

    // // calculate the per person total (total divided by number of people)
    let perPersonBill = (totalBillAfterTip / noOfPeople).toFixed(2);

    // // update the perPersonTotal on DOM & show it to user
    perPersonBillDiv.innerText = `$${perPersonBill}`;
    console.log(perPersonBillDiv)
  }
}

// ** Splits the bill between more people **
const increasePeople = () => {

  if (noOfPeople >= 0) {
    errorMsgDiv.style.display = "none";
  }

  // increment the amount of people
  noOfPeople++;

  // update the DOM with the new number of people
  noOfPeopleDiv.innerText = noOfPeople;

  // calculate the bill based on the new number of people
  calculateBill();
}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)
  if (noOfPeople <= 0) {
    errorMsgDiv.style.display = "block";
    return
  }

  // decrement the amount of people
  noOfPeople--;

  // update the DOM with the new number of people
  noOfPeopleDiv.innerText = noOfPeople;

  // calculate the bill based on the new number of people
  calculateBill();
}
