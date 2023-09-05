function agecalculator() {
  //slecting inputs
  const dayinput = document.getElementById("day");
  const monthinput = document.getElementById("month");
  const yearinput = document.getElementById("year");
  const currentDate = new Date();

  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();

  document.getElementById("err-msg-day").textContent = "";
  document.getElementById("err-msg-month").textContent = "";
  document.getElementById("err-msg-year").textContent = "";

  var lable_day = document.getElementById("lable_day");
  var lable_month = document.getElementById("lable_month");
  var lable_year = document.getElementById("lable_year");

  var displayYY = document.getElementById("resalt-display-year");
  var displayMM = document.getElementById("resalt-display-month");
  var displayDD = document.getElementById("resalt-display-day");

  var day = dayinput.value.trim();
  var month = monthinput.value.trim();
  var year = yearinput.value.trim();

  // Validation code

  if (month == "") {
    document.getElementById("err-msg-month").textContent =
      "This field is required";
    monthinput.style.borderColor = "red";
    lable_month.style.color = "red";
  } else if (month >= 13) {
    document.getElementById("err-msg-month").textContent =
      "Must be a valid month";
    monthinput.style.borderColor = "red";
    lable_month.style.color = "red";
  } else {
    document.getElementById("err-msg-month").textContent = "";
    monthinput.style.borderColor = "";
    lable_month.style.color = "";
  }

  if (day == "") {
    document.getElementById("err-msg-day").textContent =
      "This field is required";
    dayinput.style.borderColor = "red";
    lable_day.style.color = "red";
  } else if (day >= 31) {
    document.getElementById("err-msg-day").textContent = "Must be a valid day";
    dayinput.style.borderColor = "red";
    lable_day.style.color = "red";
  } else {
    document.getElementById("err-msg-day").textContent = "";
    dayinput.style.borderColor = "";
    lable_day.style.color = "";
  }

  if (year == "") {
    document.getElementById("err-msg-year").textContent =
      "This field is required";
    yearinput.style.borderColor = "red";
    lable_year.style.color = "red";
  } else if (year > currentYear) {
    document.getElementById("err-msg-year").textContent = "Must be in the past";
    yearinput.style.borderColor = "red";
    lable_year.style.color = "red";
  } else {
    document.getElementById("err-msg-year").textContent = "";
    yearinput.style.borderColor = "";
    lable_year.style.color = "";
  }

  // Age calculation logic

  var yearvalue = currentYear - year;
  var monthvalue = currentMonth - month;
  var dayvalue = currentDay - day;
  if (dayvalue < 0) {
    monthvalue--; // Subtract 1 month
    dayvalue += 30;
  }
  if (!year || !month || !day) {
    displayYY.textContent = "--";
    displayMM.textContent = "--";
    displayDD.textContent = "--";
    // Display the calculated age
  } else if (year || month || day) {
    displayYY.textContent = yearvalue;
    displayMM.textContent = monthvalue;
    displayDD.textContent = dayvalue;
  }
}
