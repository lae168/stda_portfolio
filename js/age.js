const BIRTH = new Date(2006, 3, 18, 0, 0, 0);

function pad(n) {
  return String(n).padStart(2, "0");
}

function ageParts(now) {
  let years = now.getFullYear() - BIRTH.getFullYear();
  let months = now.getMonth() - BIRTH.getMonth();
  let days = now.getDate() - BIRTH.getDate();
  let hours = now.getHours() - BIRTH.getHours();
  let minutes = now.getMinutes() - BIRTH.getMinutes();
  let seconds = now.getSeconds() - BIRTH.getSeconds();

  if (seconds < 0) {
    seconds += 60;
    minutes -= 1;
  }
  if (minutes < 0) {
    minutes += 60;
    hours -= 1;
  }
  if (hours < 0) {
    hours += 24;
    days -= 1;
  }
  if (days < 0) {
    const prev = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prev.getDate();
    months -= 1;
  }
  if (months < 0) {
    months += 12;
    years -= 1;
  }

  return { years, months, days, hours, minutes, seconds };
}

function render() {
  const parts = ageParts(new Date());
  document.getElementById("years").textContent = parts.years;
  document.getElementById("months").textContent = parts.months;
  document.getElementById("days").textContent = parts.days;
  document.getElementById("hours").textContent = pad(parts.hours);
  document.getElementById("minutes").textContent = pad(parts.minutes);
  document.getElementById("seconds").textContent = pad(parts.seconds);

  document.getElementById("hero-age").textContent = `${parts.years} years old`;
  document.getElementById("precise-age").textContent =
    `${parts.years} years, ${parts.months} months, ${parts.days} days, ` +
    `${pad(parts.hours)}:${pad(parts.minutes)}:${pad(parts.seconds)}`;
}

render();
setInterval(render, 1000);
