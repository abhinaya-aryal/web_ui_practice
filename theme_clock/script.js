const hourEl = document.querySelector('.needle.hour');
const minuteEl = document.querySelector('.needle.minute');
const secondEl = document.querySelector('.needle.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const setTime = () => {
  const time = new Date();
  const month = time.getMonth();
  const date = time.getDate();
  const day = time.getDay();
  const hours = time.getHours();
  const hoursForClock = hours % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  hourEl.style.transform = `translate(-50%, -100%) rotate(${360 / 12 * hoursForClock}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${360 / 60 * minutes}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${360 / 60 * seconds}deg)`;

  timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}`: minutes} ${ampm}`;
  dateEl.innerHTML= `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

toggle.addEventListener('click', (e) => {
  const html = document.querySelector('html');
  if(html.classList.contains('dark')){
    html.classList.remove('dark');
    e.target.innerHTML = "Dark Mode";
  }else{
    html.classList.add('dark');
    e.target.innerHTML = "Light Mode";
  }
});

setTime();
setInterval(setTime, 1000);
