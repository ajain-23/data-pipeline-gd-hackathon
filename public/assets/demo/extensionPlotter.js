var countries = [".COM Domains", ".ORG Domains", ".NET Domains", ".INFO Domains"]
var chart = []
const delay = ms => new Promise(res => setTimeout(res, ms));

function loadChart() {
    var xArray = [];
    var yArray = [];

    d3.csv("../assets/data/tld_daily_leakage.csv", function (data) {
        console.log(data);
        var layout = {
            title: 'Daily TLD Retention Rate by Major Market (6 Months)',
            xaxis: {title: "Date"},
            yaxis: {title: "Proportion Retained"},
        };

        for (var c = 0; c < countries.length; c++) {
            for (var i = 0; i < data.length; i++) {
                xArray.push(data[i]['Date']);
                yArray.push(data[i][countries[c]]);
            };

            console.log(xArray.reverse());
            console.log(xArray);

            var trace = {
                x: xArray.reverse(),
                y: yArray.reverse(),
                name: countries[c],
                mode: 'markers',
                type: 'scatter',
                text: xArray.reverse(),
                marker: {
                    size: 6
                }
            };


            chart.push(trace);
            console.log(chart);
            xArray = [];
            yArray = [];

        };

        Plotly.newPlot('extensions_plot', chart, layout);
    });
};

loadChart();