// Dark and light mode
const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "☀️";
    } else {
        themeButton.textContent = "🌙";
    }
});

// Eco calculator
const calculateButton = document.getElementById("calculateButton");

calculateButton.addEventListener("click", function () {
    const bottles = Number(document.getElementById("bottles").value);
    const result = document.getElementById("ecoResult");

    if (bottles < 0 || !Number.isFinite(bottles)) {
        result.textContent = "Please enter a valid number.";
    } else {
        const yearlyTotal = bottles * 52;
        result.textContent = "You could avoid " + yearlyTotal + " disposable bottles in a year!";
    }
});

// Random environmental tips
const tips = [
    "Carry a reusable water bottle instead of buying disposable plastic bottles.",
    "Switch off lights and fans when leaving an empty classroom.",
    "Use both sides of paper before recycling it.",
    "Walk, cycle or use public transport when possible.",
    "Put waste in the correct bins and keep the campus clean."
];

document.getElementById("newTipButton").addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * tips.length);
    document.getElementById("tipText").textContent = tips[randomIndex];
});

// Daily green challenge
const challenges = [
    "Bring a reusable bottle to college today.",
    "Avoid using a single-use plastic bag today.",
    "Switch off one unused electrical device.",
    "Pick up litter and place it in the correct bin.",
    "Share one useful environmental tip with a friend."
];

document.getElementById("challengeButton").addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * challenges.length);
    document.getElementById("challengeText").textContent = challenges[randomIndex];
});

// Environmental quiz
const quizOptions = document.querySelectorAll(".quiz-option");
const quizResult = document.getElementById("quizResult");

quizOptions.forEach(function (option) {
    option.addEventListener("click", function () {
        if (option.textContent === "Use a reusable bottle") {
            quizResult.textContent = "Correct! Reusable bottles help reduce plastic waste.";
            quizResult.style.color = "green";
        } else {
            quizResult.textContent = "Not quite. Try choosing an option that reduces single-use plastic.";
            quizResult.style.color = "red";
        }
    });
});

// Animated counters
const counters = document.querySelectorAll(".counter");

counters.forEach(function (counter) {
    const target = Number(counter.getAttribute("data-target"));
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 50));

    const timer = setInterval(function () {
        current += step;

        if (current >= target) {
            current = target;
            clearInterval(timer);
        }

        counter.textContent = current;
    }, 30);
});
