var typed = new Typed(".typing1",{
    strings:["Appetizers"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
var typed = new Typed(".typing2",{
    strings:["Salads"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
var typed = new Typed(".typing3",{
    strings:["Chinese"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
var typed = new Typed(".typing4",{
    strings:["Main Course"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
var typed = new Typed(".typing5",{
    strings:["Desserts"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
var typed = new Typed(".typing6",{
    strings:["Beverages"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

const toggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
  }
});

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');

  if (isDark) {
    themeIcon.classList.replace('fa-moon', 'fa-sun');
  } else {
    themeIcon.classList.replace('fa-sun', 'fa-moon');
  }

  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
//this is the js for price sorting
