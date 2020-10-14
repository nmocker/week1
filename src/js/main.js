const api = new CircusApi();

const resultEl = document.querySelector('[name="result"]');
const messageEl = document.querySelector('[name="message"]');
const errorEl = document.querySelector('[name="error"]');
document.querySelector("body").addEventListener("got-data", (event) => {
  console.log("got some data to show", event.detail);

  messageEl.textContent = event.detail.message;
  resultEl.textContent = event.detail.data.value;
});

document.querySelector("body").addEventListener("got-error", (event) => {
  console.log("got an error", event.detail);

  errorEl.textContent = event.detail;
});

const getBtn = document.querySelector('[name="get"]');
getBtn.addEventListener("click", (event) => {
  event.preventDefault();

  errorEl.textContent = "";
  messageEl.textContent = "";
  resultEl.textContent = "";

  const key = document.querySelector('[name="key"]').value;
  api.getData(key);
});

const submitBtn = document.querySelector('[name="post"]');
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const value = document.querySelector('[name="data"]').value;
  api.saveData("test1234", value);
});
