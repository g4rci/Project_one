



function getMovie1(){    
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=fab095e2e128229267dcab57b84df46f&language=es&sort_by=popularity.desc&include_adult=false&include_video=false').then(Response => Response.json())
    .then(data => {
        let num = Math.floor(Math.random()*20);
       let movie1Api = data.results[num]
       let posterUrl = "http://image.tmdb.org/t/p/w500//"
       document.getElementById("movie1").src = posterUrl+movie1Api.backdrop_path;
       document.getElementById("title1").innerHTML = movie1Api.original_title;
       document.getElementById("synopsis1").innerHTML = movie1Api.overview;
       console.log(movie1Api)
    })
    .catch(err => {
        console.log(err);
    });
      }    
    getMovie1();


function getMovie2(){    
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=fab095e2e128229267dcab57b84df46f&language=es&sort_by=popularity.desc&include_adult=false&include_video=false').then(Response => Response.json())
    .then(data => {
        let num = Math.floor(Math.random()*20);
        let movie2Api = data.results[num]
        let posterUrl = "http://image.tmdb.org/t/p/w500//"
        document.getElementById("movie2").src = posterUrl+movie2Api.backdrop_path;
        document.getElementById("title2").innerHTML = movie2Api.original_title;
        document.getElementById("synopsis2").innerHTML = movie2Api.overview;
        console.log(movie2Api)
    })
    .catch(err => {
        console.log(err);
    });
        }    
    getMovie2();


function getMovie3(){    
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=fab095e2e128229267dcab57b84df46f&language=es&sort_by=popularity.desc&include_adult=false&include_video=false').then(Response => Response.json())
    .then(data => {
        let num = Math.floor(Math.random()*20);
        let movie3Api = data.results[num]
        let posterUrl = "http://image.tmdb.org/t/p/w500//"
        document.getElementById("movie3").src = posterUrl+movie3Api.backdrop_path;
        document.getElementById("title3").innerHTML = movie3Api.original_title;
        document.getElementById("synopsis3").innerHTML = movie3Api.overview;
        console.log(movie3Api)
    })
    .catch(err => {
        console.log(err);
    });
        }    
    getMovie3();

   // console.log(data)
 