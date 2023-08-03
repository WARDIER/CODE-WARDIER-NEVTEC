function checkDate() {
    const inputDate = new Date(document.getElementById("dateInput").value);
    const today = new Date();
    const resultElement = document.getElementById("result");
  
    if (inputDate.toDateString() === today.toDateString()) {
      resultElement.textContent = "The date is today!";
    } else if (inputDate < today) {
      resultElement.textContent = "The date is in the past.";
    } else {
      resultElement.textContent = "The date is in the future.";
    }
  }
// CODE CREATER BY WARDIER