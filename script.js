let wordToSearch = document.getElementById('search')
let serchApiStart = 'https://api.themoviedb.org/3/search/movie?api_key=fab095e2e128229267dcab57b84df46f&language=es&query='
let searchApiFin = '&page=1&include_adult=false&region=es'



function searchMovie(){  
    let temp = escape(wordToSearch.value)
    let url = serchApiStart + temp + searchApiFin
    console.log(url)
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        let movieApi = data.results[0]
        let posterUrl = "http://image.tmdb.org/t/p/w500//"
        let divSelected = document.getElementById('container')
        divSelected.innerHTML = ``
        divSelected.innerHTML = `
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
              <img id="imgSelected" class="d-block w-100" src=${posterUrl+movieApi.backdrop_path} class="d-block w-100" alt="...">
          </div>
        </div>
      </div>
        <div class="card">
          <div class="card-body">
            <h5 id="titleSelected" class="card-title">${movieApi.original_title}</h5>
            <h6 id="espTitle" class="card-subtitle mb-2 text-muted">${movieApi.title}</h6>
            <p id="synopsisSelected" class="card-text">${movieApi.overview}</p>
            <img id="posterApi" src=${posterUrl+movieApi.poster_path} alt="">
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>`
    })
    
    
    .catch(err => {
        //console.log(err);
    });
}   

     console.log(serchApiStart + wordToSearch + searchApiFin)
    document.getElementById('searchButton').addEventListener('click', searchMovie);
    document.getElementById('search').addEventListener('blur', searchMovie);
    //document.getElementById('search').addEventListener('focus', searchMovie);

