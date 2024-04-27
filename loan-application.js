function showIncomeForm() {
  document.getElementById("personalDetails").style.display = "none";
  document.getElementById("incomeForm").style.display = "block";
}

function calculateLoanLimit() {
  const incomeAmount = document.getElementById("incomeAmount").value;
  let loanLimit;

  if (incomeAmount < 1500) {
    loanLimit = 500;
  } else if (incomeAmount >= 1500 && incomeAmount <= 4000) {
    loanLimit = 2000;
  } else {
    loanLimit = 5000;
  }

  document.getElementById(
    "loanLimit"
  ).textContent = `Your loan limit is $${loanLimit}`;
  document.getElementById("incomeForm").style.display = "none";
  document.getElementById("loanAmount").style.display = "block";
}

function processLoan() {
  const requestedAmount = document.getElementById("requestedAmount").value;
  const incomeAmount = document.getElementById("incomeAmount").value;
  let loanLimit;

  if (incomeAmount < 1500) {
    loanLimit = 500;
  } else if (incomeAmount >= 1500 && incomeAmount <= 4000) {
    loanLimit = 2000;
  } else {
    loanLimit = 5000;
  }

  if (requestedAmount <= loanLimit) {
    document.getElementById("statusMessage").textContent =
      "Your loan is processing, we will give feedback within 24 hours.";
  } else {
    document.getElementById("statusMessage").textContent =
      "Your requested amount exceeds the loan limit.";
  }

  document.getElementById("loanAmount").style.display = "none";
  document.getElementById("loanStatus").style.display = "block";
}
