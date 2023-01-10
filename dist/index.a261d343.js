function updateOverview(data) {
    document.getElementById("companyName").innerHTML = data.companyName;
    document.getElementById("tickerSymbol").innerHTML = "$" + data.symbol;
    document.getElementById("exchange").innerHTML = data.exchangeShortName;
    document.getElementById("sector").innerHTML = data.sector;
    document.getElementById("companyLogo").src = data.image;
    document.getElementById("overview").style = "contents";
}
async function getOverview() {
    var ticker = document.getElementById("inputTicker").value;
    const api_url = "http://192.168.1.223:80/get-profile/" + ticker.toUpperCase();
    const response = await fetch(api_url);
    const data = await response.json();
    updateOverview(data);
}

//# sourceMappingURL=index.a261d343.js.map
