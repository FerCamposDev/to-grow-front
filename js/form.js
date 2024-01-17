
"use strict"
var form = document.getElementById("contact-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var errorStatus = document.getElementById("my-form-status-error");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    form.classList.add('d-none');
    if (response.ok) {
      status.classList.remove('d-none');
      form.reset()
    } else {
      errorStatus.classList.remove('d-none');
    }
  }).catch(error => {
    errorStatus.classList.remove('d-none');
  });
}

form.addEventListener("submit", handleSubmit)