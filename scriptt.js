let totalSemesters = 0;

function addSemester() {
	totalSemesters++;
	const semesterInputs = document.getElementById("semesterInputs");

	const semesterDiv = document.createElement("div");
	semesterDiv.innerHTML = `
    <label for="semester${totalSemesters}">Enter GPA for Semester ${totalSemesters}:</label>
    <input type="number" id="semester${totalSemesters}" min="0" max="4" step="0.01">
    
    <label for="credits${totalSemesters}">Enter Credits for Semester ${totalSemesters}:</label>
    <input type="number" id="credits${totalSemesters}">
  `;

	semesterInputs.appendChild(semesterDiv);
}

function calculateCGPA() {
	let totalCredits = 0;
	let totalGradePoints = 0;

	for (let i = 1; i <= totalSemesters; i++) {
		let gpa = parseFloat(document.getElementById(`semester${i}`).value);
		let credits = parseInt(document.getElementById(`credits${i}`).value);

		totalCredits += credits;
		totalGradePoints += gpa * credits;
	}

	let cgpa = totalGradePoints / totalCredits;

	if (isFinite(cgpa)) {
		document.getElementById("result").innerText = `Your CGPA is: ${cgpa.toFixed(
			2
		)}`;
	} else {
		document.getElementById("result").innerText =
			"Please enter valid GPA and credit values.";
	}
}
