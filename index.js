document.addEventListener("DOMContentLoaded", function () {
    const units = document.querySelectorAll('.units');

    units.forEach(unit => {
        unit.addEventListener('click', function () {
            units.forEach(u => u.classList.remove('active'));
            this.classList.add('active');

            // Checked the associated radio button when a unit is clicked
            const radioBtn = this.querySelector('.input-radio');
            radioBtn.checked = true;

            // Hide all unit-main elements
            const unitMains = document.querySelectorAll('.unit-main');
            unitMains.forEach(main => main.style.display = 'none');

            // Show the unit-main of the clicked unit
            const unitMain = this.querySelector('.unit-main');
            unitMain.style.display = 'flex';
        });
    });

    // Find and show the unit-main of the initially active unit on page load
    const initiallyActiveUnit = document.querySelector('.units.active');
    if (initiallyActiveUnit) {
        const initiallyActiveUnitMain = initiallyActiveUnit.querySelector('.unit-main');
        if (initiallyActiveUnitMain) {
            initiallyActiveUnitMain.style.display = 'flex';
        }
    }
});