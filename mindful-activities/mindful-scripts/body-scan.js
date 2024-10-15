document.addEventListener('DOMContentLoaded', () => {
    checkBodyScanStatus(); // Check the body scan status on load
});

const backArrow = document.getElementById('back-arrow');
const continueButton = document.getElementById('btn-continue-body-scan');
const threeMinutesButton = document.getElementById('btn-begin-body-scan-3min');
const tenMinutesButton = document.getElementById('btn-begin-body-scan-10min');
const initialInstructionContainer = document.getElementById('initial-instruction-container');
const timeDisplay = document.getElementById('time-display');
const exerciseInstructions = document.getElementById('body-scan-instructions');
const exerciseHeading = document.getElementById('exercise-heading');
timeDisplay.style.display = 'none';

let startTime;
let duration;

let endAudio = new Audio("./audio/end-exercise.mp3");
let startAudio = new Audio("./audio/start-exercise.mp3");

// Hide the continue button initially
continueButton.style.display = 'none';

// Helper function to format time (optional, for console logging)
function formatTime(ms) {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`; // `${minutes}m ${seconds}s`
}

// Cancel the body scan session
function cancelBodyScanSession() {
    // Clear localStorage related to the session
    localStorage.removeItem('bodyScanStartTime');
    localStorage.removeItem('bodyScanDuration');
    // Hide the continue button
    continueButton.style.display = 'none';
    // Reset the time display to the default or blank
    timeDisplay.textContent = '00:00';
}

// Start the Body scan and store the start time in localStorage
function startBodyScan(durationInMinutes) {
    const startTime = Date.now(); // Get the current time (in ms)
    const durationInMilliseconds = durationInMinutes * 60000;

    // Store start time and duration in localStorage
    localStorage.setItem('bodyScanStartTime', startTime);
    localStorage.setItem('bodyScanDuration', durationInMilliseconds);

    startAudio.play();

    // Button visibility
    threeMinutesButton.style.display = 'none';
    tenMinutesButton.style.display = 'none';
    initialInstructionContainer.style.display = 'none';
    timeDisplay.style.display = 'block';
    exerciseInstructions.innerHTML = '<p>Focus on your breath...<br>And bring awareness to how your body feels</p>';

    checkBodyScanStatus(); // Immediately check status
}

// Check Body scan status by comparing current time with stored start time
function checkBodyScanStatus() {
    startTime = localStorage.getItem('bodyScanStartTime');
    duration = localStorage.getItem('bodyScanDuration');

    if (startTime && duration) {
        const elapsedTime = Date.now() - parseInt(startTime);
        // If the session is COMPLETE
        if (elapsedTime >= parseInt(duration)) {
            continueButton.style.display = 'inline-block';
            exerciseInstructions.innerHTML = '<p class="instructional-statement"><b>Congratulations!!</b><br>You have successfully completed this exercise</p>';
            exerciseHeading.style.marginTop = '60px';

            endAudio.play();

            // Show the continue button
            backArrow.style.display = 'none';
            localStorage.removeItem('bodyScanStartTime'); // Clear local storage
            localStorage.removeItem('bodyScanDuration');
            timeDisplay.textContent = "00:00"; // Update time display to 0:00 (or any other format for completion)
        } else {
            // Session is still ongoing
            const remainingTime = parseInt(duration) - elapsedTime; // Calculate remaining time
            timeDisplay.textContent = formatTime(remainingTime); // Update the time display dynamically

            // Check again after 1 second
            setTimeout(() => {
                checkBodyScanStatus();
            }, 1000);
        }
    }
}

// Event listener to go back to home screen
backArrow.addEventListener('click', () => {
    cancelBodyScanSession()
    window.location.href = '../index.html';
});

// Event listener for continuing past the completion screen
continueButton.addEventListener('click', () => {
    // Add code to add achievement
    window.location.href = '../index.html';
});

// Event listener for 3-minute Body scan session
threeMinutesButton.addEventListener('click', () => {
    startBodyScan(3);
});

// Event listener for 15-minute Body scan session
tenMinutesButton.addEventListener('click', () => {
    startBodyScan(10);
});
