
const maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame"
];

const femaleNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama"
];

function generateName() {

    // Retrieve input
    let day = parseInt(document.getElementById("day").value);
    let month = parseInt(document.getElementById("month").value);
    let year = parseInt(document.getElementById("year").value);


    // Validate input
    if (day < 1 || day > 31) {
        alert("Please enter a valid day.");
        return;
    }

    if (month < 1 || month > 12) {
        alert("Please enter a valid month.");
        return;
    }

    let selectedGender = document.querySelector( 'input[name="gender"]:checked');
    if (!selectedGender) {
        alert("please select a gender.");
        return;
    }

    let gender = selectedGender.value;


    // Split the year
    let CC = Math.floor(year / 100);
    let YY = year % 100;

    // Calculate the day of the week
    let d = Math.floor(
        (CC / 4 - 2 * CC - 1) +
        (5 * YY / 4) +
        (26 * (month + 1) / 10) +
        day
    ) % 7;

    // Make sure the result is positive
    if (d < 0) {
        d += 7;
    }

    // Display the Akan name
    if (gender === "male") {
        document.getElementById("result").innerHTML =
            "Your Akan name is <strong>" + maleNames[d] + "</strong>";
    } else {
        document.getElementById("result").innerHTML =
            "Your Akan name is <strong>" + femaleNames[d] + "</strong>";
    }
}


