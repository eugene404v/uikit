import Chart from 'chart.js';

const ctx = document.querySelector('.pie__canvas');

const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
            label: '# of Votes',
            data: [25, 25, 50],
            backgroundColor: [
                '#BC9CFF',
                '#6FCF97',
                '#FFE39C'
            ],
            borderColor: [
                '#fff',
                '#fff',
                '#fff'
            ],
            borderWidth: 5
        }]
    },
    options: {
        cutoutPercentage: 90,
        legend: {
            display: false
        },
        tooltips: {
            enabled: false
        },
        events: null
    }

});