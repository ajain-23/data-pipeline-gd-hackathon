var countries = ["EUR GD", "EUR", "GBP GD", "GBP", "INR GD", "INR", "USD GD", "USD"]
var chart = []
const delay = ms => new Promise(res => setTimeout(res, ms));

function loadChart() {
    var xArray = [];
    var yArray = [];

    d3.csv("../assets/data/summary_currency.csv", function (data) {
        var x1 = [];
        var x2 = [];
        var x3 = [];
        var x4 = [];
        var x5 = [];
        var x6 = [];
        var x7 = [];
        var x8 = [];

        for (var i = 0; i < data.length; i++) {
            x1.push(data[i]['USD GD'])
            x2.push(data[i]['USD'])
            x3.push(data[i]['EUR GD'])
            x4.push(data[i]['EUR'])
            x5.push(data[i]['GBP GD'])
            x6.push(data[i]['GBP'])
            x7.push(data[i]['INR GD'])
            x8.push(data[i]['INR'])
        }

        var trace1 = {
            x: x1,
            type: "histogram",
            opacity: 0.5,
            xbins: {
                end: 50,
                size: 5,
                start: .5
            },
            name: "USD - GoDaddy"
        };

        var trace2 = {
            x: x2,
            type: "histogram",
            opacity: 0.6,
            xbins: {
                end: 75,
                size: 5,
                start: .5
            },
            name: "USD - Leaked"
        };
        var trace3 = {
            x: x3,
            type: "histogram",
            opacity: 0.6,
            xbins: {
                end: 50,
                size: 5,
                start: .5
            },
            name: "EUR - GoDaddy"
        };
        var trace4 = {
            x: x4,
            type: "histogram",
            opacity: 0.6,
            xbins: {
                end: 50,
                size: 5,
                start: .5
            },
            name: "EUR - Leaked"
        };
        var trace5 = {
            x: x5,
            type: "histogram",
            opacity: 0.6,
            xbins: {
                end: 50,
                size: 5,
                start: .5
            },
            name: "GBP - GoDaddy"
        };
        var trace6 = {
            x: x6,
            type: "histogram",
            opacity: 0.6,
            xbins: {
                end: 50,
                size: 5,
                start: .5
            },
            name: "GBP - Leaked"
        };
        var trace7 = {
            x: x7,
            type: "histogram",
            opacity: 0.6,
            xbins: {
                end: 50,
                size: 5,
                start: .5
            },
            name: "INR - GoDaddy"
        };
        var trace8 = {
            x: x8,
            type: "histogram",
            opacity: 0.6,
            xbins: {
                end: 50,
                size: 5,
                start: .5
            },
            name: "INR - Leaked", 
        };

        var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8];
        var layout = {
            barmode: "overlay",
            title: "Price Distribution for Leaked/Non-Leaked Domains Across Major Markets (6 Months)",
            xaxis: {title: "Price ($)"},
            yaxis: {title: "Frequency"},
        };
        Plotly.newPlot("price_plot", data, layout);
    });
};

loadChart();