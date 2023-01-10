var revenueConfig = {
    type: "bar",
    data: {
        labels: [],
        datasets: [
            {
                label: "Revenue",
                data: [],
                backgroundColor: [
                    "rgba(158, 255, 161, 1)"
                ],
                borderWidth: 0
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 1,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                grid: {
                    drawOnChartArea: false
                }
            },
            y: {
                beginAtZero: false,
                ticks: {
                    callback: function(value, index, ticks) {
                        return "$" + value;
                    }
                }
            }
        }
    }
};
var freeCashFlowConfig = {
    type: "bar",
    data: {
        labels: [],
        datasets: [
            {
                label: "Free Cash Flow",
                data: [],
                backgroundColor: [
                    "rgba(135, 175, 255, 1)"
                ],
                borderWidth: 0
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 1,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                grid: {
                    drawOnChartArea: false
                }
            },
            y: {
                beginAtZero: false,
                ticks: {
                    callback: function(value, index, ticks) {
                        return "$" + value;
                    }
                }
            }
        }
    }
};
var ebitdaConfig = {
    type: "bar",
    data: {
        labels: [],
        datasets: [
            {
                label: "EBITDA",
                data: [],
                backgroundColor: [
                    "rgba(255, 217, 92, 1)"
                ],
                borderWidth: 0
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 1,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                grid: {
                    drawOnChartArea: false
                }
            },
            y: {
                beginAtZero: false,
                ticks: {
                    callback: function(value, index, ticks) {
                        return "$" + value;
                    }
                }
            }
        }
    }
};
var longTermDebtConfig = {
    type: "bar",
    data: {
        labels: [],
        datasets: [
            {
                label: "Long Term Debt",
                data: [],
                backgroundColor: [
                    "rgba(255, 69, 69, 1)"
                ],
                borderWidth: 0
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 1,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                grid: {
                    drawOnChartArea: false
                }
            },
            y: {
                beginAtZero: false,
                ticks: {
                    callback: function(value, index, ticks) {
                        return "$" + value;
                    }
                }
            }
        }
    }
};
var netIncomeConfig = {
    type: "bar",
    data: {
        labels: [],
        datasets: [
            {
                label: "Long Term Debt",
                data: [],
                backgroundColor: [
                    "rgba(222, 125, 255, 1)"
                ],
                borderWidth: 0
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 1,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                grid: {
                    drawOnChartArea: false
                }
            },
            y: {
                beginAtZero: false,
                ticks: {
                    callback: function(value, index, ticks) {
                        return "$" + value;
                    }
                }
            }
        }
    }
};
var cashConfig = {
    type: "bar",
    data: {
        labels: [],
        datasets: [
            {
                label: "Cash",
                data: [],
                backgroundColor: [
                    "rgba(255, 153, 102, 1)"
                ],
                borderWidth: 0
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 1,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                grid: {
                    drawOnChartArea: false
                }
            },
            y: {
                beginAtZero: false,
                ticks: {
                    callback: function(value, index, ticks) {
                        return "$" + value;
                    }
                }
            }
        }
    }
};
// Thumbnail graphs
const revenueCtx = document.getElementById("revenueGraph");
const freeCashFlowCtx = document.getElementById("freeCashFlowGraph");
const ebitdaCtx = document.getElementById("ebitdaGraph");
const longTermDebtCtx = document.getElementById("longTermDebtGraph");
const netIncomeCtx = document.getElementById("netIncomeGraph");
const cashCtx = document.getElementById("cashGraph");
const revenueChart = new Chart(revenueCtx, revenueConfig);
const freeCashFlowChart = new Chart(freeCashFlowCtx, freeCashFlowConfig);
const ebitdaChart = new Chart(ebitdaCtx, ebitdaConfig);
const longTermDebtChart = new Chart(longTermDebtCtx, longTermDebtConfig);
const netIncomeChart = new Chart(netIncomeCtx, netIncomeConfig);
const cashChart = new Chart(cashCtx, cashConfig);
// Pop out graphs
const revenueGraphPopOutCtx = document.getElementById("revenueGraphPopOut");
const freeCashFlowGraphPopOutCtx = document.getElementById("freeCashFlowGraphPopOut");
const revenueGraphPopOut = new Chart(revenueGraphPopOutCtx, revenueConfig);
const freeCashFlowGraphPopOut = new Chart(freeCashFlowGraphPopOutCtx, freeCashFlowConfig);
function updateCharts() {
    revenueChart.update();
    freeCashFlowChart.update();
    ebitdaChart.update();
    longTermDebtChart.update();
    netIncomeChart.update();
    cashChart.update();
    revenueGraphPopOut.update();
    freeCashFlowGraphPopOut.update();
}
async function getFinancials() {
    var ticker = document.getElementById("inputTicker").value;
    const api_url = "http://192.168.1.223:80/get-financials/" + ticker.toUpperCase();
    const response = await fetch(api_url);
    const data = await response.json();
    // Revenue 
    revenueConfig.data.labels = Object.keys(data.revenue);
    revenueConfig.data.datasets[0].data = Object.values(data.revenue);
    // Free Cash Flow 
    freeCashFlowConfig.data.labels = Object.keys(data.freeCashFlow);
    freeCashFlowConfig.data.datasets[0].data = Object.values(data.freeCashFlow);
    // EBITDA 
    ebitdaChart.data.labels = Object.keys(data.ebitda);
    ebitdaChart.data.datasets[0].data = Object.values(data.ebitda);
    // Long Term Debt 
    longTermDebtChart.data.labels = Object.keys(data.longTermDebt);
    longTermDebtChart.data.datasets[0].data = Object.values(data.longTermDebt);
    // Net Income
    netIncomeChart.data.labels = Object.keys(data.netIncome);
    netIncomeChart.data.datasets[0].data = Object.values(data.netIncome);
    // Cash
    cashChart.data.labels = Object.keys(data.cash);
    cashChart.data.datasets[0].data = Object.values(data.cash);
    updateCharts();
}

//# sourceMappingURL=index.b8357eb8.js.map
