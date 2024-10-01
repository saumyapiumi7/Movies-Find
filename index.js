let key = "dd8041da";

function search() {
    let movie = document.getElementById("searchBar").value;
    const htmlRequest = new XMLHttpRequest();
    const link = "http://www.omdbapi.com/?apikey=" + key + "&t=" + movie;

    htmlRequest.open("GET", link);
    htmlRequest.send();
    htmlRequest.responseType = "json";

    htmlRequest.onload = function() {
        const response = htmlRequest.response;
        const content = document.getElementById("content");
        const details = document.getElementById("details");

        // Clear previous content
        while (content.firstChild) content.removeChild(content.firstChild);
        while (details.firstChild) details.removeChild(details.firstChild);

        // Poster Image
        const imageTag = document.createElement("img");
        imageTag.src = response.Poster;
        content.appendChild(imageTag);

        // Movie Details
        const title = document.createElement("h2");
        title.innerHTML = response.Title;
        const year = document.createElement("p");
        year.innerHTML = "Year: " + response.Year;
        const rated = document.createElement("p");
        rated.innerHTML = "Rated: " + response.Rated;
        const released = document.createElement("p");
        released.innerHTML = "Released: " + response.Released;
        const runtime = document.createElement("p");
        runtime.innerHTML = "Runtime: " + response.Runtime;
        const genre = document.createElement("p");
        genre.innerHTML = "Genre: " + response.Genre;
        const director = document.createElement("p");
        director.innerHTML = "Director: " + response.Director;
        const plot = document.createElement("p");
        plot.innerHTML = "Plot: " + response.Plot;

        // Append details
        details.appendChild(title);
        details.appendChild(year);
        details.appendChild(rated);
        details.appendChild(released);
        details.appendChild(runtime);
        details.appendChild(genre);
        details.appendChild(director);
        details.appendChild(plot);
    };
}
