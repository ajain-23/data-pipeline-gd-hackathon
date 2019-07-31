function registrarQuery(region, country) {
    var content = "";

    d3.csv("../assets/data/" + region + ".csv", function (data) {
        for (var i = 0; i < data.length; i++) {
            content += '<tr>';
            var comp = parseInt(data[i]['Percentage'].substring(0, data[i]['Percentage'].length - 1));
            var max = 7;

            if (comp >= max) {
                content += '<td><b>' + data[i]['Registrar'] + '</b></td>';
                content += '<td><b>' + data[i]['Raw'] + '</b></td>';
                content += '<td><b>' + data[0]['Total'] + '</b></td>';
                content += '<td class="text-right"><b>' + data[i]['Percentage'] + '</b></td>';
            } else {
                content += '<td>' + data[i]['Registrar'] + '</td>';
                content += '<td>' + data[i]['Raw'] + '</td>';
                content += '<td>' + data[0]['Total'] + '</td>';
                content += '<td class="text-right">' + data[i]['Percentage'] + '</td>';
            }

            content += '</tr>';
        }

        console.log("hi" + content);
        document.getElementById("registrars_list").innerHTML = content;
        document.getElementById("registrars_title").innerHTML = "Competitive Analysis in Major Markets - " + country + " (1 Year)";
        // ...
    });

}

function tldRegQuery(tld, extension) {
    var content = "";

    d3.csv("../assets/data/" + tld + "_registrars.csv", function (data) {
        for (var i = 0; i < data.length; i++) {
            content += '<tr>';
            var comp = parseInt(data[i]['Percentage'].substring(0, data[i]['Percentage'].length - 1));
            var max = 5;

            if (comp >= max) {
                content += '<td><b>' + data[i]['Registrar'] + '</b></td>';
                content += '<td><b>' + data[i]['Count'] + '</b></td>';
                content += '<td><b>' + data[0]['Total'] + '</b></td>';
                content += '<td class="text-right"><b>' + data[i]['Percentage'] + '</b></td>';
            } else {
                content += '<td>' + data[i]['Registrar'] + '</td>';
                content += '<td>' + data[i]['Count'] + '</td>';
                content += '<td>' + data[0]['Total'] + '</td>';
                content += '<td class="text-right">' + data[i]['Percentage'] + '</td>';
            }

            content += '</tr>';
        }

        console.log("hi" + content);
        document.getElementById("registrars_list").innerHTML = content;
        document.getElementById("registrars_title").innerHTML = "Competitive Analysis Across TLDs - " + extension + " (1 Year)";
        // ...
    });

}

registrarQuery("us_pretty", "United States");