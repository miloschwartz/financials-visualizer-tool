function updateRatios(data) {
    document.getElementById('peRatio').innerHTML = "P/E Ratio: " + data.peRatioTTM;
}

async function getRatios() {
    var ticker = document.getElementById("inputTicker").value;
    const api_url = 'http://192.168.1.223:80/get-ratios/' + ticker.toUpperCase();
    const response = await fetch(api_url);
    const data = await response.json();

    updateRatios(data);

}