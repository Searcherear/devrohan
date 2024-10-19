const lifeLessons = [
    "Patience is key in all aspects of life.",
    "Always be open to learning and improving.",
    "Consistency beats intensity.",
    "Focus on what you can control.",
    "Discipline is the foundation of success."
];

// Select the UL element where lessons will be displayed
const lessonList = document.getElementById('life-lessons');

// Loop through the array and append each lesson as a list item
lifeLessons.forEach(lesson => {
    const li = document.createElement('li');
    li.textContent = lesson;
    lessonList.appendChild(li);
});
