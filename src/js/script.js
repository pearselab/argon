var species = ["1000", "200", "100"];
var sites = ["1000", "200", "100"];
var studies = ["1000", "200", "100"];
var dataPoints = ["1000", "200", "> 2.7 mil"];

function changeData ( choice ) {
    if (choice === "allData") {
        document.getElementById("speciesCount").innerHTML = species[0]; 
        document.getElementById("siteCount").innerHTML = sites[0];
        document.getElementById("studyCount").innerHTML = studies[0];
        document.getElementById("dataCount").innerHTML = dataPoints[0]; 
    } else if (choice === "natdb") {
        document.getElementById("speciesCount").innerHTML = species[1]; 
        document.getElementById("siteCount").innerHTML = sites[1];
        document.getElementById("studyCount").innerHTML = studies[1]; 
        document.getElementById("dataCount").innerHTML = dataPoints[1]; 
    } else if (choice === "nacdb") {
        document.getElementById("speciesCount").innerHTML = species[2];
        document.getElementById("siteCount").innerHTML = sites[2];
        document.getElementById("studyCount").innerHTML = studies[2]; 
        document.getElementById("dataCount").innerHTML = dataPoints[2]; 
    }
}