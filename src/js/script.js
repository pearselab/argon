var species = ["143,000", "117,000", "26,700"];
var sites = ["44,500", "NA", "44,500"];
var studies = ["126", "101", "25"];
var dataPoints = ["8,700,000", "3,500,000", "5,200,000"];

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
