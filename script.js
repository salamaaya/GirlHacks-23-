function getDate() {
    return document.getElementById("dateSearch").value;
}


async function call(){
    let request = '';
    fetch("./secrets.json").then(response => {
        return response.json();
    }).then(async function (myJSON) {
        request = `https://api.nasa.gov/planetary/apod?date=` + getDate() + '&api_key=' + myJSON.api_key;
        await fetch(request).then(function(response){
            return response.json();
        }).then(function (myJSON) {
            p = document.getElementById("description");
            p.innerHTML = myJSON.explanation;

            img = document.getElementById("spacePic");
            img.src = myJSON.url;
        })
    });
}