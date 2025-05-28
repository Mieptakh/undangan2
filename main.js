// Scroll ke section
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Buka undangan
function goToMain() {
  document.getElementById('welcome-section').classList.add('hidden');
  document.getElementById('mainContent').classList.remove('hidden');
}

// Countdown
const targetDate = new Date('2025-06-28T08:00:00').getTime();
const timerElement = document.getElementById('timer');

function updateCountdown() {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff < 0) {
    timerElement.innerText = "Acara telah berlangsung.";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  timerElement.innerText = `${days} hari ${hours} jam ${mins} mnt ${secs} dtk`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Modal Galeri
function openModal(img) {
  document.getElementById('modal-img').src = img.src;
  document.getElementById('modal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('modal').classList.add('hidden');
}

// Salin rekening
function copyRek() {
  const rekening = "1234567890";
  navigator.clipboard.writeText(rekening)
    .then(() => alert("Nomor rekening disalin!"))
    .catch(err => alert("Gagal menyalin."));
}
