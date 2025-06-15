function signup() {
  let message = "";
  let now = new Date();
  let birthdate = new Date(
    document.getElementById("birthdate").value
  ).getFullYear();
  let currentYear = now.getFullYear();
  let age = currentYear - birthdate;
  message += "성: " + document.getElementById("first_name").value + "\n";
  message += "이름: " + document.getElementById("last_name").value + "\n";
  message += "이메일: " + document.getElementById("email").value + "\n";
  message +=
    "전화번호: " + document.getElementById("phone_number").value + "\n";
  message += "나이: " + age + "세\n";
  if (document.getElementById("man").checked) {
    message += "성별: " + document.getElementById("man").value + "\n";
  } else {
    message += "성별: " + document.getElementById("woman").value + "\n";
  }

  let lang_count = 0;
  let languages_message = "사용해본 프로그래밍 언어: \n";
  if (document.getElementsByName("languages")[0].checked) {
    lang_count++;
    languages_message +=
      "- " + document.getElementsByName("languages")[0].value + "\n";
  }

  if (document.getElementsByName("languages")[1].checked) {
    lang_count++;
    languages_message +=
      "- " + document.getElementsByName("languages")[1].value + "\n";
  }

  if (document.getElementsByName("languages")[2].checked) {
    lang_count++;
    languages_message +=
      "- " + document.getElementsByName("languages")[2].value + "\n";
  }

  if (document.getElementsByName("languages")[3].checked) {
    lang_count++;
    languages_message +=
      "- " + document.getElementsByName("languages")[3].value + "\n";
  }

  if (lang_count === 0) {
    languages_message += "없음\n";
  }

  message += languages_message + "\n";

  alert(message);
}

function onFocusInputFirstName() {
  let input = document.getElementById("first_name");
  input.style.backgroundColor = "#b8ceff";
}

function onBlurInputFirstName() {
  let input = document.getElementById("first_name");
  input.style.backgroundColor = "#effbff";
}

function onFocusInputLastName() {
  let input = document.getElementById("last_name");
  input.style.backgroundColor = "#b8ceff";
}

function onBlurInputLastName() {
  let input = document.getElementById("last_name");
  input.style.backgroundColor = "#effbff";
}

function onFocusInputEmail() {
  let input = document.getElementById("email");
  input.style.backgroundColor = "#b8ceff";
}

function onBlurInputEmail() {
  let input = document.getElementById("email");
  input.style.backgroundColor = "#effbff";
}

function onFocusInputPassword() {
  let input = document.getElementById("password");
  input.style.backgroundColor = "#b8ceff";
}

function onBlurInputPassword() {
  let input = document.getElementById("password");
  input.style.backgroundColor = "#effbff";
}

function onFocusInputPhoneNumber() {
  let input = document.getElementById("phone_number");
  input.style.backgroundColor = "#b8ceff";
}

function onBlurInputPhoneNumber() {
  let input = document.getElementById("phone_number");
  input.style.backgroundColor = "#effbff";
}
