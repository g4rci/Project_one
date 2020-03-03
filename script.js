let wordToSearch = document.getElementById('search')
let serchApiStart = 'https://api.themoviedb.org/3/search/movie?api_key=fab095e2e128229267dcab57b84df46f&language=es&query='
let searchApiFin = '&page=1&include_adult=false&region=es'



function searchMovie(){  
    let temp = escape(wordToSearch.value)
    let url = serchApiStart + temp + searchApiFin
    console.log(url)
    fetch(url)
    .then(response => response.json())
    .then(data => {
        let movieApi = data.results[0]
        console.log(data)
        let posterUrl = "http://image.tmdb.org/t/p/w500//"
        document.getElementById("imgSelected").src = posterUrl+movieApi.backdrop_path;
        document.getElementById("titleSelected").innerHTML = movieApi.original_title;
        document.getElementById("espTitle").innerHTML = movieApi.title;
        document.getElementById("synopsisSelected").innerHTML = movieApi.overview;
        document.getElementById("posterApi").src = posterUrl+movieApi.poster_path
        console.log(movieApi)
    })
    .catch(err => {
        console.log(err);
    });
}   
     console.log(serchApiStart + wordToSearch + searchApiFin)
    document.getElementById('searchButton').addEventListener('click', searchMovie);
    
