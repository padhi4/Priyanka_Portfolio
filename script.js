// script.js
function updateProgressBar(skillId, percentage) {
    const progressBar = document.getElementById(skillId);
    const percentageLabel = progressBar.parentElement.nextElementSibling;
    progressBar.style.width = percentage + "%";
    percentageLabel.textContent = percentage + "%";
}

// Update skills progress (example values)
updateProgressBar("html-progress", 80);
updateProgressBar("css-progress", 70);
updateProgressBar("python-progress", 50);
updateProgressBar("java-progress", 60);
updateProgressBar("oracle-progress", 50);
updateProgressBar("mongodb-progress", 60);
updateProgressBar("cprogramming-progress", 80);
updateProgressBar("c++-progress", 80);
updateProgressBar("php-progress", 40);
updateProgressBar("mysql-progress", 50);

// Add more skills and their progress as needed
