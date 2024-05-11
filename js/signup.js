const confirmRegister = () => {
  var ele = document.getElementById('confirm');

    if (ele.style.display == 'none') {
      ele.style.display = 'block';
    } else {
      ele.style.display = 'none';
    }
};

$("#confirmButton").on("click", function () {
  const username = $("#username_data").val();
  const id = $("#id_data").val();
  const age = $("#age_data").val();
  const email = $("#email_data").val();
  const password = $("#password_data").val();

  $("#userConfirm").text(username);
  $("#idConfirm").text(id);
  $("#ageConfirm").text(age);
  $("#emailConfirm").text(email);
  $("#passwordConfirm").text(password);
})

const returnConfirm = () => {
    var ele = document.getElementById('confirm');
    ele.style.display = 'none';
}

document.getElementById('register').onsubmit = function (event) {
  event.preventDefault();
  let inputForm = document.getElementById('register').content.value;
  document.getElementById('confirmContent').textContent = `${inputForm}`;
}

const createAccount = document.getElementById('createAccount');
const newStudent = document.getElementById('newStudent');

createAccount.addEventListener('click', () => {
  newStudent.style.display = 'block';
});