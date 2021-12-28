const body = document.querySelector('body');
const inputField = body.querySelector('.input-field');
const inputHour = body.querySelector('.input-hour');
const btnCalculate = body.querySelector('.calculate');
const sectionLoading = body.querySelector('.loading');
const sectionResult = body.querySelector('.result');
const resultField = sectionResult.querySelector('.result-field');
const resultDay = sectionResult.querySelector('.result-day');

btnCalculate.onclick = showLoadingAndResult;

function showLoading() {
  sectionResult.style.display = 'none';
  sectionLoading.style.display = 'block';
}

function editResult() {
  resultField.textContent = inputField.value;
  let dayToPractice = Math.floor(10000 / inputHour.value);
  resultDay.textContent = dayToPractice;
}

function showResult() {
  sectionLoading.style.display = 'none';
  sectionResult.style.display = 'block';
}

function showLoadingAndResult() {
  showLoading();
  editResult();
  setTimeout(showResult, 2000);
}
