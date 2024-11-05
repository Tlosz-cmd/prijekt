
let currentDate = new Date();

function renderCalendar() {
    const monthYearDisplay = document.getElementById("month-year");
    const daysContainer = document.querySelector(".calendar-days");

    
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

   
    monthYearDisplay.textContent = currentDate.toLocaleDateString("hu-HU", {
        year: 'numeric',
        month: 'long'
    });

    
    daysContainer.innerHTML = "";

   
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    
    for (let i = 0; i < firstDay.getDay() - 1; i++) {
        const emptyCell = document.createElement("div");
        daysContainer.appendChild(emptyCell);
    }

    
    for (let day = 1; day <= lastDay.getDate(); day++) {
        const dayCell = document.createElement("div");
        dayCell.textContent = day;

        
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


document.getElementById("prev-month").addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

document.getElementById("next-month").addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});


renderCalendar();
