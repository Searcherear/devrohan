
// Fetch the life lessons from the JSON file
fetch('life-lessons.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const lessonList = document.getElementById('life-lessons');
        lessonList.innerHTML = '';  // Clear any existing content

        // Loop through each lesson and create a list item for each one
        data.forEach(lesson => {
            const li = document.createElement('li');
            li.textContent = lesson;
            lessonList.appendChild(li);
        });
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
