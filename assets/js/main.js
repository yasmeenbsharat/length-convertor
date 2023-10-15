const meters = document.getElementById('meters');
const kilometer = document.getElementById('kilometer');
const Centimeter = document.getElementById('Centimeter');
const Inches = document.getElementById('Inches');
const feet = document.getElementById('feet');
const Yards = document.getElementById('Yards');
const Miles = document.getElementById('Miles');
const inputFields = document.querySelectorAll('input');


inputFields.forEach(input => {
    const lengthEquation = input.getAttribute('data-length-in-meters');
    let timeoutId;

    input.addEventListener('input', (e) => {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            const lengthInMeters = eval(`${e.target.value} ${lengthEquation}`);
            convertToLengthUnits(lengthInMeters);
        }, 300);
    });
});

function convertToLengthUnits(lengthInMeters) {
    meters.value = lengthInMeters;
    kilometer.value = lengthInMeters / 1000;
    Centimeter.value = lengthInMeters * 100;
    Inches.value = lengthInMeters * 39.3701;
    feet.value = lengthInMeters * 3.28084;
    Yards.value = lengthInMeters * 1.09361;
    Miles.value = lengthInMeters * 0.000621371;
}
function clearInputs() {
    meters.value = '';
    kilometer.value = '';
    Centimeter.value = '';
    Inches.value = '';
    feet.value = '';
    Yards.value = '';
    Miles.value = '';
}