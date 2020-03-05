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
        <div id="iframeContainer" class="embed-responsive embed-responsive-16by9">
                <iframe id="iframe"  class="embed-responsive-item" src="" ></iframe>
        </div>
       </div>
        </div>
        <footer>
        <div id="divVod">
        </div>
      </footer>`
        searchTrailer(movieApi)
        vodFunction()
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
    iframe.src= `https://www.youtube.com/embed/` + data.results[0].key
  })
  .catch(err => {
    //console.log(err);
});
}
 
function vodFunction(){    
    fetch("https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/idlookup?country=es&source_id=19995&source=tmdb", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
            "x-rapidapi-key": "dee1be226amshd4f1007ee0cfd66p16133djsnb064774f81c4"
        }
    })
    .then(Response => Response.json())
    .then(data => {
        let divVod = document.getElementById('divVod')
        divVod.innerHTML = ""
        data.collection.locations.forEach((el) => {
          divVod.innerHTML += `<a href="${el.url}"><img id="vodLogo" src="${el.icon}" alt=""></a>`
        })
        
    })
        .catch(err => {
        console.log(err);
    });
}  

   
   
    //document.getElementById('searchButton').addEventListener('focus', searchTrailer);
     
     document.getElementById('searchButton').addEventListener('click', searchMovie);
     document.getElementById('search').addEventListener('submit', searchMovie);
    

     document.getElementById('search').addEventListener('blur', searchMovie);
   
