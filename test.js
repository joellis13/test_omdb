function searchTitle() {
    var title = document.forms["searchForm"]["title"].value;
    if (title == "") {
        alert("Title must be filled out");
        return false;
    }

    var xhr = new XMLHttpRequest();
    var base = "http://www.omdbapi.com/?apikey=111c0be2&plot=full&t=";
    var url = base + title;

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            jsonResponse = this.responseText;
            document.getElementById("results").innerHTML = jsonResponse;
        }
    };

    xhr.open("GET", url);
    xhr.send();
}