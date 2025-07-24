async function bumpGlobalVisits() {
  try {
    const res = await fetch('https://api.countapi.xyz/hit/gssoc-explorer/visits');
    const { value } = await res.json();
    visitCountEl.textContent = value;
  } catch (err) {
    console.error('CountAPI error:', err);
  }
}

window.addEventListener('load', bumpGlobalVisits);