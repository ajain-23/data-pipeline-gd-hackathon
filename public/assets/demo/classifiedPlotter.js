var countries = ["United States", "Canada", "Mexico", "United Kingdom", "India", "Russia"]
var chart = []
const delay = ms => new Promise(res => setTimeout(res, ms));

function loadChart() {
    var xArray = [];
    var yArray = [];

    d3.csv("../assets/data/country_retention_rate.csv", function (data) {
        var layout = {
            title: "Categorial Classification of Leaked Domains (6 Months)",
            xaxis: {title: "Price ($)"},
            yaxis: {title: "Frequency"},
        };

        var x = ["Apples","Apples","Apples","Oranges", "Bananas"];
        
        var data = [
          {
            histfunc: "count",
            x: x,
            type: "histogram",
            name: "count"
          }
        ];
        
        Plotly.newPlot('classified_plot', data, layout)
    });
};

loadChart();