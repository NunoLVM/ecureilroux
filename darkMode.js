/* const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

function toggleTheme (){
toggleButton.addEventListener('click', () => {
  if (body.classList.contains('light-theme')) {
    body.classList.replace('light-theme', 'dark-theme');
  
  } else {
    body.classList.replace('dark-theme', 'light-theme');
   
  }
})}; */
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}