function fetchNews() {
    // ... existing code ...
    fetch('https://newsapi.org/v2/everything?q=technology&from=2025-03-19&sortBy=publishedAt&apiKey=c80d98c29c0845d984a2aa8a7866b6a1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Process the data
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    // ... existing code ...
}