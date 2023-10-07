const password = document.getElementById("password").value;
const passwordCon = document.getElementById("password-con").value;
const validation = document.querySelector(".validation");

// passwordCon.addEventListener("input", (e) => {
//   validation.textContent = "Not match";
//   validation.classList.add = "not-match";
//   if (e.target.value === password) {
//     validation.textContent = "Password match";
//     validation.classList.remove = "not-match";
//     validation.classList.add = "match";
//   }
// });

if (password.length !== 0) {
  if (password === passwordCon) {
    validation.textContent = "Password match";
    validation.style.color = "green";
  } else {
    validation.textContent = "Password don't match";
    validation.style.color = "red";
  }
}
