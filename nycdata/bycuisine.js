
window.onload = async function () {
    const dataframes = [
        {
            filename: "./americanfood.json",
            canvasId: "pieChart",
            name: "american food"
        },
        {
            filename: "./mecianfood.json",
            canvasId: "pieChart1",
            name: "mexican food"
        },
        {
            filename: "./chinesefood.json",
            canvasId: "pieChart2"
        },
        {
            filename: "./italianfood.json",
            canvasId: "pieChart3"
        }
    ];
    
    dataframes.forEach(async element => {
        const response = await fetch(element.filename);
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

        const ctx = document.getElementById(element.canvasId);

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
                        '#FAC60F',
                        'plum'],
                }]
            },
            options: {
    
                plugins: {
                    title: {
                        display: true,
                        text: element.name,
                        color:"white",
                        font: {
                            size: 30,
                            family: "'Owners1'",
                        }
                    },
                    legend: {
                        labels: {
                            color:"white",
                            font: {
                                size: 14,
                                family: "'Owners1'",
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        display:false
                    }
                }
            }
        });
    })
}