var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let numRan = Math.floor(Math.random()*15) 
let array2 = array.splice(numRan, 6)  
console.log(numRan) 
console.log(array2)   


function getMovie1(){    
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=fab095e2e128229267dcab57b84df46f&language=es&sort_by=popularity.desc&include_adult=false&include_video=false').then(Response => Response.json())
    .then(data => {
       let movie1Api = data.results[array2[0]]
       let posterUrl = "https://image.tmdb.org/t/p/w500//"
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
        let movie2Api = data.results[array2[1]]
        let posterUrl = "https://image.tmdb.org/t/p/w500//"
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
        let movie3Api = data.results[array2[2]]
        let posterUrl = "https://image.tmdb.org/t/p/w500//"
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

function getMovie4(){    
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=fab095e2e128229267dcab57b84df46f&language=es&sort_by=popularity.desc&include_adult=false&include_video=false').then(Response => Response.json())
    .then(data => {
        let movie4Api = data.results[array2[3]]
        let posterUrl = "https://image.tmdb.org/t/p/w500//"
        document.getElementById("movie4").src = posterUrl+movie4Api.backdrop_path;
        document.getElementById("title4").innerHTML = movie4Api.original_title;
        document.getElementById("synopsis4").innerHTML = movie4Api.overview;
        console.log(movie4Api)
    })
    .catch(err => {
        console.log(err);
    });
        }    
    getMovie4();

function getMovie5(){    
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=fab095e2e128229267dcab57b84df46f&language=es&sort_by=popularity.desc&include_adult=false&include_video=false').then(Response => Response.json())
    .then(data => {
        let movie5Api = data.results[array2[4]]
        let posterUrl = "https://image.tmdb.org/t/p/w500//"
        document.getElementById("movie5").src = posterUrl+movie5Api.backdrop_path;
        document.getElementById("title5").innerHTML = movie5Api.original_title;
        document.getElementById("synopsis5").innerHTML = movie5Api.overview;
        console.log(movie5Api)
    })
    .catch(err => {
        console.log(err);
    });
        }    
    getMovie5();

    function getMovie6(){    
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=fab095e2e128229267dcab57b84df46f&language=es&sort_by=popularity.desc&include_adult=false&include_video=false').then(Response => Response.json())
        .then(data => {
           let movie6Api = data.results[array2[5]]
           let posterUrl = "https://image.tmdb.org/t/p/w500//"
           document.getElementById("movie6").src = posterUrl+movie6Api.backdrop_path;
           document.getElementById("title6").innerHTML = movie6Api.original_title;
           document.getElementById("synopsis6").innerHTML = movie6Api.overview;
           console.log(movie6Api)
        })
        .catch(err => {
            console.log(err);
        });
          }    
        getMovie6();

   // console.log(data)
 