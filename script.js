document.addEventListener('DOMContentLoaded', () => {
    // Modal functionality
    document.querySelectorAll('.news-section').forEach(section => {
        section.addEventListener('click', function() {
            const modal = document.getElementById('newsModal');
            const modalTitle = document.getElementById('modalTitle');
            const modalSummary = document.getElementById('modalSummary');
            
            modalTitle.textContent = this.getAttribute('data-title');
            modalSummary.textContent = this.getAttribute('data-summary');
            
            modal.style.display = 'flex';
        });
    });

    // Date selector event
    const dateInput = document.getElementById('news-date');
    if (dateInput) {
        dateInput.addEventListener('change', (e) => {
            const selectedDate = e.target.value;
            // Future implementation: Fetch articles for selected date
            console.log(`Selected date: ${selectedDate}`);
        });
    }

    // Close modal functions
    window.closeModal = function() {
        document.getElementById('newsModal').style.display = 'none';
    };

    window.addEventListener('click', function(event) {
        const modal = document.getElementById('newsModal');
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});