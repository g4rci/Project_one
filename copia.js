let wordToSearch = document.getElementById('search')
let serchApiStart = 'https://api.themoviedb.org/3/search/movie?api_key=fab095e2e128229267dcab57b84df46f&language=es&query='
let searchApiFin = '&page=1&include_adult=false&region=es'
function searchMovie(){
    let temp = escape(wordToSearch.value)
    let url = serchApiStart + temp + searchApiFin
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        let movieApi = data.results[0]
        let posterUrl = 'http://image.tmdb.org/t/p/w500//'
        let divSelected = document.getElementById('container')
        divSelected.innerHTML = ``
        divSelected.innerHTML = `
        <div id=“carouselExampleSlidesOnly” class=“carousel slide” data-ride=“carousel”>
        <div class=“carousel-inner”>
        <div class=“carousel-item active”>
        <img id=“imgSelected” class=“d-block w-100” src=${posterUrl+movieApi.backdrop_path} class=“d-block w-100" alt=“...“>
        </div>
        </div>
        </div>
        <div class=“card”>
        <div class=“card-body”>
        <h5 id=“titleSelected” class=“card-title”>${movieApi.original_title}</h5>
        <h6 id=“espTitle” class=“card-subtitle mb-2 text-muted”>${movieApi.title}</h6>
        <p id=“synopsisSelected” class=“card-text”>${movieApi.overview}</p>
        <img id=“posterApi” src=${posterUrl+movieApi.poster_path} alt=“”>
        <iframe width=“560” height=“315" id ="iframe" src= frameborder=“0" allow=“accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture” allowfullscreen></iframe>
        </div>
        </div>`
        searchTrailer(movieApi)
    })
    .catch(err => {
      //console.log(err);
  });
    
}
function searchTrailer (result) {
  fetch(`https://api.themoviedb.org/3/movie/${result.id}/videos?api_key=fab095e2e128229267dcab57b84df46f`)
  .then(Response => Response.json())
  .then(data => {
    let iframe= document.getElementById("iframe")
    iframe.src= `https://www.youtube.com/watch?v=` + data.results[0].key
    /*   let movieTrailerKey = data.results[0].key
      let trailer = `https://www.youtube.com/watch?v=` + movieTrailerKey */
      
  })
  .catch(err => {
    //console.log(err);
});
}