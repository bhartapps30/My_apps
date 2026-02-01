// PRESET: username = 30-bhart  |  password = %©®™✓[Bh]åīøò⅚77*;?Bhart003¢¥£π÷|§∆`⅘⅜⅞30⁸ⁿ∅⁰⁹
const HASH_U = "$2a$10$abc123"; // bcrypt hash of "30-bhart"
const HASH_P = "$2a$10$xyz789"; // bcrypt hash of your actual password

async function login() {
  const u = document.getElementById('user').value.trim();
  const p = document.getElementById('pass').value.trim();
  const okU = await bcrypt.compare(u, HASH_U);
  const okP = await bcrypt.compare(p, HASH_P);
  if (okU && okP) {
    sessionStorage.setItem('auth','1');
    location.href = 'chat.html';
  } else {
    document.getElementById('err').textContent = '❌ Galat credentials';
  }
}
