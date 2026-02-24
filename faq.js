document.querySelectorAll('.faq-question').forEach(function(q) {
    q.addEventListener('click', function() {
        this.parentElement.classList.toggle('open');
    });
});
