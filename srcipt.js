// Globális változók az aktuális hónap és év tárolásához
let currentDate = new Date();

function renderCalendar() {
    const monthYearDisplay = document.getElementById("month-year");
    const daysContainer = document.querySelector(".calendar-days");

    // Aktuális év és hónap betöltése
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // Hónap és év megjelenítése
    monthYearDisplay.textContent = currentDate.toLocaleDateString("hu-HU", {
        year: 'numeric',
        month: 'long'
    });

    // Naptár napok ürítése
    daysContainer.innerHTML = "";

    // Első nap beállítása
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    // Üres helyek létrehozása az első hét napjaihoz igazítva
    for (let i = 0; i < firstDay.getDay() - 1; i++) {
        const emptyCell = document.createElement("div");
        daysContainer.appendChild(emptyCell);
    }

    // Aktuális hónap napjainak hozzáadása
    for (let day = 1; day <= lastDay.getDate(); day++) {
        const dayCell = document.createElement("div");
        dayCell.textContent = day;

        // Aktuális nap kiemelése
        if (
            day === new Date().getDate() &&
            month === new Date().getMonth() &&
            year === new Date().getFullYear()
        ) {
            dayCell.style.backgroundColor = "#4a90e2";
            dayCell.style.color = "#ffffff";
        }

        daysContainer.appendChild(dayCell);
    }
}

// Navigációs funkciók
document.getElementById("prev-month").addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

document.getElementById("next-month").addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

// Naptár inicializálása
renderCalendar();
