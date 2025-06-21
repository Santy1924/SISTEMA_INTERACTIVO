document.getElementById("validate").addEventListener("click", () => {
    const name = document.getElementById("name").value.trim();
    const ageText = document.getElementById("age").value.trim();

    const age = Number(ageText);

    if (name === "" || ageText === "" || isNaN(age)) {
        document.getElementById("message").textContent = `Error: Please enter a valid age in numbers.`;
    } else if (age < 18) {
        document.getElementById("message").textContent = `Hello ${name}, you are a minor. Keep learning and enjoying the code!`;
    } else {
        document.getElementById("message").textContent = `Hello ${name}, you are of legal age. Get ready for great opportunities in the world of programming!`;
    }
});
