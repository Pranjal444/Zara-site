 /* Function to check if both country and language are selected */
 function checkCountryAndLanguage() {
    var countrySelect = document.getElementById("countries");
    var languageSelect = document.getElementById("languages");
    var goButton = document.getElementById("go-button");
    var selectedCountry = countrySelect.value;
    var selectedLanguage = languageSelect.value;

    // Enable the button only when both options are selected
    if (selectedCountry !== "" && selectedLanguage !== "") {
        goButton.disabled = false;
    } else {
        goButton.disabled = true;
    }
}

/* Function to open the home page based on selected country and language */
function openHomePage() {
    var selectedCountry = document.getElementById("countries").value;
    var selectedLanguage = document.getElementById("languages").value;

    // Redirect to the home page if specific criteria are met
    if (selectedCountry === "india" && selectedLanguage === "english") {
        window.location.href = "home.html";
    }
}