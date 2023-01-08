var revenueConfig =
{
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'Revenue',
            data: [],
            backgroundColor: [
                'rgba(158, 255, 161, 0.80)'
            ],
            borderWidth: 0
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: false,
                ticks: {
                    callback: function(value, index, ticks) {
                        return '$' + value;
                    }
                }
            }
        }
    }
}

var freeCashFlowConfig =
{
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'Free Cash Flow',
            data: [],
            backgroundColor: [
                'rgba(135, 175, 255, 0.80)'
            ],
            borderWidth: 0
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: false,
                ticks: {
                    callback: function(value, index, ticks) {
                        return '$' + value;
                    }
                }
            }
        }
    }
}

var ebitdaConfig =
{
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'EBITDA',
            data: [],
            backgroundColor: [
                'rgba(255, 217, 92, 0.80)'
            ],
            borderWidth: 0
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: false,
                ticks: {
                    callback: function(value, index, ticks) {
                        return '$' + value;
                    }
                }
            }
        }
    }
}

var longTermDebtConfig =
{
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'Long Term Debt',
            data: [],
            backgroundColor: [
                'rgba(255, 69, 69, 0.80)'
            ],
            borderWidth: 0
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: false,
                ticks: {
                    callback: function(value, index, ticks) {
                        return '$' + value;
                    }
                }
            }
        }
    }
}

var netIncomeConfig =
{
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'Long Term Debt',
            data: [],
            backgroundColor: [
                'rgba(222, 125, 255, 0.80)'
            ],
            borderWidth: 0
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: false,
                ticks: {
                    callback: function(value, index, ticks) {
                        return '$' + value;
                    }
                }
            }
        }
    }
}

var cashConfig =
{
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'Cash',
            data: [],
            backgroundColor: [
                'rgba(255, 153, 102, 0.80)'
            ],
            borderWidth: 0
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: false,
                ticks: {
                    callback: function(value, index, ticks) {
                        return '$' + value;
                    }
                }
            }
        }
    }
}

const revenueCtx = document.getElementById('revenueGraph');
const freeCashFlowCtx = document.getElementById('freeCashFlowGraph');
const ebitdaCtx = document.getElementById('ebitdaGraph');
const longTermDebtCtx = document.getElementById('longTermDebtGraph');
const netIncomeCtx = document.getElementById('netIncomeGraph');
const cashCtx = document.getElementById('cashGraph');

const revenueChart = new Chart(revenueCtx, revenueConfig);
const freeCashFlowChart = new Chart(freeCashFlowCtx, freeCashFlowConfig);
const ebitdaChart = new Chart(ebitdaCtx, ebitdaConfig);
const longTermDebtChart = new Chart(longTermDebtCtx, longTermDebtConfig);
const netIncomeChart = new Chart(netIncomeCtx, netIncomeConfig);
const cashChart = new Chart(cashCtx, cashConfig);

function updateTitle(ticker) {
    document.getElementById('tickerSymbol').innerHTML = "$ " + ticker
}

async function getData() {
    var ticker = document.getElementById("inputTicker").value;
    const api_url = 'http://localhost:80/get-financials/' + ticker
    const response = await fetch(api_url);
    const data = await response.json();

    updateTitle(ticker);

    // Revenue 
    revenueConfig.data.labels = Object.keys(data.revenue)
    revenueConfig.data.datasets[0].data = Object.values(data.revenue)
    revenueChart.update();
    // Free Cash Flow 
    freeCashFlowConfig.data.labels = Object.keys(data.freeCashFlow)
    freeCashFlowConfig.data.datasets[0].data = Object.values(data.freeCashFlow)
    freeCashFlowChart.update();
    // EBITDA 
    ebitdaChart.data.labels = Object.keys(data.ebitda)
    ebitdaChart.data.datasets[0].data = Object.values(data.ebitda)
    ebitdaChart.update();
    // Long Term Debt 
    longTermDebtChart.data.labels = Object.keys(data.longTermDebt)
    longTermDebtChart.data.datasets[0].data = Object.values(data.longTermDebt)
    longTermDebtChart.update();
    // Net Income
    netIncomeChart.data.labels = Object.keys(data.netIncome)
    netIncomeChart.data.datasets[0].data = Object.values(data.netIncome)
    netIncomeChart.update();
    // Cash
    cashChart.data.labels = Object.keys(data.cash)
    cashChart.data.datasets[0].data = Object.values(data.cash)
    cashChart.update();
    return data;
}