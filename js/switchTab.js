document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.tab-link').forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            document.querySelectorAll('.tab-content').forEach(tab => {
                tab.style.display = tab.id === targetId ? 'block' : 'none';
            });
        });
    });
});