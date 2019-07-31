var countries = ["United States", "Canada", "Mexico", "United Kingdom", "India", "Russia"]
var chart = []
const delay = ms => new Promise(res => setTimeout(res, ms));

function loadChart() {
    var x = [];
    var y = [];

    d3.csv("../assets/data/final_data.csv", function (data) {
        var layout = {
            title: "Categorial Classification of Leaked Domains (6 Months)",
            xaxis: {
                title: "Category",
                tickangle: 45,
                tickfont: {
                    size: 6,
                  },
            },
            yaxis: {
                title: "Percentage of Leaked Domains (% out of 100)"
            },

        };

        for (var i = 0; i < data.length; i++) {
            x.push(data[i]['Category'])
            y.push(data[i]['Percentage'])
        }

        var data = [{
            histfunc: "sum",
            x: x,
            y: y,
            type: "histogram",
            name: "count"
        }];

        Plotly.newPlot('classified_plot', data, layout)
    });
};

loadChart();