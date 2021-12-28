const body = document.querySelector('body');
const inputField = body.querySelector('.input-field');
const inputHour = body.querySelector('.input-hour');
const btnCalculate = body.querySelector('.calculate');
const sectionLoading = body.querySelector('.loading');
const sectionResult = body.querySelector('.result');
const resultField = sectionResult.querySelector('.result-field');
const resultDay = sectionResult.querySelector('.result-day');

btnCalculate.onclick = processCalculateClick;

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

function checkInput() {
  if (inputField.value === '' || inputHour.value === '') {
    alert('입력되지 않은 값이 있습니다!');
    return false;
  } else if (inputHour.value <= 0 || inputHour.value > 24) {
    alert('훈련 시간은 0 초과 24 이하의 값을 입력해야 합니다!');
    return false;
  }
  return true;
}

function processCalculateClick() {
  if (checkInput()) {
    showLoadingAndResult();
  }
}
