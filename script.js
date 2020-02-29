let posterUrl = "http://image.tmdb.org/t/p/w500//"

function createFunction2(){    
    fetch("https://api.themoviedb.org/3/search/movie?api_key=fab095e2e128229267dcab57b84df46f&language=es&query=avengers%20endgame&page=1&include_adult=false",)
   .then(Response => Response.json())
      
    
   .then(data => {
       console.log(data.results[0])
       const img (`${posterUrl}${data.results[0].poster_path}`)

   })
    
   .catch(err => {
       console.log(err);
   });
     }    
   createFunction2();
   
   
   