// Steps of the Five Senses Exercise
const exerciseSteps = [
    { instruction: '<div class="dynamic-five-senses-instructions"><p class="helping-statement">This exercise is all about just noticing</p><p class="instructional-statement">Notice <b>5 things</b> around you that you can <b>see</b></p><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path></svg></div>', },
    { instruction: '<div class="dynamic-five-senses-instructions"><p class="helping-statement">Feel can be things you can touch or even the way your clothes feel on your body</p><p class="instructional-statement">Notice <b>4 things</b> around you that you can <b>feel</b></p><svg width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.5718 15.4409L9.73364 29.2791C-3.24455 42.2573 -3.24455 63.2882 9.73364 76.2664C22.7118 89.2445 43.7427 89.2445 56.7209 76.2664L80.2145 52.7727C81.2327 51.742 82.0106 50.4991 82.4927 49.1329C82.9749 47.7667 83.1494 46.3108 83.0037 44.8694C82.8581 43.4279 82.3959 42.0364 81.6502 40.7942C80.9045 39.5521 79.8937 38.4899 78.69 37.6836L80.2145 36.1591C84.0064 32.3673 84.0064 26.1518 80.2145 22.3209C79.5891 21.6955 78.8464 21.1482 78.1036 20.7182C78.9628 18.7672 79.1597 16.5885 78.6641 14.5151C78.1686 12.4417 77.0078 10.5875 75.3593 9.23591C73.7107 7.88428 71.665 7.10951 69.5347 7.02997C67.4044 6.95044 65.3066 7.57051 63.5618 8.79545C62.7664 7.57026 61.7081 6.53756 60.4638 5.7723C59.2196 5.00705 57.8205 4.52845 56.3682 4.37124C54.916 4.21403 53.4469 4.38217 52.0677 4.86344C50.6885 5.34471 49.4337 6.12704 48.3945 7.15364L38.5827 16.9655C37.7863 15.7611 36.7323 14.7488 35.4967 14.0016C34.2612 13.2545 32.8751 12.7912 31.4386 12.6453C30.0021 12.4994 28.5512 12.6746 27.1907 13.158C25.8302 13.6415 24.5941 14.4213 23.5718 15.4409ZM29.0836 20.9918C29.8655 20.21 31.0773 20.21 31.8591 20.9918C32.6409 21.7736 32.6409 22.9855 31.8591 23.7673L19.4282 36.1982C21.6243 38.3971 22.8579 41.3777 22.8579 44.4855C22.8579 47.5932 21.6243 50.5739 19.4282 52.7727L24.94 58.2845C27.6268 55.5952 29.4718 52.1813 30.2493 48.4602C31.0269 44.739 30.7033 40.872 29.3182 37.3318L53.9455 12.7045C54.7273 11.9227 55.9391 11.9227 56.7209 12.7045C57.5027 13.4864 57.5027 14.6982 56.7209 15.48L38.7391 33.4618L44.2509 38.9736L67.7445 15.48C68.5264 14.6982 69.7382 14.6982 70.52 15.48C71.3018 16.2618 71.3018 17.4736 70.52 18.2555L47.0264 41.7491L52.5382 47.2609L71.8882 27.9109C72.67 27.1291 73.8818 27.1291 74.6636 27.9109C75.4455 28.6927 75.4455 29.9045 74.6636 30.6864L52.5382 52.8118L58.05 58.3236L71.8882 44.4855C72.67 43.7036 73.8818 43.7036 74.6636 44.4855C75.4455 45.2673 75.4455 46.4791 74.6636 47.2609L51.2091 70.7545C41.28 80.6836 25.2136 80.6836 15.2845 70.7545C5.35545 60.8255 5.35545 44.7591 15.2845 34.83L29.0836 20.9918ZM86 62.5455C86 75.4846 75.4846 86 62.5455 86V80.1364C72.24 80.1364 80.1364 72.24 80.1364 62.5455H86ZM0 23.4545C0 10.5155 10.5155 0 23.4545 0V5.86364C13.76 5.86364 5.86364 13.76 5.86364 23.4545H0Z" fill="black" /></svg></div>' },
    { instruction: '<div class="dynamic-five-senses-instructions"><p class="helping-statement">Try notice even the smallest sound like the hum of a fridge.</p><p class="instructional-statement">Notice <b>3 things</b> around you that you can <b>hear</b></p><svg width="76" height="104" viewBox="0 0 76 104" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M54.9405 67.4865C64.7176 60.8437 72 50.6097 72 38C72 28.9826 68.4179 20.3346 62.0416 13.9584C55.6654 7.58213 47.0174 4 38 4C28.9826 4 20.3346 7.58213 13.9584 13.9584C7.58213 20.3346 4 28.9826 4 38V81.8961C4 91.3014 11.5948 99.2 21 99.2C30.4053 99.2 35.2014 93.6877 37.4241 90.7C40.5627 86.4904 46.2875 73.3685 54.9405 67.4865Z" stroke="black" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" /><path d="M17.5996 61.8V36.3C17.5996 26.015 26.7796 17.6 37.9996 17.6C49.2196 17.6 58.3996 26.015 58.3996 36.3" stroke="black" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" /><path d="M17.5996 47.9922C22.9121 44.1672 34.5614 44.8047 34.5614 44.8047C40.0864 44.8047 43.31 51.0564 40.0864 55.5572C40.0864 55.5572 32.2536 64.5672 31.1911 68.6047" stroke="black" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" /></svg></div>' },
    { instruction: '<div class="dynamic-five-senses-instructions"><p class="helping-statement">Notice any smells around you like your clothes or even just the air around you</p><p class="instructional-statement">Notice <b>2 things</b> around you that you can <b>smell</b></p><svg width="80" height="105" viewBox="0 0 80 105" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.4897 2C20.9361 25.0719 20.7242 49.3023 12.0562 62.1537C6.4517 70.4634 3.53152 76.813 2.45791 81.8619C1.38497 86.9107 2.26791 90.8027 4.37199 93.4223C8.58059 98.662 16.1636 98.5007 19.3091 98.4348C19.7794 98.4337 20.2344 98.2687 20.5951 97.9684C20.9559 97.6681 21.1995 97.2515 21.2836 96.791C21.3678 96.3305 21.2872 95.8552 21.0558 95.4477C20.8245 95.0402 20.457 94.7262 20.0172 94.5604C20.7353 94.3097 21.3688 93.9975 21.8913 93.6367C22.578 94.125 23.2693 94.6812 23.979 95.287C27.7048 98.4671 32.0247 103.061 39.1515 102.999C46.2716 102.938 51.6445 98.4789 56.2258 95.2554C56.9969 94.7126 57.7458 94.208 58.4733 93.7506C58.9899 94.038 59.5868 94.2846 60.2448 94.4825C59.7646 94.5937 59.3421 94.8765 59.0575 95.2772C58.773 95.678 58.6462 96.1688 58.7013 96.6564C58.7564 97.1441 58.9896 97.5946 59.3564 97.9224C59.7233 98.2503 60.1984 98.4326 60.6914 98.4348C63.8369 98.5007 71.4199 98.6618 75.6283 93.4227C77.7321 90.803 78.6153 86.9111 77.5417 81.8621C76.4688 76.8132 73.5484 70.4636 67.9438 62.1539C59.2758 49.3023 59.0639 25.0719 57.5104 2H53.4802C55.0113 24.9451 54.6671 49.6536 64.603 64.3854C70.0358 72.4402 72.7001 78.4335 73.6054 82.691C74.5106 86.9485 73.7663 89.3262 72.4846 90.9222C72.2796 91.1774 72.0491 91.4125 71.801 91.633C71.8543 91.4506 71.8825 91.2665 71.8855 91.0822C71.8855 90.5634 71.6857 90.0498 71.2974 89.5705C70.9091 89.0913 70.34 88.6558 69.6226 88.289C68.9052 87.9222 68.0535 87.6312 67.1161 87.4327C66.1787 87.2342 65.1741 87.1321 64.1595 87.1321C62.4345 87.1331 60.7599 87.4293 59.4023 87.9734C58.0448 88.5176 57.0824 89.2783 56.6686 90.1344C55.7342 90.7122 54.8178 91.342 53.9028 91.9854C49.1589 95.3232 44.5146 98.9481 39.1164 98.9948C33.7249 99.0415 30.5714 95.6385 26.5979 92.247C25.3958 91.2207 24.1252 90.2039 22.6984 89.3767C22.063 88.6934 21.0764 88.1175 19.8507 87.7146C18.6251 87.3117 17.2094 87.0978 15.7646 87.0974C13.7156 87.0974 11.7505 87.5261 10.3017 88.2892C8.85291 89.0522 8.03898 90.0871 8.03898 91.1662C8.0408 91.2847 8.05243 91.403 8.07385 91.5209C7.87312 91.3331 7.6858 91.1342 7.51547 90.9224C6.23354 89.3262 5.48963 86.9485 6.3947 82.6912C7.29999 78.4332 9.96446 72.44 15.3971 64.3854C25.333 49.6538 24.9887 24.9451 26.5199 2H22.4897Z" fill="black" stroke="black" stroke-width="3" /></svg></div>' },
    { instruction: '<div class="dynamic-five-senses-instructions"><p class="helping-statement">Finally, think of something you can taste, like a sip of a drink or the aftertaste of food</p><p class="instructional-statement">Notice <b>1 thing</b> that you can <b>taste</b></p><svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 45C4 50.3842 5.0605 55.7157 7.12094 60.69C9.18138 65.6644 12.2014 70.1842 16.0086 73.9914C19.8158 77.7986 24.3356 80.8186 29.31 82.8791C34.2843 84.9395 39.6158 86 45 86C50.3842 86 55.7157 84.9395 60.69 82.8791C65.6644 80.8186 70.1842 77.7986 73.9914 73.9914C77.7986 70.1842 80.8186 65.6644 82.8791 60.69C84.9395 55.7157 86 50.3842 86 45C86 39.6158 84.9395 34.2843 82.8791 29.31C80.8186 24.3356 77.7986 19.8158 73.9914 16.0086C70.1842 12.2014 65.6644 9.18138 60.69 7.12094C55.7157 5.0605 50.3842 4 45 4C39.6158 4 34.2843 5.0605 29.31 7.12094C24.3356 9.18138 19.8158 12.2014 16.0086 16.0086C12.2014 19.8158 9.18138 24.3356 7.12094 29.31C5.0605 34.2843 4 39.6158 4 45Z" stroke="black" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" /><path d="M31.334 35.8889H31.3795" stroke="black" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" /><path d="M58.666 35.8889H58.7116" stroke="black" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" /><path d="M35.888 54.1111V63.2222C35.888 65.6386 36.8479 67.9561 38.5566 69.6647C40.2653 71.3734 42.5827 72.3333 44.9991 72.3333C47.4156 72.3333 49.733 71.3734 51.4417 69.6647C53.1503 67.9561 54.1102 65.6386 54.1102 63.2222V54.1111M60.9436 54.1111H29.0547" stroke="black" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" /></svg></div>' },
    { instruction: '<div class="dynamic-five-senses-instructions-dif"><p class="instructional-statement"><b>Congratulations!!</b><br>You have successfully completed this exercise</p></div>' }
];

