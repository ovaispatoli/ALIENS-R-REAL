//Variable Objects
var tableData = data;
var filterButton = d3.select("#filter-btn");
var dateField = d3.select("#datetime");
var tbody = d3.select("tbody");

// Populate data

/*tableData.forEach(function(mydata) {
    // console.log(mydata);
    var row = tbody.append("tr");
    Object.values(mydata).forEach((value) => {
        row.append("td").text(value);
    });
});
*/

var populateData = (someData) => {
    someData.forEach(function(mydata) {
        // console.log(mydata);
        let row = tbody.append("tr");
        Object.values(mydata).forEach((value) => {
            row.append("td").text(value);
        });
    });
}

populateData(tableData);

// Filter 

filterButton.on("click", function() {
    
    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select input element from index.html
    let inputValue = dateField.property("value");
    console.log(inputValue);
    
    // Filter table data by field matching input value
    let filteredData = tableData.filter(myData => myData.datetime === inputValue);
    console.log(filteredData);

    //Populate Data based on the input value
    tbody.html("");
    
    let response = filteredData;

    if (response.length !== 0) {
        populateData(filteredData);
    }
        else {
            tbody.append("tr").append("td").text("Your input didn't match any of our data. Try again.");
        }


})

