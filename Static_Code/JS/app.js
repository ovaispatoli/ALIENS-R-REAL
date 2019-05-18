// Table Data Variable
var tableData = data;

// Table body variable
var tbody = d3.select("tbody");

// console.log(data);

data.forEach(function(mydata) {
    // console.log(mydata);
    var row = tbody.append("tr");
    Object.values(mydata).forEach((value) => {
        row.append("td").text(value);
    });
});