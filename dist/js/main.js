"use strict";

var api = new CircusApi();
var resultEl = document.querySelector('[name="result"]');
var messageEl = document.querySelector('[name="message"]');
var errorEl = document.querySelector('[name="error"]');
document.querySelector("body").addEventListener("got-data", function (event) {
  console.log("got some data to show", event.detail);
  messageEl.textContent = event.detail.message;
  resultEl.textContent = event.detail.data.value;
});
document.querySelector("body").addEventListener("got-error", function (event) {
  console.log("got an error", event.detail);
  errorEl.textContent = event.detail;
});
var getBtn = document.querySelector('[name="get"]');
getBtn.addEventListener("click", function (event) {
  event.preventDefault();
  errorEl.textContent = "";
  messageEl.textContent = "";
  resultEl.textContent = "";
  var key = document.querySelector('[name="key"]').value;
  api.getData(key);
});
var submitBtn = document.querySelector('[name="post"]');
submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  var value = document.querySelector('[name="data"]').value;
  api.saveData("test1234", value);
});
//# sourceMappingURL=main.js.map
