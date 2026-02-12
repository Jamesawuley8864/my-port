const display = document.getElementById('display');

// Append value to display
function append(value) {
    display.value += value;
}

//clear display
function clearDisplay() {
    display.value = '';
}

//calculate result
function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

//Toggle dark/light theme
function toggleTheme() {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
}

//Load saved theme on page load
window.onload = () => {
    if (localStorage.getItem('theme') === 'dark'){
        document.body.classList.add('dark');
    }
};