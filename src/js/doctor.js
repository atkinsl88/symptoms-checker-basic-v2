// If patient is selected
// Add class of patient to ID myChoice

// Else If doctor is selected
// Add class of doctor to ID myChoice

// Add a function getMychoice()
// IF statement, depending on choice
// Change href


const patient = document.getElementById('patientButton');
const doctor = document.getElementById('doctorButton');

let patientClicked = false;
let doctorClicked = false;

console.log(patientClicked)
console.log(doctorClicked)

patient.addEventListener('click', function handleClick() {
  patientClicked = true;
  console.log(patientClicked)
});

doctor.addEventListener('click', function handleClick() {
  doctorClicked = true;
  console.log(doctorClicked)
});

function getMychoice() {
  if (patientClicked == true) {
    document.getElementById("myChoice").href="#results-patient";
  } else if (doctorClicked == true ) {
    document.getElementById("myChoice").href="#results-doctor";
  }
}