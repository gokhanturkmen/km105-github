const btn = document.getElementById('btnClickMe');
btn.addEventListener('click', () => {
    const msg = btn.getAttribute('data-message');
    alert(msg);
});