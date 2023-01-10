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
        aspectRatio: 2,
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
        aspectRatio: 2,
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
        aspectRatio: 2,
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
var totalDebtConfig = {
    type: "bar",
    data: {
        labels: [],
        datasets: [
            {
                label: "Total Debt",
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
        aspectRatio: 2,
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
                label: "Net Income",
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
        aspectRatio: 2,
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
        aspectRatio: 2,
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
var grossProfitConfig = {
    type: "bar",
    data: {
        labels: [],
        datasets: [
            {
                label: "Gross Profit",
                data: [],
                backgroundColor: [
                    "rgba(168, 152, 255, 1)"
                ],
                borderWidth: 0
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 2,
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
var equityConfig = {
    type: "bar",
    data: {
        labels: [],
        datasets: [
            {
                label: "Share Holder Equity",
                data: [],
                backgroundColor: [
                    "rgba(106, 244, 203, 1)"
                ],
                borderWidth: 0
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 2,
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
const totalDebtCtx = document.getElementById("totalDebtGraph");
const netIncomeCtx = document.getElementById("netIncomeGraph");
const cashCtx = document.getElementById("cashGraph");
const grossProfitCtx = document.getElementById("grossProfitGraph");
const equityCtx = document.getElementById("equityGraph");
const revenueChart = new Chart(revenueCtx, revenueConfig);
const freeCashFlowChart = new Chart(freeCashFlowCtx, freeCashFlowConfig);
const ebitdaChart = new Chart(ebitdaCtx, ebitdaConfig);
const totalDebtChart = new Chart(totalDebtCtx, totalDebtConfig);
const netIncomeChart = new Chart(netIncomeCtx, netIncomeConfig);
const cashChart = new Chart(cashCtx, cashConfig);
const grossProfitChart = new Chart(grossProfitCtx, grossProfitConfig);
const equityChart = new Chart(equityCtx, equityConfig);
// Pop out graphs
const revenueGraphPopOutCtx = document.getElementById("revenueGraphPopOut");
const freeCashFlowGraphPopOutCtx = document.getElementById("freeCashFlowGraphPopOut");
const ebitdaGraphPopOutCtx = document.getElementById("ebitdaGraphPopOut");
const netIncomeGraphPopOutCtx = document.getElementById("netIncomeGraphPopOut");
const cashGraphPopOutCtx = document.getElementById("cashGraphPopOut");
const totalDebtGraphPopOutCtx = document.getElementById("totalDebtGraphPopOut");
const grossProfitGraphPopOutCtx = document.getElementById("grossProfitGraphPopOut");
const shareholderEquityGraphPopOutCtx = document.getElementById("shareholderEquityGraphPopOut");
const revenueGraphPopOut = new Chart(revenueGraphPopOutCtx, revenueConfig);
const freeCashFlowGraphPopOut = new Chart(freeCashFlowGraphPopOutCtx, freeCashFlowConfig);
const ebitdaGraphPopOut = new Chart(ebitdaGraphPopOutCtx, ebitdaConfig);
const netIncomeGraphPopOut = new Chart(netIncomeGraphPopOutCtx, netIncomeConfig);
const cashGraphPopOut = new Chart(cashGraphPopOutCtx, cashConfig);
const totalDebtGraphPopOut = new Chart(totalDebtGraphPopOutCtx, totalDebtConfig);
const grossProfitGraphPopOut = new Chart(grossProfitGraphPopOutCtx, grossProfitConfig);
const shareholderEquityGraphPopOut = new Chart(shareholderEquityGraphPopOutCtx, equityConfig);
function updateCharts() {
    revenueChart.update();
    freeCashFlowChart.update();
    ebitdaChart.update();
    totalDebtChart.update();
    netIncomeChart.update();
    cashChart.update();
    grossProfitChart.update();
    equityChart.update();
    revenueGraphPopOut.update();
    freeCashFlowGraphPopOut.update();
    ebitdaGraphPopOut.update();
    netIncomeGraphPopOut.update();
    cashGraphPopOut.update();
    totalDebtGraphPopOut.update();
    grossProfitGraphPopOut.update();
    shareholderEquityGraphPopOut.update();
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
    totalDebtChart.data.labels = Object.keys(data.totalDebt);
    totalDebtChart.data.datasets[0].data = Object.values(data.totalDebt);
    // Net Income
    netIncomeChart.data.labels = Object.keys(data.netIncome);
    netIncomeChart.data.datasets[0].data = Object.values(data.netIncome);
    // Cash
    cashChart.data.labels = Object.keys(data.cash);
    cashChart.data.datasets[0].data = Object.values(data.cash);
    // Gross profit
    grossProfitChart.data.labels = Object.keys(data.grossProfit);
    grossProfitChart.data.datasets[0].data = Object.values(data.grossProfit);
    // Equity
    equityChart.data.labels = Object.keys(data.totalStockholdersEquity);
    equityChart.data.datasets[0].data = Object.values(data.totalStockholdersEquity);
    updateCharts();
}

//# sourceMappingURL=index.b8357eb8.js.map
