window.onload = async function () {
    const response = await fetch("./americanfood.json");
    const data = await response.json();
    let countCritical = 0;
    let countNotCritical = 0;
    let countNotApplicable = 0;
    data.forEach(item => {
        if (item.critical_flag === "Critical") {
            countCritical += 1;
        }
        if (item.critical_flag === "Not Critical") {
            countNotCritical += 1;
        }
        if (item.critical_flag === "Not Applicable") {
            countNotApplicable += 1;
        }
    })

    const ctx = document.getElementById('pieChart');

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ["Critical", "Not Critical", "Not Applicable"],
            datasets: [{
                label: '# of Votes',
                data: [countCritical, countNotCritical, countNotApplicable],
                borderWidth: 1,
                backgroundColor: [
                    'green',
                    'yellow',
                    'red'],
            }]
        },
        options: {

            plugins: {
                title: {
                    display: true,
                    text: 'Custom Chart Title',
                    font: {
                        size: 14,
                        family: "'Courier New', Courier, monospace",
                    }
                },
                legend: {
                    labels: {
                        font: {
                            size: 14,
                            family: "'Courier New', Courier, monospace",
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}