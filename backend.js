let timer;
let isRunning = false;
let timeLeft = 25 * 60; // 25 minutes in seconds

// Function to format the time as mm:ss
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

// Start or stop the timer
document.getElementById("startButton").addEventListener("click", function() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById("startButton").innerText = "Start";
    } else {
        // Start the timer
        timer = setInterval(function() {
            timeLeft--;
            document.getElementById("timerDisplay").innerText = formatTime(timeLeft);

            if (timeLeft === 0) {
                clearInterval(timer);
                alert("Time's up! Restarting the timer.");
                timeLeft = 25 * 60; // Reset to 25 minutes
                document.getElementById("timerDisplay").innerText = formatTime(timeLeft);
                document.getElementById("startButton").innerText = "Start";
            }
        }, 1000);

        document.getElementById("startButton").innerText = "Pause"; // Change button text to "Pause"
    }

    isRunning = !isRunning; // Toggle the timer state
});
