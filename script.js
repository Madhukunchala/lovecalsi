const calculateBtn = document.getElementById('calculate-btn');
const resultDiv = document.getElementById('result');

calculateBtn.addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const partnerName = document.getElementById('partner-name').value;
    const loveScore = Math.floor(Math.random() * 100);

    resultDiv.innerHTML = `Your love score with ${partnerName} is ${loveScore}%`;

    if (loveScore >= 80) {
        resultDiv.style.color = '#00ff00';
    } else if (loveScore >= 50) {
        resultDiv.style.color = '#ffa500';
    } else {
        resultDiv.style.color = '#ff0000';
    }
});