// Update clock every second
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert to 12-hour format
  
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
  
    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById('clock').textContent = timeString;
  }
  
  // Initial call to update clock
  updateClock();
  
  // Update clock every second
  setInterval(updateClock, 1000);
  