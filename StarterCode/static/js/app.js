// from data.js
var tableData = data;

// select tbody 
body = d3.select("tbody")

//loop through to add to the table in html
function displayData(data){ 
    body.text("")
    data.forEach(function(totaldata){
    tr = body.append("tr")
    Object.entries(totaldata).forEach(function([key, value]){
        td = tr.append("td").text(value)	
    })
})}

displayData(tableData)

//select input and the filter button
var dateInputText = d3.select("#datetime")
var button = d3.select("filter-btn")

// filter data on input
function clickSelect(){
    d3.event.preventDefault();
    console.log(dateInputText.property("value"));
    var new_table = tableData.filter(datetime => datetime.datetime===dateInputText.property("value"))
    displayData(new_table);
}

// event listener to handle change and click
dateInputText.on("change", clickSelect)