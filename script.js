// Smooth scroll for scroll-down button
document.querySelectorAll(".scroll-down").forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-target");
    if (target) {
      document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Countdown to wedding date
const weddingDate = new Date("2026-08-29T00:00:00+08:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance <= 0) {
    document.getElementById("days").textContent = "0";
    document.getElementById("hours").textContent = "0";
    document.getElementById("minutes").textContent = "0";
    document.getElementById("seconds").textContent = "0";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// RSVP → WhatsApp
const rsvpForm = document.getElementById("rsvpForm");

rsvpForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("guestName").value.trim();
  const count = document.getElementById("guestCount").value.trim();
  const attendance = document.getElementById("attendance").value;
  const wishes = document.getElementById("wishes").value.trim();

  if (!name || !attendance) {
    alert("Please fill in your name and attendance.");
    return;
  }

  const phoneNumber = "60123456789"; // TODO: replace with your actual WhatsApp number

  const message =
    `Assalamualaikum / Hi, this is ${name}.\n` +
    `Attendance: ${attendance}\n` +
    `Number of Guests: ${count || "1"}\n` +
    (wishes ? `Wishes: ${wishes}\n` : "") +
    `\nRSVP for Raihana & Haikal's wedding on 29 August 2026.`;

  const url =
    `https://wa.me/${phoneNumber}?text=` + encodeURIComponent(message);

  window.open(url, "_blank");
});
