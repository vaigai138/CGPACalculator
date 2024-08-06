function gradeToPoints(grade) {
    const gradePoints = {
        'O': 10,
        'A+': 9,
        'A': 8,
        'B+': 7,
        'B': 6,
        'C': 5
    };
    return gradePoints[grade.toUpperCase()] || 0;
}

document.getElementById('addSubject').addEventListener('click', function() {
    const subjectsContainer = document.getElementById('subjectsContainer');
    const subjectDiv = document.createElement('div');
    subjectDiv.className = 'subject';
    subjectDiv.innerHTML = `
        <label for="grade">Grade:</label>
        <select class="grade" required>
            <option value="O">O</option>
            <option value="A+">A+</option>
            <option value="A">A</option>
            <option value="B+">B+</option>
            <option value="B">B</option>
            <option value="C">C</option>
        </select>
        <label for="credit">Credit:</label>
        <input type="number" class="credit" required>
    `;
    subjectsContainer.appendChild(subjectDiv);
});

document.getElementById('cgpaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const grades = document.querySelectorAll('.grade');
    const credits = document.querySelectorAll('.credit');

    let totalPoints = 0;
    let totalCredits = 0;

    grades.forEach((grade, index) => {
        const points = gradeToPoints(grade.value);
        const credit = parseInt(credits[index].value);
        totalPoints += points * credit;
        totalCredits += credit;
    });

    if (totalCredits === 0) {
        document.getElementById('result').innerText = "Total credits cannot be zero.";
        return;
    }

    const cgpa = totalPoints / totalCredits;
    document.getElementById('result').innerText = `Your CGPA is: ${cgpa.toFixed(2)}`;
});
