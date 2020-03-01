let wordToSearch = document.getElementById('search').innerHTML
let serchApiStart = 'https://api.themoviedb.org/3/search/movie?api_key=fab095e2e128229267dcab57b84df46f&language=es&query='
let searchApiFin = '&page=1&include_adult=false&region=es'



function searchMovie(){    
    fetch(serchApiStart + wordToSearch + searchApiFin).then(Response => Response.json())
    .then(data => {
        let movieApi = data.results[0]
        let posterUrl = "http://image.tmdb.org/t/p/w500//"
        document.getElementById("imgSelected").src = posterUrl+movieApi.backdrop_path;
        document.getElementById("titleSelected").innerHTML = movieApi.original_title;
        document.getElementById("espTitle").innerHTML = movieApi.title;
        document.getElementById("synopsisSelected").innerHTML = movieApi.overview;
        console.log(movieApi)
    })
    .catch(err => {
        console.log(err);
    });
        }   
        
    document.getElementById('searchButton').addEventListener(onclick).searchMovie();
   
   
   