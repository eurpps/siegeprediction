

function storekey() {
    
    var input = document.getElementById("input").value;
    localStorage.setItem("apiKey", input);
    if (localStorage.getItem("apiKey").length > 0) {
        document.getElementById("output").innerHTML = "Saved"
        document.getElementById("output").style.color = "green";
    }
    else {
        document.getElementById("output").innerHTML = "Error: No key entered"
        document.getElementById("output").style.color = "red";
    }
}
function update(){
    if (localStorage.getItem("apiKey").length > 0) {
        document.getElementById("output").innerHTML = "Saved"
        document.getElementById("output").style.color = "green";
    }
    else {
        document.getElementById("output").innerHTML = "Error: No key entered"
        document.getElementById("output").style.color = "red";
    }
}
function clearkey() {
    localStorage.removeItem("apiKey");
    document.getElementById("output").innerHTML = "No api key present"
    document.getElementById("output").style.color = "red";
}
function returnkey() {
    alert("Your API key is: " + localStorage.getItem("apiKey"));
}