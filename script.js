document.addEventListener('DOMContentLoaded', () => {
    const dateInput = document.getElementById('articleDate');
    const navLinks = document.querySelectorAll('nav a');
    const subjectSections = document.querySelectorAll('.subject-section');

    // Sample articles data
    const articlesData = {
        'world-politics': [
            { title: 'Global Diplomacy Shifts', date: '2024-12-13', summary: 'Major diplomatic realignments in international relations.' },
            { title: 'Trade Negotiations Update', date: '2024-12-14', summary: 'New trade agreements between major economic powers.' },
            { title: 'UN Climate Summit', date: '2024-12-15', summary: 'Important discussions on global climate policies.' },
            { title: 'Geopolitical Tensions', date: '2024-12-16', summary: 'Analysis of current global political tensions.' }
        ],
        'computer-science': [
            { title: 'Quantum Computing Breakthrough', date: '2024-12-13', summary: 'Significant advancements in quantum computing technology.' },
            { title: 'AI Programming Trends', date: '2024-12-14', summary: 'Latest trends in artificial intelligence programming.' },
            { title: 'Cybersecurity Innovations', date: '2024-12-15', summary: 'New approaches to digital security and protection.' },
            { title: 'Open Source Developments', date: '2024-12-16', summary: 'Major updates in open-source software ecosystems.' }
        ],
        'ai': [
            { title: 'Machine Learning Advances', date: '2024-12-13', summary: 'Cutting-edge developments in machine learning algorithms.' },
            { title: 'AI Ethics Debate', date: '2024-12-14', summary: 'Ongoing discussions about ethical AI development.' },
            { title: 'Neural Network Innovations', date: '2024-12-15', summary: 'Breakthrough in neural network architectures.' },
            { title: 'AI in Healthcare', date: '2024-12-16', summary: 'Revolutionary AI applications in medical research.' }
        ]
    };

    // Navigation functionality
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const subject = link.getAttribute('data-subject');

            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Hide all sections
            subjectSections.forEach(section => {
                section.style.display = 'none';
            });

            // Show home or subject section
            if (subject === 'home') {
                document.getElementById('home').style.display = 'block';
            } else {
                const subjectSection = document.getElementById(subject);
                subjectSection.style.display = 'block';
                renderArticles(subject, dateInput.value);
            }
        });
    });

    // Render articles for a specific subject and date
    function renderArticles(subject, date) {
        const container = document.querySelector(`#${subject} .container`);
        container.innerHTML = '';

        const filteredArticles = articlesData[subject].filter(article => article.date === date);

        if (filteredArticles.length === 0) {
            container.innerHTML = '<div id="no-articles-message">No articles available for this date.</div>';
            return;
        }

        filteredArticles.forEach(article => {
            const articleElement = document.createElement('div');
            articleElement.className = 'news-section';
            articleElement.setAttribute('data-subject', subject);
            articleElement.setAttribute('data-date', article.date);
            articleElement.innerHTML = `
                <h2>${article.title}</h2>
                <p>${article.summary}</p>
                <small>${article.date}</small>
            `;
            articleElement.addEventListener('click', () => {
                openModal(article);
            });
            container.appendChild(articleElement);
        });
    }

    // Modal functionality
    function openModal(article) {
        const modal = document.getElementById('newsModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalSummary = document.getElementById('modalSummary');

        modalTitle.textContent = article.title;
        modalSummary.textContent = article.summary;

        modal.style.display = 'block';
    }

    // Close modal
    window.closeModal = function() {
        document.getElementById('newsModal').style.display = 'none';
    };

    // Date selector event
    dateInput.addEventListener('change', () => {
        const activeSubject = document.querySelector('nav a.active').getAttribute('data-subject');
        if (activeSubject !== 'home') {
            renderArticles(activeSubject, dateInput.value);
        }
    });
});