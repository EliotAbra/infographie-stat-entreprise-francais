const pieCanvas = document.getElementById('pieCanvas');

const barChart = new Chart(pieCanvas, {
    type: "pie",
    data: {
        labels: ["TPE","PME", "ETI", "GE"],
        datasets: [{
            data: [33, 372, 72, 25],
            backgroundColor: [
                "#e94e34",
                "#00a5a5",
                "#fec800",
                "#620092"
            ],
        }]
    },
});

const barCanvas = document.getElementById('barCanvas');

const baChart = new Chart(barCanvas, {
    type: "bar",
    data: {
        labels: [" ","Administration","Agriculture, pêche", "Commerce", "Construction", "Filière numérique", "Industrie", "Services", "Services & conseils", " "],
        datasets: [{
            data: [0, 21, 3, 87, 18, 85, 45, 179, 110, 0],
            label: 'Activités Entreprises',
            backgroundColor: [
                "#f1efe7",
                "#e94e34",
                "#00a5a5",
                "#fec800",
                "#620092",
                "#e94e34",
                "#00a5a5",
                "#fec800",
                "#620092",
                "#f1efe7",
            ],
        }]
    },
});

const barCanvas2 = document.getElementById('barCanvas2');

const bChart = new Chart(barCanvas2, {
    type: "bar",
    data: {
        labels: ["OUI","NON"],
        datasets: [{
            data: [514, 35],
            label: "Siéges Entreprises",
            backgroundColor: [
                "#00a5a5",
            ],
        }]
    },
});

const pieCanvas2 = document.getElementById('pieCanvas2');

const barbChart = new Chart(pieCanvas2, {
    type: "pie",
    data: {
        labels: ["Entreprises privées","Établissements publics", "Associations", "Communes"],
        datasets: [{
            data: [462, 22, 58, 7],
            backgroundColor: [
                "#e94e34",
                "#00a5a5",
                "#fec800",
                "#620092"
            ],
        }]
    },
});

const barCanvas3 = document.getElementById('barCanvas3');

const barbaChart = new Chart(barCanvas3, {
    type: "bar",
    data: {
        labels: [" ","Rouen","Les Andelys", "Le Havre", "Dieppe", "Bernay", "Évreux", "Cean", "Lisieux", " "],
        datasets: [{
            data: [0, 300, 27, 24, 17, 16, 16, 11, 7, 0],
            label: 'Localisation',
            backgroundColor: [
                "#f1efe7",
                "#e94e34",
                "#00a5a5",
                "#fec800",
                "#620092",
                "#e94e34",
                "#00a5a5",
                "#fec800",
                "#620092",
                "#f1efe7",
            ],
        }]
    },
});