// Searchbuttom Magnifyinglense
document.querySelector(".search button").addEventListener("click", function () {
    weather.search();

});

// Search with Enterkey
document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        weather.search();
    }
});