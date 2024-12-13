document.addEventListener('DOMContentLoaded', () => {
    // Date selector event with dynamic article filtering
    const dateInput = document.getElementById('news-date');
    const newsArticles = document.querySelectorAll('.news-section');
    
    if (dateInput) {
        dateInput.addEventListener('change', (e) => {
            const selectedDate = e.target.value;
            
            newsArticles.forEach(article => {
                const articleDate = article.getAttribute('data-date');
                
                if (articleDate === selectedDate) {
                    article.style.display = 'block';
                } else {
                    article.style.display = 'none';
                }
            });
            
            // If no articles match the date, show a message
            const visibleArticles = Array.from(newsArticles).filter(article => 
                article.style.display !== 'none'
            );
            
            const noArticlesMessage = document.getElementById('no-articles-message');
            if (noArticlesMessage) {
                noArticlesMessage.style.display = visibleArticles.length === 0 ? 'block' : 'none';
            }
        });
    }

    // Existing modal functionality
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