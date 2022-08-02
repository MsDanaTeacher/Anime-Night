const url = "https://api.jikan.moe/v3/search/anime?q=naruto"
 
const cardDiv = document.querySelector('#card-div')
 
const topDiv = document.querySelector('#top-div')
const bottomDiv = document.querySelector('#bottom-div')
const addMovieForm = document.querySelector('#movie-form')
let toggleDarkLight = document.querySelector("#dark-light-button")

toggleDarkLight.addEventListener('mouseover', (e) => {
    toggleDarkLight.innerText = "Light"
    topDiv.style.backgroundColor = "grey";
    bottomDiv.style.backgroundColor = "black";
})

toggleDarkLight.addEventListener('mouseout', (e) => {
    toggleDarkLight.innerText = "Dark"
    topDiv.style.backgroundColor = "yellow";
    bottomDiv.style.backgroundColor = "orange";
})

addMovieForm.addEventListener('submit', (e) => {
   e.preventDefault()
   let newCardMovie = e.target.movie.value
   let newCardImage = e.target.image.value
   let newCardScore = e.target.score.value
   let newCardRating = e.target.rating.value
   console.log('new', newCardImage)
  
   let newCardObj = {
       title: newCardMovie,
       image_url: newCardImage,
       score: newCardScore,
       rated: newCardRating,
   }
 
   renderMovie(newCardObj)
   addMovieForm.reset()
})
 
fetch(url)
.then(res=> res.json())
.then(results => {
   let firstTenMovies = results.results.splice(0, 10)
   firstTenMovies.forEach(movie => {
       renderMovie(movie)
   })
})
 
 
const renderMovie = (movie) => {
   let movieImage = document.createElement('img')
       movieImage.src = movie.image_url
       movieImage.style.height = "300px";

       let movieTitle = document.createElement('h4')
       movieTitle.innerText = movie.title 
 
       let movieScore = document.createElement('p')
       movieScore.innerText = `Score: ${movie.score}`
 
       let movieRating = document.createElement('p')
       movieRating.innerText = `Rating: ${movie.rated}`
       movieRating.id ="rate"

       let newMovieCard = document.createElement('td')
       newMovieCard.className = "new-card"
       newMovieCard.append(movieImage, movieTitle, movieScore, movieRating)
      
       bottomDiv.append(newMovieCard)
      
      

    //    cardDiv.append(movieImage, movieTitle, movieScore, movieRating)
       }
