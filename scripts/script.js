const lightTheme = "style/ligth.css";
const darkTheme = "style/dark.css";
const sunIcon = "assets/SunIcon.svg";
const moonIcon = "assets/MoonIcon.svg";
const themeIcon = document.getElementById("theme-icon");
const res = document.getElementById("result");
const toast = document.getElementById("toast");

function calculate(value){
  const calculatedValue = eval(value || null);
  if(isNaN(calculatedValue)){
    res.value = "Can't divide 0 with 0";
    setTimeout(() =>{
      res.value = "";
    },1300);
    }else {
      res.value = calculatedValue;
    }
  }

  //Swaps the stylesheet to achieve dark mode
function changeTheme(){
  const theme = document.getElementById("theme");
  setTimeout(() => {
    toast.innerHTML = "Calculator";
  }, 1500);

  if (theme.getAttribute("href") === lightTheme) {
    theme.setAttribute("href",darkTheme);
    themeIcon.setAttribute("src", sunIcon);
    toast.innerHTML = "Dark Mode"; 
  } else {
    theme.setAttribute("href" , lightTheme);
    themeIcon.setAttribute("src",moonIcon);
    toast.innerHTML = "Light Mode";
  }
}

//displays entered value on screen

function liveScreen (enteredValue){
  if (!res.value) {
    res.value = "";
  }
  res.value += enteredValue;
}

document.addEventListener("keydown", keyboardInputHandler);

function keyboardInputHandler(e){
  e.preventDefault();

 // Verificar se o caractere digitado é um dígito de "0" a "9"
if (e.key === "0" || e.key === "1" || e.key === "2" || e.key === "3" || e.key === "4" || 
    e.key === "5" || e.key === "6" || e.key === "7" || e.key === "8" || e.key === "9") {
  res.value += e.key;
}

//operators
if (e.key === "+") {
  res.value += "+";
} else if (e.key === "-") {
  res.value += "-";
} else if (e.key === "*") {
  res.value += "*";
} else if(e.key === "/"){
  res.value += "/";
}

if(e.key === "."){
  res.value += ".";
}

if (e.key === "Enter") {
  calculate(result.value);
}

if (e.key === "Backspace") {
  const resultInput = res.value;
  res.value = resultInput.substring(0,res.value.length -1);
}
}

