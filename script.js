document.addEventListener('DOMContentLoaded', () => {
    const dateInput = document.getElementById('articleDate');
    const newsArticles = document.querySelectorAll('.news-section');

    // Generate placeholder articles for demonstration
    const generatePlaceholderArticles = () => {
        const subjects = ['world-politics', 'computer-science', 'ai'];
        const dates = [
            '2024-12-13', '2024-12-14', '2024-12-15', '2024-12-16',
            '2024-12-17', '2024-12-18', '2024-11-13', '2024-10-13'
        ];

        subjects.forEach(subject => {
            const container = document.querySelector('.container');
            if (!container) {
                const newContainer = document.createElement('div');
                newContainer.className = 'container';
                document.querySelector('main').appendChild(newContainer);
            }

            dates.forEach(date => {
                const article = document.createElement('div');
                article.className = 'news-section';
                article.setAttribute('data-subject', subject);
                article.setAttribute('data-date', date);
                article.innerHTML = `
                    <h2>${subject.replace('-', ' ').toUpperCase()} Article</h2>
                    <p>Article content for ${subject} on ${date}</p>
                    <small>${date}</small>
                `;
                document.querySelector('.container').appendChild(article);
            });
        });
    };

    generatePlaceholderArticles();

    // Date filtering functionality
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
            
            const visibleArticles = Array.from(newsArticles).filter(article => 
                article.style.display !== 'none'
            );

            const container = document.querySelector('.container');
            if (visibleArticles.length === 0) {
                let noArticlesMsg = document.getElementById('no-articles-message');
                if (!noArticlesMsg) {
                    noArticlesMsg = document.createElement('div');
                    noArticlesMsg.id = 'no-articles-message';
                    noArticlesMsg.textContent = 'No articles available for the selected date.';
                    container.appendChild(noArticlesMsg);
                }
                noArticlesMsg.style.display = 'block';
            } else {
                const noArticlesMsg = document.getElementById('no-articles-message');
                if (noArticlesMsg) {
                    noArticlesMsg.style.display = 'none';
                }
            }
        });
    }
});