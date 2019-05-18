//Variable Objects
var tableData = data;
var button = d3.select("filter-btn");
var field = d3.select("#datetime");
var tbody = d3.select("tbody");



// Populate data

// data.forEach(function(mydata) {
//     // console.log(mydata);
//     var row = tbody.append("tr");
//     Object.values(mydata).forEach((value) => {
//         row.append("td").text(value);
//     });
// });



var populate = (someData) => {
    someData.forEach(function(mydata) {
        // console.log(mydata);
        var row = tbody.append("tr");
        Object.values(mydata).forEach((value) => {
            row.append("td").text(value);
        });
    });
}

populate(data);