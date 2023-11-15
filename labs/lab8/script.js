function toggleTheme() {
    let body = document.body;
    body.classList.toggle("dark-mode");
}

let buttonVariable = document.getElementById("toggleButton")
buttonVariable.onclick = toggleTheme;