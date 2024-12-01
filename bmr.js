function calculate() {
   
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;

    if (!age || !height || !weight) {
        alert("Please fill in all the fields!");
        return;
    }

   
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    
    let bmr;
    if (gender === "male") {
        bmr = (88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)).toFixed(2);
    } else {
        bmr = (447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age)).toFixed(2);
    }

    
    document.getElementById("result").innerHTML = `
        <p><strong>BMI:</strong> ${bmi}</p>
        <p><strong>BMR:</strong> ${bmr} calories/day</p>
    `;
}