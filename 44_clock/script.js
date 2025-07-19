function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const day = now.toLocaleDateString('en-US', { weekday: 'long' });
    const month = now.toLocaleDateString('en-US', { month: 'long' });
    const dateNum = now.getDate();
    const year = now.getFullYear();

    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    document.getElementById('day').textContent = day;
    document.getElementById('month').textContent = month;
    document.getElementById('date-num').textContent = dateNum;
    document.getElementById('year').textContent = year;
}

setInterval(updateClock, 1000); // Update the clock every second

// Initial call to set the clock immediately when the page loads
updateClock();