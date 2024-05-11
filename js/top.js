const newStudent = document.getElementById('newStudent');
const close = document.getElementById('close');

newStudent.addEventListener('click', e => {
  if (e.target.id === newStudent.id || e.target.id === close.id) {
    newStudent.style.display = 'none';
  }
});