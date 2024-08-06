function loadhtml(file, elementId){
    fetch(file)
        .then(Response => Response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading HTML:', error));
}