const facts = [
    "At 21, you embrace life with a passion for adventure.",
    "You find happiness in all things, including fight painting.",
    "Exploring new places brings you joy and creativity.",
    "You believe every experience is an opportunity for joy.",
    "Your vibrant strokes in painting reflect your adventurous spirit."
];

document.getElementById('new-fact-btn').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fun-fact').innerText = facts[randomIndex];
});