let currentStep = 0;  // To keep track of the current step
let endAudio = new Audio("./audio/end-exercise.mp3");
let startAudio = new Audio("./audio/start-exercise.mp3");

// Elements
const initialInstructionContainer = document.getElementById('initial-instruction-container');
const exerciseInstructions = document.getElementById('five-senses-instructions');
const exerciseHeading = document.getElementById('exercise-heading');
const nextButton = document.getElementById('btn-next-five-senses');
const continueButton = document.getElementById('btn-continue-five-senses');
const backArrow = document.getElementById('back-arrow');

// Function to load the current step
function loadStep(stepIndex) {
    const step = exerciseSteps[stepIndex];
    exerciseInstructions.innerHTML = step.instruction;

    // Hide the NEXT button on the last step and show CONTINUE button and add to database
    if (stepIndex === exerciseSteps.length - 1) {
        nextButton.style.display = 'none';
        exerciseHeading.style.marginTop = '60px';
        backArrow.style.display = 'none';
        continueButton.style.display = 'inline-block';
        endAudio.play();
    }
}

// Handle the Next button click
nextButton.addEventListener('click', () => {
    if (currentStep == 0) {
        startAudio.play();
        initialInstructionContainer.textContent = '';
        nextButton.textContent = 'Next';
    }

    //Shows the current instruction the user needs to do
    if (currentStep < exerciseSteps.length) {
        loadStep(currentStep);
    }
    currentStep++;
});

backArrow.addEventListener('click', () => {
    window.location.href = '../index.html';
});

continueButton.addEventListener('click', () => {
    window.location.href = '../index.html';
});

continueButton.style.display = 'none';